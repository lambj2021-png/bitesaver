export interface GiftCard {
  id: string;
  brand: string;
  value: number;
  price: number;
  discount: number;
  source: 'Raise' | 'CardCash' | 'GiftCardGranny';
}

export const giftCards: GiftCard[] = [
  {
    id: 'gc1',
    brand: 'Starbucks',
    value: 25,
    price: 23.50,
    discount: 6,
    source: 'Raise',
  },
  {
    id: 'gc2',
    brand: 'Chipotle',
    value: 50,
    price: 45.00,
    discount: 10,
    source: 'CardCash',
  },
  {
    id: 'gc3',
    brand: 'McDonald\'s',
    value: 10,
    price: 9.20,
    discount: 8,
    source: 'GiftCardGranny',
  },
  {
    id: 'gc4',
    brand: 'Subway',
    value: 20,
    price: 17.60,
    discount: 12,
    source: 'Raise',
  },
  {
    id: 'gc5',
    brand: 'DoorDash',
    value: 100,
    price: 95.00,
    discount: 5,
    source: 'CardCash',
  },
  {
    id: 'gc6',
    brand: 'UberEats',
    value: 50,
    price: 47.50,
    discount: 5,
    source: 'Raise',
  },
  {
    id: 'gc7',
    brand: 'Taco Bell',
    value: 25,
    price: 21.25,
    discount: 15,
    source: 'CardCash',
  },
  {
    id: 'gc8',
    brand: 'Burger King',
    value: 15,
    price: 13.50,
    discount: 10,
    source: 'GiftCardGranny',
  },
  {
    id: 'gc9',
    brand: 'Panera Bread',
    value: 25,
    price: 22.50,
    discount: 10,
    source: 'Raise',
  },
  {
    id: 'gc10',
    brand: 'Dunkin',
    value: 10,
    price: 8.80,
    discount: 12,
    source: 'CardCash',
  },
  {
    id: 'gc11',
    brand: 'Domino\'s',
    value: 50,
    price: 42.50,
    discount: 15,
    source: 'Raise',
  },
  {
    id: 'gc12',
    brand: 'Olive Garden',
    value: 50,
    price: 44.00,
    discount: 12,
    source: 'GiftCardGranny',
  }
];
