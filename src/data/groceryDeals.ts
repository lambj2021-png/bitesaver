export interface GroceryDeal {
  id: string;
  store: string;
  title: string;
  description: string;
  price: string;
  expiryDate: string;
  badge?: 'Flash Sale' | 'Limited Time' | 'Bulk Deal';
}

export const groceryDeals: GroceryDeal[] = [
  {
    id: 'g1',
    store: 'Walmart',
    title: 'Great Value Milk 1 Gal',
    description: 'Whole, 2%, 1%, or Fat Free milk.',
    price: '$2.98',
    expiryDate: '2026-06-25',
  },
  {
    id: 'g2',
    store: 'Kroger',
    title: 'Strawberries 1lb',
    description: 'Fresh California grown strawberries.',
    price: '$1.88',
    expiryDate: '2026-06-22',
    badge: 'Limited Time',
  },
  {
    id: 'g3',
    store: 'Costco',
    title: 'Rotisserie Chicken',
    description: 'Famous 3lb whole roasted chicken.',
    price: '$4.99',
    expiryDate: '2026-12-31',
    badge: 'Bulk Deal',
  },
  {
    id: 'g4',
    store: 'Aldi',
    title: 'Avocados',
    description: 'Fresh hass avocados from Mexico.',
    price: '$0.49/ea',
    expiryDate: '2026-06-24',
  },
  {
    id: 'g5',
    store: 'Safeway',
    title: 'T-Bone Steaks',
    description: 'USDA Choice Beef, value pack.',
    price: '$5.99/lb',
    expiryDate: '2026-06-21',
    badge: 'Flash Sale',
  },
  {
    id: 'g6',
    store: 'Trader Joe\'s',
    title: 'Two Buck Chuck',
    description: 'Charles Shaw Wine variety.',
    price: '$2.99',
    expiryDate: '2026-12-31',
  },
  {
    id: 'g7',
    store: 'Walmart',
    title: 'Eggs 12ct',
    description: 'Grade A Large White Eggs.',
    price: '$1.44',
    expiryDate: '2026-06-25',
  },
  {
    id: 'g8',
    store: 'Kroger',
    title: 'Ribeye Steak',
    description: 'Super value pack, bone-in ribeye.',
    price: '$7.99/lb',
    expiryDate: '2026-06-22',
    badge: 'Limited Time',
  },
  {
    id: 'g9',
    store: 'Aldi',
    title: 'Blueberries 1 Pint',
    description: 'Sweet fresh blueberries.',
    price: '$2.49',
    expiryDate: '2026-06-24',
  },
  {
    id: 'g10',
    store: 'Costco',
    title: 'Paper Towels 12pk',
    description: 'Kirkland Signature Create-a-Size.',
    price: '$19.99',
    expiryDate: '2026-07-15',
    badge: 'Bulk Deal',
  },
  {
    id: 'g11',
    store: 'Publix',
    title: 'Boar\'s Head Turkey',
    description: 'Oven gold turkey breast, deli sliced.',
    price: '$10.99/lb',
    expiryDate: '2026-06-23',
  },
  {
    id: 'g12',
    store: 'Whole Foods',
    title: 'Organic Bananas',
    description: 'Fair trade organic bananas.',
    price: '$0.69/lb',
    expiryDate: '2026-06-30',
  },
  {
    id: 'g13',
    store: 'Safeway',
    title: 'Coca-Cola 12pk',
    description: 'Buy 2 Get 2 Free on all 12pk cans.',
    price: 'B2G2 Free',
    expiryDate: '2026-06-21',
    badge: 'Flash Sale',
  },
  {
    id: 'g14',
    store: 'Walmart',
    title: 'Chicken Breast 5lb',
    description: 'Fresh boneless skinless chicken breast.',
    price: '$12.47',
    expiryDate: '2026-06-25',
    badge: 'Bulk Deal',
  },
  {
    id: 'g15',
    store: 'Kroger',
    title: 'Doritos',
    description: 'Party size, select varieties.',
    price: '$2.99',
    expiryDate: '2026-06-22',
  }
];
