import propImg1 from '@/assets/images/properties/WhatsApp_Image_2026-08-02_at_7.18.12_PM.jpeg';
import propImg2 from '@/assets/images/properties/WhatsApp_Image_2026-08-02_at_7.18.13_PM.jpeg';
import propImg3 from '@/assets/images/properties/WhatsApp_Image_2026-08-02_at_7.18.13_PM_(1).jpeg';
import propImg4 from '@/assets/images/properties/WhatsApp_Image_2026-08-02_at_7.18.13_PM_(2).jpeg';
import propImg5 from '@/assets/images/properties/WhatsApp_Image_2026-08-02_at_7.18.14_PM.jpeg';

import landImg1 from '@/assets/images/properties/WhatsApp_Image_2026-08-05_at_6.50.59_PM.jpeg';
import landImg2 from '@/assets/images/properties/WhatsApp_Image_2026-08-05_at_6.51.00_PM_(1).jpeg';
import landImg3 from '@/assets/images/properties/WhatsApp_Image_2026-08-05_at_6.51.01_PM.jpeg';
import landImg4 from '@/assets/images/properties/WhatsApp_Image_2026-08-05_at_6.51.02_PM_(1).jpeg';
import landImg5 from '@/assets/images/properties/WhatsApp_Image_2026-08-05_at_6.51.02_PM_(2).jpeg';

/* ------------------------------------------------------------------ */
/*  Existing lightweight property model (used by project cards/grid)  */
/* ------------------------------------------------------------------ */
export interface Property {
  id: string;
  name: string;
  builder: string;
  location: string;
  locationId: string;
  startingPrice: string;
  priceValue: number;
  configuration: string;
  area: string;
  possession: string;
  rera: string;
  status: 'Ready to Move' | 'Under Construction' | 'New Launch';
  tag: 'Premium' | 'New Launch' | 'Ready to Move' | 'Under Construction';
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  floorPlans: { name: string; area: string; image: string }[];
  bedrooms: number;
  bathrooms: number;
  parkings: number;
  facing: string;
  totalFloors: number;
  totalUnits: number;
  rentalYield: string;
  appreciation: string;
  coordinates: { x: number; y: number };
}

