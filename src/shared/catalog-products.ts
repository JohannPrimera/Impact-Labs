export type CatalogProduct = {
  id: number;
  slug: string;
  title: string;
  price: number;
  amazonUrl: string;
  images: string[];
  description: string;
  highlights?: string[];
  category: 'percussion' | 'tens-ems' | 'portable';
  badge?: string;
};

export const catalogProducts: CatalogProduct[] = [
  {
    id: 1,
    slug: 'epulse-vibra-pro',
    title: 'impact labs massage gun',
    price: 399.99,
    amazonUrl: 'https://www.amazon.com/s?k=impact+labs+massage+gun',
    images: ['/assets/images/massage-gun-1.jpg'],
    description:
      'The Percussion Massage Gun is engineered to deliver powerful deep-tissue relief, helping reduce muscle soreness, improve circulation, and accelerate recovery after intense workouts or long days on your feet.',
    highlights: ['Brushless motor', '6 attachments', 'Up to 6 hours battery'],
    category: 'percussion',
    badge: 'FLAGSHIP',
  },
  {
    id: 2,
    slug: 'pro-gun-mini-series',
    title: 'Impact Labs Mini Relief',
    price: 149.99,
    amazonUrl: 'https://www.amazon.com/s?k=impact+labs+mini+massage+gun',
    images: [
      '/assets/images/pro-gun-1.jpg',
      '/assets/images/pro-gun-2.jpg',
      '/assets/images/pro-gun-3.jpg',
    ],
    description:
      'Compact massager with deep impact for daily use, travel, and quick recovery anytime.',
    highlights: ['Compact design', 'Deep impact', 'Ideal for travel'],
    category: 'percussion',
    badge: 'BEST SELLER',
  },
  {
    id: 3,
    slug: 'hidow-xpd-12',
    title: 'Tens xpd 12',
    price: 399.99,
    amazonUrl: 'https://www.amazon.com/s?k=hidow+xpd+12',
    images: [
      '/assets/images/Tens-pad-1.jpg',
      '/assets/images/Tens-pad-2.jpg',
      '/assets/images/Tens-pad-3.jpg',
    ],
    description:
      "XPD 12 hits the balance that wired users trust: strong output, smart design, and just the right amount of control. With 12 therapeutic modes (6 TENS, 6 EMS), 20 intensity levels, and dual output ports, it delivers broad, simultaneous relief without overcomplication. You can run four pads at once, with independent intensity control on each side so every session meets your body where it's at.",
    highlights: ['12 therapeutic modes', '20 intensity levels', 'Dual output'],
    category: 'tens-ems',
  },
  {
    id: 4,
    slug: 'hidow-xpds-18',
    title: 'Tens xpds 18',
    price: 499.99,
    amazonUrl: 'https://www.amazon.com/s?k=hidow+xpds+18',
    images: [
      '/assets/images/Tens-pad18-1.jpg',
      '/assets/images/Tens-pad18-2.jpg',
      '/assets/images/Tens-pad18-3.jpg',
      '/assets/images/Tens-pad18-4.jpg',
      '/assets/images/Tens-pad18-5.png',
    ],
    description:
      "The XPDS 18 is a standout in HiDow's wired lineup—powerful, versatile, and refreshingly easy to use. With 18 therapy modes (hello, microcurrent and trigger point) and 20 intensity levels, it gives you plenty of ways to fine-tune your recovery. Dual ports let you target multiple areas at once, each with its own settings.",
    highlights: ['18 programs', 'Microcurrent', 'Personalized recovery'],
    category: 'tens-ems',
    badge: 'PRO',
  },
  {
    id: 5,
    slug: 'hidow-spot',
    title: 'Hidow spot',
    price: 179.99,
    amazonUrl: 'https://www.amazon.com/s?k=hidow+spot',
    images: [
      '/assets/images/hidow-spot-1.jpg',
      '/assets/images/hidow-spot-2.jpg',
      '/assets/images/hidow-spot-3.jpg',
      '/assets/images/hidow-spot-4.jpg',
    ],
    description:
      'Meet the HiDow SPOT: your portable solution for pain relief, relaxation, and recovery. Designed for life on the go, this first-generation Wireless TENS/EMS device delivers effective therapy wherever and whenever you need it. With 4 modes and 20 intensity levels, the SPOT adapts to your needs—from soothing post-workout soreness to easing daily discomfort. Its compact, lightweight design makes it easy to carry and use discreetly at home, in the office, or while traveling. Paired with electrode gel pads, it provides simple, wire-free relief so you can get back to doing what you love, pain-free.',
    highlights: ['Wireless', 'Pocket-sized', 'Fast relief'],
    category: 'portable',
  },
];

export function findCatalogProduct(slug: string) {
  return catalogProducts.find((p) => p.slug === slug);
}

export function priceToCents(price: number) {
  return Math.round(price * 100);
}
