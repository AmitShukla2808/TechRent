import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    category: 'Laptop',
    brand: 'Apple',
    dailyRate: 45,
    weeklyRate: 280,
    monthlyRate: 999,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: {
      processor: 'M1 Pro',
      ram: '16GB',
      storage: '512GB SSD',
      display: '16-inch Retina',
    },
    condition: 'Like New',
    available: true,
    ownerId: 'user1',
    reviews: [
      {
        id: '1',
        userId: 'user2',
        userName: 'John Doe',
        rating: 5,
        comment: 'Perfect condition, works like new!',
        date: '2024-02-15',
        userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
      }
    ]
  },
  {
    id: '2',
    name: 'Sony A7 III',
    category: 'Camera',
    brand: 'Sony',
    dailyRate: 35,
    weeklyRate: 210,
    monthlyRate: 750,
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1621520291095-aa6c7137f578?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: {
      sensor: 'Full Frame',
      megapixels: '24.2MP',
      iso: '100-51200',
      stabilization: '5-axis',
    },
    condition: 'Good',
    available: true,
    ownerId: 'user2',
    reviews: [
      {
        id: '2',
        userId: 'user3',
        userName: 'Jane Smith',
        rating: 4,
        comment: 'Great camera, minor wear but works perfectly',
        date: '2024-02-10',
        userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
      }
    ]
  },
  {
    id: '3',
    name: 'PlayStation 5',
    category: 'Gaming',
    brand: 'Sony',
    dailyRate: 25,
    weeklyRate: 150,
    monthlyRate: 500,
    imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: {
      storage: '825GB SSD',
      controller: 'DualSense',
      resolution: '4K',
      features: 'Ray Tracing, 3D Audio',
    },
    condition: 'Like New',
    available: true,
    ownerId: 'user3',
    reviews: [
      {
        id: '3',
        userId: 'user4',
        userName: 'Mike Johnson',
        rating: 5,
        comment: 'Console is in perfect condition, great rental experience',
        date: '2024-02-01',
        userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
      }
    ]
  },
  {
    id: '4',
    name: 'Xbox Series X',
    category: 'Gaming',
    brand: 'Microsoft',
    dailyRate: 25,
    weeklyRate: 150,
    monthlyRate: 500,
    imageUrl: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: {
      storage: '1TB SSD',
      controller: 'Xbox Wireless',
      resolution: '4K',
      features: 'Quick Resume, Smart Delivery',
    },
    condition: 'Good',
    available: true,
    ownerId: 'user4',
    reviews: []
  },
  {
    id: '5',
    name: 'LG C1 65" OLED TV',
    category: 'TV',
    brand: 'LG',
    dailyRate: 40,
    weeklyRate: 240,
    monthlyRate: 800,
    imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: {
      display: '65" OLED',
      resolution: '4K',
      features: 'HDR, G-Sync, 120Hz',
      ports: '4x HDMI 2.1',
    },
    condition: 'Like New',
    available: true,
    ownerId: 'user5',
    reviews: [
      {
        id: '4',
        userId: 'user6',
        userName: 'Sarah Wilson',
        rating: 5,
        comment: 'Amazing TV, perfect for movie nights!',
        date: '2024-02-05',
        userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100'
      }
    ]
  },
  {
    id: '6',
    name: 'Samsung QN90A 75" QLED',
    category: 'TV',
    brand: 'Samsung',
    dailyRate: 45,
    weeklyRate: 270,
    monthlyRate: 900,
    imageUrl: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: {
      display: '75" QLED',
      resolution: '4K',
      features: 'Neo QLED, Object Tracking Sound',
      ports: '4x HDMI 2.1',
    },
    condition: 'Good',
    available: true,
    ownerId: 'user6',
    reviews: []
  },
  {
    id: '7',
    name: 'Sonos Arc Soundbar',
    category: 'Audio',
    brand: 'Sonos',
    dailyRate: 20,
    weeklyRate: 120,
    monthlyRate: 400,
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: {
      channels: '5.0.2',
      features: 'Dolby Atmos, Voice Control',
      connectivity: 'Wi-Fi, HDMI eARC',
      power: '500W',
    },
    condition: 'Like New',
    available: true,
    ownerId: 'user7',
    reviews: [
      {
        id: '5',
        userId: 'user8',
        userName: 'David Brown',
        rating: 4,
        comment: 'Great sound quality, easy setup',
        date: '2024-02-12',
        userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
      }
    ]
  },
  {
    id: '8',
    name: 'KEF LS50 Wireless II',
    category: 'Audio',
    brand: 'KEF',
    dailyRate: 35,
    weeklyRate: 210,
    monthlyRate: 700,
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: {
      type: 'Active Speakers',
      power: '380W per speaker',
      connectivity: 'Wi-Fi, Bluetooth 5.0, HDMI',
      features: 'Hi-Res Audio, Room EQ',
    },
    condition: 'Like New',
    available: false,
    ownerId: 'user8',
    reviews: [
      {
        id: '6',
        userId: 'user1',
        userName: 'Emma Davis',
        rating: 5,
        comment: 'Audiophile quality speakers, worth every penny',
        date: '2024-02-08',
        userImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100'
      }
    ]
  }
];