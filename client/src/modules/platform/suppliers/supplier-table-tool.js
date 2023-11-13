const columns = [
  { id: "supplier", label: "Supplier Name", minWidth: 170 },
  { id: "product", label: "Product", minWidth: 140 },
  {
    id: "contact",
    label: "Contact",
    minWidth: 150,

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
];

const rows = Array.from({ length: 3 }, (_, index) => ({
  supplier: "Tonmoy",
  product: "Foods",
  contact: "01626758447",
  email: "tonmoy@smart-inventory.com",
}));

export { columns, rows };
