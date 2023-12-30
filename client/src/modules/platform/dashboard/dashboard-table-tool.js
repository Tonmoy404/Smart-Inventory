const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "sold", label: "Chances", minWidth: 140 },
];

const products = [
  { name: "Red Bull", price: "67.21%" },
  { name: "Chocolate", price: "60.76%" },
  { name: "Coca Cola", price: "54.65%" },
  // Add more products as needed
];

const rows = products.map((p, index) => ({
  name: p.name,
  sold: p.price,
}));

export { columns, rows };
