export interface ComparisonItem {
  id: string;
  name: string;
  store: string;
  price: number;
  calories: number;
  caloriesPerDollar: number;
}

export const comparisonData: ComparisonItem[] = [
  {
    id: 'c1',
    name: 'McDouble',
    store: "McDonald's",
    price: 2.99,
    calories: 400,
    caloriesPerDollar: 133.78,
  },
  {
    id: 'c2',
    name: 'Big Mac',
    store: "McDonald's",
    price: 5.99,
    calories: 550,
    caloriesPerDollar: 91.82,
  },
  {
    id: 'c3',
    name: 'Bean Burrito',
    store: 'Taco Bell',
    price: 1.89,
    calories: 350,
    caloriesPerDollar: 185.19,
  },
  {
    id: 'c4',
    name: 'Cheesy Bean & Rice Burrito',
    store: 'Taco Bell',
    price: 1.29,
    calories: 420,
    caloriesPerDollar: 325.58,
  },
  {
    id: 'c5',
    name: 'Whopper',
    store: 'Burger King',
    price: 6.49,
    calories: 670,
    caloriesPerDollar: 103.24,
  },
  {
    id: 'c6',
    name: 'Double Cheeseburger',
    store: 'Burger King',
    price: 3.29,
    calories: 450,
    caloriesPerDollar: 136.78,
  },
  {
    id: 'c7',
    name: 'Costco Hot Dog Combo',
    store: 'Costco',
    price: 1.50,
    calories: 580,
    caloriesPerDollar: 386.67,
  },
  {
    id: 'c8',
    name: 'Little Caesars Pepperoni Pizza',
    store: 'Little Caesars',
    price: 6.99,
    calories: 2240,
    caloriesPerDollar: 320.46,
  },
  {
    id: 'c9',
    name: 'Footlong BMT',
    store: 'Subway',
    price: 9.49,
    calories: 760,
    caloriesPerDollar: 80.08,
  },
  {
    id: 'c10',
    name: 'Chipotle Chicken Bowl',
    store: 'Chipotle',
    price: 9.25,
    calories: 650,
    caloriesPerDollar: 70.27,
  },
  {
    id: 'c11',
    name: '4pc Chicken Nuggets',
    store: "Wendy's",
    price: 1.99,
    calories: 180,
    caloriesPerDollar: 90.45,
  },
  {
    id: 'c12',
    name: 'Jr. Bacon Cheeseburger',
    store: "Wendy's",
    price: 3.19,
    calories: 370,
    caloriesPerDollar: 115.99,
  },
  {
    id: 'c13',
    name: 'Large Fries',
    store: "McDonald's",
    price: 3.99,
    calories: 480,
    caloriesPerDollar: 120.30,
  },
  {
    id: 'c14',
    name: 'Beef Pot Roast Meal',
    store: 'Home Cooking (Est)',
    price: 4.50,
    calories: 800,
    caloriesPerDollar: 177.78,
  },
  {
    id: 'c15',
    name: 'Peanut Butter Sandwich',
    store: 'Home Cooking (Est)',
    price: 0.50,
    calories: 350,
    caloriesPerDollar: 700.00,
  }
];
