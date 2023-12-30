import { Button } from "@mui/material";
import { useState } from "react";
import { ModalInput } from "../../../core";
import axios from "axios";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    buying_price: 0,
    quantity: 0,
    expiry_date: "",
    threshold_value: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const numericValue = !isNaN(value) ? Number(value) : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: numericValue,
    }));
  };
  const handleSubmit = async () => {
    try {
      const dataToSend = {
        ...formData,
        quantity: parseInt(formData.quantity, 10),
        threshold_value: parseInt(formData.threshold_value, 10),
        buying_price: parseFloat(formData.buying_price), // Convert quantity to a number
      };

      const response = await axios.post(
        "http://localhost:3001/api/items/create",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setIsModalOpen(false);
      setFormData({
        name: "",
        category: "",
        buying_price: 0,
        quantity: 0,
        expiry_date: "",
        threshold_value: 0,
      });
    } catch (error) {
      alert("Check all input fields");
      console.error(error);
    }
  };

  return (
    <div
      className={`inventory-modal p-3 bg-white ${
        isModalOpen ? "d-block" : "d-none"
      }`}
    >
      <div className="inventory-modal-header">
        <h2 className="dashboard-card-heading">New Product</h2>
      </div>
      <div className="inventory-modal-form">
        <ModalInput
          label="Product Name"
          inputId="name"
          placeholder="Enter product name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <ModalInput
          label="Category"
          inputId="category"
          placeholder="Select product category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <ModalInput
          label="Buying Price"
          inputId="buying_price"
          placeholder="Enter buying price"
          name="buying_price"
          value={formData.buying_price}
          onChange={handleChange}
          required
        />
        <ModalInput
          label="Quantity"
          inputId="quantity"
          placeholder="Enter product quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <ModalInput
          label="Expiry Date"
          inputId="expiry_date"
          placeholder="Enter Expiry Date"
          name="expiry_date"
          value={formData.expiry_date}
          onChange={handleChange}
          required
        />
        <ModalInput
          label="Threshold Value"
          inputId="threshold_value"
          placeholder="Enter Threshold Value"
          name="threshold_value"
          value={formData.threshold_value}
          onChange={handleChange}
          required
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add Product
        </Button>
      </div>
    </div>
  );
}