export const properties: Property[] = [
  {
    id: 'p1',
    name: 'Meridian4 Prestige Heights',
    builder: 'Prestige Group',
    location: 'Whitefield',
    locationId: 'whitefield',
    startingPrice: '₹1.2 Cr',
    priceValue: 12000000,
    configuration: '2, 3, 4 BHK',
    area: '1,250 – 3,800 sq.ft.',
    possession: 'Dec 2026',
    rera: 'PRM/KA/RERA/1251/446/PR/2023/001234',
    status: 'Under Construction',
    tag: 'Premium',
    image: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/29149086/pexels-photo-29149086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Meridian4 Prestige Heights redefines luxury living in the heart of Whitefield. With world-class amenities, spacious layouts, and seamless connectivity to IT corridors, this project is designed for those who demand the finest in urban living.',
    amenities: ['Infinity Pool', 'Clubhouse', 'Gymnasium', '24/7 Security', 'Power Backup', 'Covered Parking', "Children's Play Area", 'Jogging Track', 'Spa & Wellness', 'Concierge Service'],
    floorPlans: [
      { name: '2 BHK', area: '1,250 sq.ft.', image: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: '3 BHK', area: '1,850 sq.ft.', image: 'https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: '4 BHK', area: '3,800 sq.ft.', image: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    ],
    bedrooms: 3,
    bathrooms: 3,
    parkings: 2,
    facing: 'East',
    totalFloors: 28,
    totalUnits: 320,
    rentalYield: '4.2%',
    appreciation: '12% p.a.',
    coordinates: { x: 72, y: 38 },
  },
  {
    id: 'p2',
    name: 'Meridian4 Sapphire Residences',
    builder: 'Brigade Group',
    location: 'Sarjapur Road',
    locationId: 'sarjapur',
    startingPrice: '₹85 L',
    priceValue: 8500000,
    configuration: '2, 3 BHK',
    area: '1,100 – 2,200 sq.ft.',
    possession: 'Mar 2025',
    rera: 'PRM/KA/RERA/1251/446/PR/2022/005678',
    status: 'Ready to Move',
    tag: 'Ready to Move',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/31484542/pexels-photo-31484542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Meridian4 Sapphire Residences offers an unparalleled living experience on Sarjapur Road. Thoughtfully designed apartments with premium finishes, surrounded by lush green landscapes and world-class recreational amenities.',
    amenities: ['Swimming Pool', 'Clubhouse', 'Gymnasium', 'Security', 'Power Backup', 'Parking', "Children's Play Area", 'Tennis Court', 'Yoga Deck', 'Cafeteria'],
    floorPlans: [
      { name: '2 BHK', area: '1,100 sq.ft.', image: 'https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: '3 BHK', area: '2,200 sq.ft.', image: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    ],
    bedrooms: 2,
    bathrooms: 2,
    parkings: 1,
    facing: 'North-East',
    totalFloors: 18,
    totalUnits: 240,
    rentalYield: '3.8%',
    appreciation: '10% p.a.',
    coordinates: { x: 55, y: 62 },
  },
  {
    id: 'p3',
    name: 'Meridian4 Gold Enclave',
    builder: 'Sobha Limited',
    location: 'Electronic City',
    locationId: 'electronic-city',
    startingPrice: '₹68 L',
    priceValue: 6800000,
    configuration: '1, 2, 3 BHK',
    area: '650 – 1,800 sq.ft.',
    possession: 'Jun 2027',
    rera: 'PRM/KA/RERA/1251/446/PR/2024/009012',
    status: 'New Launch',
    tag: 'New Launch',
    image: 'https://images.pexels.com/photos/7598368/pexels-photo-7598368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/7598368/pexels-photo-7598368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/29149086/pexels-photo-29149086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Meridian4 Gold Enclave brings affordable luxury to Electronic City. Perfectly positioned for IT professionals, these smartly designed homes offer excellent value with premium amenities and strong investment potential.',
    amenities: ['Swimming Pool', 'Clubhouse', 'Gymnasium', 'Security', 'Power Backup', 'Parking', "Children's Play Area", 'Badminton Court', 'Community Hall', 'Landscaped Gardens'],
    floorPlans: [
      { name: '1 BHK', area: '650 sq.ft.', image: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: '2 BHK', area: '1,100 sq.ft.', image: 'https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: '3 BHK', area: '1,800 sq.ft.', image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    ],
    bedrooms: 2,
    bathrooms: 2,
    parkings: 1,
    facing: 'South',
    totalFloors: 22,
    totalUnits: 480,
    rentalYield: '4.5%',
    appreciation: '11% p.a.',
    coordinates: { x: 38, y: 72 },
  },
  {
    id: 'p4',
    name: 'Meridian4 Crown Towers',
    builder: 'Embassy Group',
    location: 'Hebbal',
    locationId: 'hebbal',
    startingPrice: '₹1.8 Cr',
    priceValue: 18000000,
    configuration: '3, 4, 5 BHK',
    area: '2,200 – 6,500 sq.ft.',
    possession: 'Sep 2026',
    rera: 'PRM/KA/RERA/1251/446/PR/2023/003456',
    status: 'Under Construction',
    tag: 'Premium',
    image: 'https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/36877062/pexels-photo-36877062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Meridian4 Crown Towers stands as an icon of luxury in North Bengaluru. Ultra-premium residences with panoramic lake views, private elevators, and bespoke interiors crafted for the most discerning buyers.',
    amenities: ['Rooftop Infinity Pool', 'Private Theater', 'Gymnasium', 'Concierge', 'Power Backup', 'Valet Parking', 'Sky Lounge', 'Spa & Sauna', 'Golf Simulator', 'Helipad'],
    floorPlans: [
      { name: '3 BHK', area: '2,200 sq.ft.', image: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: '4 BHK', area: '3,800 sq.ft.', image: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: 'Penthouse', area: '6,500 sq.ft.', image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    ],
    bedrooms: 4,
    bathrooms: 4,
    parkings: 3,
    facing: 'West – Lake View',
    totalFloors: 42,
    totalUnits: 180,
    rentalYield: '3.5%',
    appreciation: '14% p.a.',
    coordinates: { x: 42, y: 22 },
  },
  {
    id: 'p5',
    name: 'Meridian4 Sky Villas',
    builder: 'Puravankara',
    location: 'Yelahanka',
    locationId: 'yelahanka',
    startingPrice: '₹95 L',
    priceValue: 9500000,
    configuration: '2, 3 BHK Villas',
    area: '1,400 – 2,800 sq.ft.',
    possession: 'Mar 2026',
    rera: 'PRM/KA/RERA/1251/446/PR/2023/007890',
    status: 'Under Construction',
    tag: 'Premium',
    image: 'https://images.pexels.com/photos/17174768/pexels-photo-17174768.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/17174768/pexels-photo-17174768.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7587877/pexels-photo-7587877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/29149086/pexels-photo-29149086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Meridian4 Sky Villas offer an exclusive villa lifestyle in the serene surroundings of Yelahanka. Each villa is thoughtfully crafted with private gardens, spacious terraces, and high-end specifications.',
    amenities: ['Private Garden', 'Community Pool', 'Clubhouse', 'Security', 'Power Backup', 'Parking', "Children's Play Area", 'Jogging Track', 'Amphitheatre', 'Organic Farm'],
    floorPlans: [
      { name: '2 BHK Villa', area: '1,400 sq.ft.', image: 'https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: '3 BHK Villa', area: '2,800 sq.ft.', image: 'https://images.pexels.com/photos/7587877/pexels-photo-7587877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    ],
    bedrooms: 3,
    bathrooms: 3,
    parkings: 2,
    facing: 'East',
    totalFloors: 3,
    totalUnits: 85,
    rentalYield: '3.9%',
    appreciation: '13% p.a.',
    coordinates: { x: 32, y: 18 },
  },
  {
    id: 'p6',
    name: 'Meridian4 Horizon Park',
    builder: 'Godrej Properties',
    location: 'Devanahalli',
    locationId: 'devanahalli',
    startingPrice: '₹55 L',
    priceValue: 5500000,
    configuration: '1, 2, 3 BHK',
    area: '600 – 1,600 sq.ft.',
    possession: 'Dec 2027',
    rera: 'PRM/KA/RERA/1251/446/PR/2024/011234',
    status: 'New Launch',
    tag: 'New Launch',
    image: 'https://images.pexels.com/photos/31114878/pexels-photo-31114878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/31114878/pexels-photo-31114878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/29149086/pexels-photo-29149086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Meridian4 Horizon Park is strategically located near Kempegowda International Airport in Devanahalli. This emerging micro-market offers exceptional investment opportunities with rapid infrastructure growth.',
    amenities: ['Swimming Pool', 'Clubhouse', 'Gymnasium', 'Security', 'Power Backup', 'Parking', "Children's Play Area", 'Cricket Ground', 'Community Hall', 'Retail Zone'],
    floorPlans: [
      { name: '1 BHK', area: '600 sq.ft.', image: 'https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: '2 BHK', area: '1,100 sq.ft.', image: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { name: '3 BHK', area: '1,600 sq.ft.', image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    ],
    bedrooms: 2,
    bathrooms: 2,
    parkings: 1,
    facing: 'North',
    totalFloors: 15,
    totalUnits: 560,
    rentalYield: '5.1%',
    appreciation: '16% p.a.',
    coordinates: { x: 48, y: 8 },
  },
];

/* ------------------------------------------------------------------ */
/*  Full property model — mirrors every field of the                  */
/*  Property Information Form. Structured so a future backend can     */
/*  return the exact same shape without any UI changes.                */
/* ------------------------------------------------------------------ */

export interface PropertyAddress {
  line1: string;
  line2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface PropertyLocation {
  latitude: number;
  longitude: number;
  placeId: string;
}

export interface NearbyPlace {
  name: string;
  category: string;
  distance: string;
  travelTime: string;
}

export interface FloorPlanDetail {
  name: string;
  configuration: string;
  area: string;
  price: string;
  image: string;
}

export interface PropertyDocument {
  name: string;
  type: string;
  size: string;
  url: string;
}

export interface LegalInfo {
  reraNumber: string;
  reraStatus: string;
  approvalAuthority: string;
  landUse: string;
  titleClearance: string;
  encumbranceCertificate: string;
  occupancyCertificate: string;
  commencementCertificate: string;
  buildingPlanApproved: string;
  litigationStatus: string;
}

export interface OwnerInfo {
  name: string;
  designation: string;
  company: string;
  email: string;
  phone: string;
  whatsapp: string;
  reraAgentId: string;
}

export interface ContactDetails {
  salesOffice: string;
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  workingHours: string;
}

export interface ScheduleVisit {
  availableSlots: { day: string; time: string }[];
  bookingAmount: string;
  notes: string;
}

export interface SEOInfo {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}

export interface PropertyVideo {
  title: string;
  thumbnail: string;
  url: string;
  duration: string;
}

export interface PremiumProperty {
  slug: string;
  title: string;
  propertyType: string;
  status: 'Ready to Move' | 'Under Construction' | 'New Launch';
  tag: 'Premium' | 'New Launch' | 'Ready to Move' | 'Under Construction';
  address: PropertyAddress;
  price: {
    startingPrice: string;
    pricePerSqft: string;
    priceRange: string;
    bookingAmount: string;
    tokenAmount: string;
    negotiable: boolean;
  };
  area: {
    carpetArea: string;
    builtUpArea: string;
    superBuiltUpArea: string;
    plotArea: string;
  };
  bhk: string;
  configurations: string[];
  builder: string;
  builderDescription: string;
  amenities: string[];
  images: string[];
  videos: PropertyVideo[];
  floorPlans: FloorPlanDetail[];
  legal: LegalInfo;
  documents: PropertyDocument[];
  owner: OwnerInfo;
  highlights: string[];
  location: PropertyLocation;
  nearbyPlaces: NearbyPlace[];
  contact: ContactDetails;
  scheduleVisit: ScheduleVisit;
  seo: SEOInfo;
  availability: {
    totalUnits: number;
    unitsSold: number;
    unitsAvailable: number;
    possessionDate: string;
    availabilityStatus: string;
  };
  overview: string;
  buildingInfo: {
    totalFloors: number;
    totalTowers: number;
    totalUnits: number;
    unitsPerFloor: number;
    floorToCeilingHeight: string;
    structureType: string;
    earthquakeResistant: string;
    fireSafety: string;
  };
  pricingBreakdown: {
    configuration: string;
    area: string;
    basePrice: string;
    amenitiesCost: string;
    parkingCost: string;
    total: string;
  }[];
  similarProperties: string[];
  investmentHighlights: string[];
  buildingDetails: { label: string; value: string }[];
}

export const premiumProperty: PremiumProperty = {
  slug: 'k-narayanapura-rental-building',
  title: 'Residential House',
  propertyType: 'Residential House',
  status: 'Ready to Move',
  tag: 'Ready to Move',
  address: {
    line1: 'K. Narayanapura (RK Hegde Nagar)',
    line2: 'Narayanapura',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560077',
    country: 'India',
  },
  price: {
    startingPrice: '₹2.45 Crore',
    pricePerSqft: '—',
    priceRange: '₹2.45 Crore',
    bookingAmount: '₹5,00,000',
    tokenAmount: '₹5,00,000',
    negotiable: true,
  },
  area: {
    carpetArea: '—',
    builtUpArea: '—',
    superBuiltUpArea: 'Approx. 4,000 sq.ft.',
    plotArea: '1,200 sq.ft.',
  },
  bhk: '1 & 2 BHK',
  configurations: ['1 BHK', '2 BHK'],
  builder: 'Independent Property',
  builderDescription: '',
  amenities: [
    'Infinity Pool',
    'Grand Clubhouse',
    'State-of-the-art Gymnasium',
    '24/7 Security with CCTV',
    '100% Power Backup',
    'Covered Parking',
    "Children's Play Area",
    'Jogging & Cycling Track',
    'Spa & Wellness Centre',
    'Concierge Service',
    'Tennis Court',
    'Squash Court',
    'Amphitheatre',
    'Landscaped Gardens',
    'Rooftop Sky Lounge',
    'EV Charging Stations',
  ],
  images: [propImg1, propImg2, propImg3, propImg4, propImg5],
  videos: [
    {
      title: 'Property Walkthrough',
      thumbnail: propImg1,
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '4:32',
    },
    {
      title: 'Aerial Drone View',
      thumbnail: propImg3,
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '2:18',
    },
  ],
  floorPlans: [
    {
      name: '3 BHK Premier',
      configuration: '3 Bed, 3 Bath, 1 Kitchen, 2 Balcony',
      area: '1,580 sq.ft.',
      price: '₹1.45 Cr',
      image: propImg2,
    },
    {
      name: '4 BHK Signature',
      configuration: '4 Bed, 4 Bath, 1 Kitchen, 3 Balcony',
      area: '2,420 sq.ft.',
      price: '₹2.23 Cr',
      image: propImg4,
    },
    {
      name: '4 BHK Penthouse',
      configuration: '4 Bed, 5 Bath, 1 Kitchen, Private Terrace',
      area: '4,180 sq.ft.',
      price: '₹3.85 Cr',
      image: propImg5,
    },
  ],
  legal: {
    reraNumber: 'PRM/KA/RERA/1251/446/PR/2023/001789',
    reraStatus: 'Registered & Active',
    approvalAuthority: 'BBMP & BDA',
    landUse: 'Residential',
    titleClearance: 'Clear — Freehold',
    encumbranceCertificate: 'Available — Nil Encumbrance',
    occupancyCertificate: 'Pending — Expected with Possession',
    commencementCertificate: 'Issued — CC dated 15 Jan 2024',
    buildingPlanApproved: 'Approved — BBMP dated 08 Dec 2023',
    litigationStatus: 'No Pending Litigation',
  },
  documents: [
    { name: 'RERA Certificate', type: 'PDF', size: '1.2 MB', url: '#' },
    { name: 'Building Plan Approval', type: 'PDF', size: '3.8 MB', url: '#' },
    { name: 'Commencement Certificate', type: 'PDF', size: '0.9 MB', url: '#' },
    { name: 'Title Deed', type: 'PDF', size: '2.1 MB', url: '#' },
    { name: 'Encumbrance Certificate', type: 'PDF', size: '0.6 MB', url: '#' },
    { name: 'Brochure', type: 'PDF', size: '8.4 MB', url: '#' },
  ],
  owner: {
    name: 'Avinash Sharma',
    designation: 'Senior Property Consultant',
    company: 'MERIDIAN4 Realty',
    email: 'avinash@meridian4.com',
    phone: '+91 89510 25158',
    whatsapp: '+91 89510 25158',
    reraAgentId: 'PRM/KA/RERA/1251/446/PR/AG/2023/008821',
  },
  highlights: [
    'A Khata Property',
    'Clear Title',
    'Ready to Move',
    'Excellent Rental Income',
    '6 Residential Units',
    'Cauvery Water',
    'Prime Residential Location',
    'Only 2.5 km from Manyata Tech Park',
    'Suitable for Investment',
    'High Rental Demand',
  ],
  location: {
    latitude: 13.0451,
    longitude: 77.6212,
    placeId: 'ChIJk-narayanapura-bengaluru',
  },
  nearbyPlaces: [
    { name: 'Manyata Tech Park', category: 'IT Park', distance: '2.5 km', travelTime: '7 mins' },
    { name: 'Elements Mall', category: 'Mall', distance: '3.0 km', travelTime: '8 mins' },
    { name: 'Kristu Jayanti College', category: 'School', distance: '2.2 km', travelTime: '6 mins' },
    { name: 'Bangalore International School', category: 'School', distance: '2.8 km', travelTime: '8 mins' },
    { name: 'Regal Hospital', category: 'Hospital', distance: '2.4 km', travelTime: '7 mins' },
    { name: 'Aster CMI Hospital', category: 'Hospital', distance: '5.2 km', travelTime: '12 mins' },
    { name: 'Bhartiya City', category: 'Township', distance: '3.8 km', travelTime: '10 mins' },
    { name: 'Nagawara Metro Station', category: 'Metro', distance: '4.5 km', travelTime: '12 mins' },
    { name: 'Hebbal Flyover', category: 'Road', distance: '6.5 km', travelTime: '15 mins' },
    { name: 'Kempegowda International Airport', category: 'Airport', distance: '24 km', travelTime: '35 mins' },
  ],
  contact: {
    salesOffice: 'K. Narayanapura (RK Hegde Nagar), Bengaluru – 560077',
    phone: '+91 89510 25158',
    whatsapp: '+91 89510 25158',
    email: 'sales@meridian4.com',
    website: 'www.meridian4.com',
    workingHours: 'Mon – Sun, 9:30 AM – 7:00 PM',
  },
  scheduleVisit: {
    availableSlots: [
      { day: 'Monday', time: '10:00 AM – 12:00 PM' },
      { day: 'Tuesday', time: '2:00 PM – 4:00 PM' },
      { day: 'Wednesday', time: '11:00 AM – 1:00 PM' },
      { day: 'Thursday', time: '3:00 PM – 5:00 PM' },
      { day: 'Friday', time: '4:00 PM – 6:00 PM' },
      { day: 'Saturday', time: '10:00 AM – 12:00 PM' },
    ],
    bookingAmount: '₹2,00,000',
    notes: 'A Meridian4 property consultant will confirm your slot within 2 hours of booking. Site visits include a complimentary cab pickup and drop within 15 km.',
  },
  seo: {
    metaTitle: 'Residential House in K. Narayanapura (RK Hegde Nagar), Bengaluru | MERIDIAN4',
    metaDescription: 'A well-maintained residential rental building in K. Narayanapura, Bengaluru. A Khata, clear title, 6 units, Cauvery water. ₹2.45 Crore. Near Manyata Tech Park.',
    keywords: ['residential rental building Bengaluru', 'K Narayanapura property', 'A Khata building', 'investment property Bengaluru', 'Manyata Tech Park real estate'],
    ogTitle: 'Residential House — K. Narayanapura (RK Hegde Nagar), Bengaluru',
    ogDescription: 'Independent residential rental building with 6 units, A Khata, clear title, Cauvery water. ₹2.45 Crore. Near Manyata Tech Park.',
    canonicalUrl: 'https://www.meridian4.com/property/k-narayanapura-rental-building',
  },
  availability: {
    totalUnits: 6,
    unitsSold: 0,
    unitsAvailable: 6,
    possessionDate: 'Ready to Move',
    availabilityStatus: 'Ready to Move',
  },
  overview:
    'This well-maintained residential house is located in the rapidly developing locality of K. Narayanapura, Bengaluru. Built on a 1,200 sq.ft. A Khata plot, the property consists of six residential rental units including two spacious 1 BHK units and four well-designed 2 BHK units with an approximate super built-up area of 4,000 sq.ft. Constructed as a Ground + 2 floor building, the property has a clear and marketable title, Cauvery water connection, and is situated just 2.5 km from Manyata Tech Park. The property offers an expected rental income of ₹1 lakh per month, making it an excellent investment opportunity.',
  buildingInfo: {
    totalFloors: 3,
    totalTowers: 1,
    totalUnits: 6,
    unitsPerFloor: 2,
    floorToCeilingHeight: 'Standard',
    structureType: 'RCC Framed Structure',
    earthquakeResistant: 'Zone II Compliant',
    fireSafety: 'Equipped',
  },
  pricingBreakdown: [
    { configuration: '3 BHK Premier', area: '1,580 sq.ft.', basePrice: '₹1.45 Cr', amenitiesCost: '₹8.5 L', parkingCost: '₹3.5 L', total: '₹1.57 Cr' },
    { configuration: '4 BHK Signature', area: '2,420 sq.ft.', basePrice: '₹2.23 Cr', amenitiesCost: '₹12.5 L', parkingCost: '₹5.0 L', total: '₹2.40 Cr' },
    { configuration: '4 BHK Penthouse', area: '4,180 sq.ft.', basePrice: '₹3.85 Cr', amenitiesCost: '₹18.0 L', parkingCost: '₹7.5 L', total: '₹4.10 Cr' },
  ],
  similarProperties: [],
  investmentHighlights: [
    'Excellent Rental Income Opportunity',
    'Located near Manyata Tech Park',
    'High Appreciation Potential',
    'Strong Rental Demand',
    'Prime Residential Area',
    'Ideal for Long-term Investment',
    'Suitable for End Users and Investors',
  ],
  buildingDetails: [
    { label: 'Property Type', value: 'Residential House' },
    { label: 'Property Status', value: 'Ready to Move' },
    { label: 'Khata', value: 'A Khata' },
    { label: 'Title', value: 'Clear & Marketable Title' },
    { label: 'Plot Area', value: '1200 Sq.ft' },
    { label: 'Super Built-up Area', value: 'Approx. 4000 Sq.ft' },
    { label: 'Building Configuration', value: 'Ground + 2 Floors' },
    { label: 'Residential Units', value: '2 Units of 1 BHK, 4 Units of 2 BHK' },
    { label: 'Water Supply', value: 'Cauvery Water' },
    { label: 'Electricity', value: 'Individual Meter Connections' },
    { label: 'Parking', value: 'Available' },
    { label: 'Road Width', value: '30 Feet' },
    { label: 'Price', value: '₹2.45 Crore' },
    { label: 'Negotiable', value: 'Yes' },
  ],
};

export function getPremiumPropertyBySlug(slug: string): PremiumProperty | undefined {
  if (slug === premiumProperty.slug) return premiumProperty;
  return undefined;
}

export interface LandProperty {
  slug: string;
  title: string;
  propertyType: string;
  tag: string;
  badges: string[];
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  contactForPrice: string;
  contactPhone: string;
  contactWhatsapp: string;
  overview: string;
  landInfo: { label: string; value: string }[];
  sites: {
    name: string;
    description: string;
    landInfo: { label: string; value: string }[];
  }[];
  highlights: string[];
  location: { latitude: number; longitude: number; mapQuery: string };
  nearbyPlaces: NearbyPlace[];
  investmentHighlights: string[];
  contact: {
    company: string;
    phone: string;
    whatsapp: string;
    email: string;
    website: string;
  };
  scheduleVisit: {
    availableSlots: { day: string; time: string }[];
  };
  images: string[];
}

export const landProperties: LandProperty[] = [
{
  slug: 'premium-residential-plot-vemagal',
  title: 'Premium Residential Plot in Vemagal',
  propertyType: 'Residential Plot',
  tag: 'Premium',
  badges: ['Ready for Registration', 'DC Converted', 'E-Khata', 'Gated Community'],
  address: {
    line1: 'Ward No. 1',
    line2: 'Vemagal Kurugal Town Municipality',
    city: 'Kolar District',
    state: 'Karnataka',
    pincode: '563101',
    country: 'India',
  },
  contactForPrice: 'Contact for Price',
  contactPhone: '+91 89510 25158',
  contactWhatsapp: '+91 89510 25158',
  overview:
    'Located in the rapidly developing Vemagal Kurugal Town Municipality, this premium residential plot offers an excellent opportunity for both investment and future residential development.\n\nThe property is DC Converted with E-Khata and is ready for immediate registration. Situated inside a fully compounded gated community, it offers 30 ft RCC roads, underground drainage, dedicated electricity infrastructure with street lighting, water facilities, landscaped park area, and a peaceful hill-view ambience.\n\nIts strategic location near educational institutions and the upcoming six-lane airport connectivity highway makes it an ideal investment with excellent future appreciation potential.',
  landInfo: [
    { label: 'Property Type', value: 'Residential Plot' },
    { label: 'Property Status', value: 'Ready for Registration' },
    { label: 'Land Conversion', value: 'DC Converted' },
    { label: 'Khata', value: 'E-Khata' },
    { label: 'Ownership', value: 'Clear & Marketable Title' },
    { label: 'Plot Facing', value: 'South Facing' },
    { label: 'Corner Plot', value: 'Yes' },
    { label: 'Road Access', value: 'Main Road Corner Plot' },
    { label: 'Plot Dimensions (East to West)', value: '40 ft' },
    { label: 'Plot Dimensions (North to South, East Side)', value: '28 ft' },
    { label: 'Plot Dimensions (North to South, West Side)', value: '27 ft' },
    { label: 'Road Width', value: '30 Feet RCC Road' },
    { label: 'Drainage', value: 'Underground Drainage' },
    { label: 'Electricity', value: 'Dedicated Transformer' },
    { label: 'Street Lights', value: 'Available' },
    { label: 'Water Supply', value: 'Available' },
    { label: 'Community', value: 'Fully Compounded Gated Community' },
    { label: 'Park', value: 'Landscaped Park' },
    { label: 'Environment', value: 'Hill View Ambience' },
  ],
  sites: [
    {
      name: 'Site 1 — Corner Plot (South Facing)',
      description:
        'A premium east-facing corner plot situated on the main road within the gated community. This plot offers excellent road access on two sides, making it ideal for a standalone villa or residential construction. The plot features 30 ft RCC roads, underground drainage, dedicated electricity with street lighting, and water supply. Its corner position provides better ventilation, natural light, and higher appreciation potential.',
      landInfo: [
        { label: 'Plot No.', value: '01' },
        { label: 'Property Type', value: 'Residential Plot' },
        { label: 'Property Status', value: 'Ready for Registration' },
        { label: 'Land Conversion', value: 'DC Converted' },
        { label: 'Khata', value: 'E-Khata' },
        { label: 'Ownership', value: 'Clear & Marketable Title' },
        { label: 'Plot Facing', value: 'South Facing' },
        { label: 'Corner Plot', value: 'Yes' },
        { label: 'Road Access', value: 'Main Road Corner Plot' },
        { label: 'Plot Dimensions (East to West)', value: '40 ft' },
        { label: 'Plot Dimensions (North to South, East Side)', value: '28 ft' },
        { label: 'Plot Dimensions (North to South, West Side)', value: '27 ft' },
        { label: 'Road Width', value: '30 Feet RCC Road' },
        { label: 'Drainage', value: 'Underground Drainage' },
        { label: 'Electricity', value: 'Dedicated Transformer' },
        { label: 'Street Lights', value: 'Available' },
        { label: 'Water Supply', value: 'Available' },
        { label: 'Community', value: 'Fully Compounded Gated Community' },
        { label: 'Park', value: 'Landscaped Park' },
        { label: 'Environment', value: 'Hill View Ambience' },
      ],
    },
    {
      name: 'Site 2 — Interior Plot (East Facing)',
      description:
        'A well-positioned south-facing interior plot within the same gated community, offering a peaceful and serene environment with hill views. This plot benefits from all community amenities including 30 ft RCC roads, underground drainage, dedicated electricity, street lighting, and water supply. Its east-facing orientation is considered highly auspicious and is perfect for residential villa construction with excellent morning sunlight exposure.',
      landInfo: [
        { label: 'Plot No.', value: '02' },
        { label: 'Property Type', value: 'Residential Plot' },
        { label: 'Property Status', value: 'Ready for Registration' },
        { label: 'Land Conversion', value: 'DC Converted' },
        { label: 'Khata', value: 'E-Khata' },
        { label: 'Ownership', value: 'Clear & Marketable Title' },
        { label: 'Plot Facing', value: 'East Facing' },
        { label: 'Corner Plot', value: 'No' },
        { label: 'Road Access', value: 'Internal RCC Road' },
        { label: 'Plot Dimensions (East to West)', value: '40 ft' },
        { label: 'Plot Dimensions (North to South)', value: '28 ft' },
        { label: 'Road Width', value: '30 Feet RCC Road' },
        { label: 'Drainage', value: 'Underground Drainage' },
        { label: 'Electricity', value: 'Dedicated Transformer' },
        { label: 'Street Lights', value: 'Available' },
        { label: 'Water Supply', value: 'Available' },
        { label: 'Community', value: 'Fully Compounded Gated Community' },
        { label: 'Park', value: 'Landscaped Park' },
        { label: 'Environment', value: 'Hill View Ambience' },
      ],
    },
  ],
  highlights: [
    'DC Converted',
    'E-Khata',
    'Ready for Registration',
    'Clear Title',
    'South Facing Plot',
    'Main Road Corner Plot',
    '30 Feet RCC Roads',
    'Underground Drainage',
    'Dedicated Transformer',
    'Street Lights',
    'Water Facility',
    'Landscaped Park',
    'Hill View Ambience',
    'Premium Gated Community',
    'Excellent Appreciation Potential',
    'Ideal for Residential Construction',
  ],
  location: {
    latitude: 13.1245,
    longitude: 78.1567,
    mapQuery: 'Vemagal Kurugal Town Municipality, Kolar District, Karnataka',
  },
  nearbyPlaces: [
    { name: 'Government PU College', category: 'School', distance: '2.5 km', travelTime: '6 mins' },
    { name: 'Degree College', category: 'School', distance: '3 km', travelTime: '8 mins' },
    { name: 'Vemagal Town', category: 'Township', distance: '2 km', travelTime: '5 mins' },
    { name: 'Narasapura Industrial Area', category: 'IT Park', distance: '8 km', travelTime: '15 mins' },
    { name: 'KIADB Industrial Area', category: 'IT Park', distance: '10 km', travelTime: '18 mins' },
    { name: 'Kolar City', category: 'Township', distance: '12 km', travelTime: '20 mins' },
    { name: 'Kolar Railway Station', category: 'Railway', distance: '13 km', travelTime: '22 mins' },
    { name: 'Upcoming Airport Access Highway', category: 'Road', distance: '1 km', travelTime: '2 mins' },
    { name: 'Kempegowda International Airport', category: 'Airport', distance: '45 km', travelTime: '45 mins' },
    { name: 'Bengaluru City', category: 'Township', distance: '60 km', travelTime: '1 Hour' },
  ],
  investmentHighlights: [
    'Excellent Appreciation Potential',
    'Future Airport Connectivity',
    'Strategic Growth Corridor',
    'Premium Gated Community',
    'Wide RCC Roads',
    'Peaceful Environment',
    'Ideal for Villa Construction',
    'Excellent Long-term Investment',
    'High Future Demand',
  ],
  contact: {
    company: 'MERIDIAN4',
    phone: '+91 89510 25158',
    whatsapp: '+91 89510 25158',
    email: 'sales@meridian4.com',
    website: 'www.meridian4.com',
  },
  scheduleVisit: {
    availableSlots: [
      { day: 'Monday', time: '10:00 AM – 12:00 PM' },
      { day: 'Tuesday', time: '2:00 PM – 4:00 PM' },
      { day: 'Wednesday', time: '11:00 AM – 1:00 PM' },
      { day: 'Thursday', time: '3:00 PM – 5:00 PM' },
      { day: 'Friday', time: '4:00 PM – 6:00 PM' },
      { day: 'Saturday', time: '10:00 AM – 12:00 PM' },
    ],
  },
  images: [landImg1, landImg2, landImg3, landImg4, landImg5],
},
{
  slug: 'residential-semi-commercial-plot-vijayanagar',
  title: 'Premium Residential / Semi Commercial Plot',
  propertyType: 'Residential / Semi Commercial Plot',
  tag: 'Premium',
  badges: ['Plot for Sale', 'BBMP A Khata', 'Clear Title', 'North-West Facing'],
  address: {
    line1: 'Bhoja Complex, 89, 2nd Main Rd',
    line2: 'MRCR Layout, MC Layout, Vijayanagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560040',
    country: 'India',
  },
  contactForPrice: 'Contact for Price',
  contactPhone: '+91 89510 25158',
  contactWhatsapp: '+91 89510 25158',
  overview:
    'Located in the well-established locality of Vijayanagar, this premium 3,375 sq.ft. residential and semi-commercial plot offers an excellent opportunity for home construction, commercial development, or long-term investment.\n\nThe property features a BBMP A Khata, clear title documents, North-West facing orientation, and is situated on a wide 40 ft road, ensuring excellent accessibility and future appreciation.\n\nIts strategic location provides easy access to schools, hospitals, metro connectivity, shopping centres, and major commercial hubs, making it an ideal investment for both end users and investors.',
  landInfo: [
    { label: 'Property Type', value: 'Residential / Semi Commercial Plot' },
    { label: 'Property Status', value: 'Plot for Sale' },
    { label: 'Khata', value: 'BBMP A Khata' },
    { label: 'Ownership', value: 'Clear Title Documents' },
    { label: 'Plot Area', value: '3375 Sq.ft' },
    { label: 'Facing', value: 'North-West' },
    { label: 'Road Width', value: '40 Feet' },
    { label: 'Suitable For', value: 'Residential Construction, Commercial Building, Investment' },
  ],
  sites: [],
  highlights: [
    'BBMP A Khata',
    'Clear Title',
    'Residential Plot',
    'Semi Commercial',
    'North-West Facing',
    '3375 Sq.ft Plot',
    '40 Feet Wide Road',
    'Prime Bengaluru Location',
    'Excellent Investment Opportunity',
    'Ready for Registration',
  ],
  location: {
    latitude: 12.9719,
    longitude: 77.5416,
    mapQuery: 'Bhoja Complex, 89, 2nd Main Rd, MRCR Layout, MC Layout, Vijayanagar, Bengaluru, Karnataka 560040',
  },
  nearbyPlaces: [
    { name: 'Vijayanagar Metro Station', category: 'Metro', distance: '1 km', travelTime: '3 mins' },
    { name: 'Orion Mall', category: 'Mall', distance: '4 km', travelTime: '10 mins' },
    { name: 'Mantri Square Mall', category: 'Mall', distance: '5 km', travelTime: '12 mins' },
    { name: 'Ramaiah Memorial Hospital', category: 'Hospital', distance: '5 km', travelTime: '12 mins' },
    { name: 'Bangalore University', category: 'School', distance: '4 km', travelTime: '10 mins' },
    { name: 'RV College of Engineering', category: 'School', distance: '6 km', travelTime: '15 mins' },
    { name: 'Majestic Railway Station', category: 'Railway', distance: '6 km', travelTime: '15 mins' },
    { name: 'Kempegowda International Airport', category: 'Airport', distance: '36 km', travelTime: '50 mins' },
  ],
  investmentHighlights: [
    'Prime Bengaluru Location',
    'Excellent Appreciation Potential',
    'Suitable for Residential Construction',
    'Suitable for Commercial Development',
    'BBMP A Khata',
    'Clear Title Documents',
    '40 Feet Wide Road',
    'High Future Growth Potential',
  ],
  contact: {
    company: 'MERIDIAN4',
    phone: '+91 89510 25158',
    whatsapp: '+91 89510 25158',
    email: 'sales@meridian4.com',
    website: 'www.meridian4.com',
  },
  scheduleVisit: {
    availableSlots: [
      { day: 'Monday', time: '10:00 AM – 12:00 PM' },
      { day: 'Tuesday', time: '2:00 PM – 4:00 PM' },
      { day: 'Wednesday', time: '11:00 AM – 1:00 PM' },
      { day: 'Thursday', time: '3:00 PM – 5:00 PM' },
      { day: 'Friday', time: '4:00 PM – 6:00 PM' },
      { day: 'Saturday', time: '10:00 AM – 12:00 PM' },
    ],
  },
  images: [
    '/images/properties/WhatsApp_Image_2026-08-06_at_3.15.58_PM.jpeg',
    '/images/properties/WhatsApp_Image_2026-08-06_at_3.15.58_PM_(1).jpeg',
    '/images/properties/WhatsApp_Image_2026-08-06_at_3.15.59_PM.jpeg',
    '/images/properties/WhatsApp_Image_2026-08-06_at_3.16.01_PM.jpeg',
    '/images/properties/WhatsApp_Image_2026-08-06_at_3.16.01_PM_(1).jpeg',
  ],
},
];

export function getLandPropertyBySlug(slug: string): LandProperty | undefined {
  return landProperties.find((p) => p.slug === slug);
}

export const landProperty = landProperties[0];
