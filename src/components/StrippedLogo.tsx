import { useEffect, useState } from 'react';

const LOGO_SRC = '/images/company/ChatGPT_Image_Aug_1,_2026,_08_05_30_PM.png';

function stripBackground(src: string, cb: (url: string) => void) {
  const img = new Image();
  img.onload = () => {
    try {
      const { naturalWidth: W, naturalHeight: H } = img;
      const canvas = document.createElement('canvas');
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, W, H);
      const d = imageData.data;

      const isNearWhite = (i: number) =>
        d[i] > 245 && d[i + 1] > 245 && d[i + 2] > 245;

      for (let i = 0; i < d.length; i += 4) {
        if (isNearWhite(i)) d[i + 3] = 0;
      }

      let minX = W, minY = H, maxX = 0, maxY = 0;
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          if (d[(y * W + x) * 4 + 3] !== 0) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }

      if (maxX < minX || maxY < minY) { cb(src); return; }

      const pad = 6;
      const cropX = Math.max(0, minX - pad);
      const cropY = Math.max(0, minY - pad);
      const cropW = Math.min(W - cropX, maxX - minX + pad * 2);
      const cropH = Math.min(H - cropY, maxY - minY + pad * 2);

      const out = document.createElement('canvas');
      out.width = cropW;
      out.height = cropH;
      const octx = out.getContext('2d')!;
      octx.putImageData(imageData, -cropX, -cropY);
      cb(out.toDataURL('image/png'));
    } catch {
      cb(src);
    }
  };
  img.onerror = () => cb(src);
  img.src = src.replace(/ /g, '%20');
}

interface StrippedLogoProps {
  height: number;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function StrippedLogo({
  height,
  alt = 'Meridian4',
  style,
  className,
}: StrippedLogoProps) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    stripBackground(LOGO_SRC, setUrl);
  }, []);

  return (
    <img
      src={url || LOGO_SRC}
      alt={alt}
      className={className}
      style={{
        height: `${height}px`,
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
        ...style,
      }}
    />
  );
}
