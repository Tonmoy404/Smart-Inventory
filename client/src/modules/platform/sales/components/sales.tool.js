const productRows = [
  {
    product: "Tomato",
    category: "Vegetable",
    quantity: "225 kg",
    increase: "23.09.3%",
  },
  {
    product: "Apple",

    category: "Fruit",
    quantity: "150 kg",

    increase: "19.66.5%",
  },
  {
    product: "Milk",

    category: "Dairy",
    quantity: "100 liters",
    increase: "18.57.8%",
  },
  {
    product: "Bread",

    category: "Bakery",
    quantity: "50 loaves",

    increase: "9.37%",
  },
  {
    product: "Chicken",

    category: "Meat",
    quantity: "75 kg",

    increase: "8.92%",
  },
];

const categoryColumns = [
  { id: "category", label: "Category", minWidth: 170 },
  // { id: "turn", label: "Turn Over", minWidth: 140 },
  {
    id: "increase",
    label: "Increase By",
    minWidth: 150,

    format: (value) => value.toLocaleString("en-US"),
  },
];
const categoryRows = productRows.slice(0, 3).map((value, idx) => ({
  category: value.category,
  increase: value.increase,
}));

// const productRows = Array.from({ length: 3 }, (_, index) => ({
//   product: "Tomato",
//   id: "15645",
//   category: "Vegetable",
//   quantity: "225 kg",
//   turn: "1753",
//   increase: "2.3%",
// }));
const productColumns = [
  { id: "product", label: "Product", minWidth: 170 },
  // { id: "id", label: "ID", minWidth: 140 },
  { id: "category", label: "Category", minWidth: 170 },
  { id: "quantity", label: "Quantity", minWidth: 140 },
  // { id: "turn", label: "Turn Over", minWidth: 170 },
  { id: "increase", label: "Increase By", minWidth: 140 },
];

export { categoryColumns, categoryRows, productRows, productColumns };
