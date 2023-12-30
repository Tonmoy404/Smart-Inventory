import { Button } from "@mui/material";
import { useState } from "react";
import { ModalInput } from "../../../core";
import axios from "axios";

export default function AddOrder() {
  const [formData, setFormData] = useState({
    product_name: "",
    buying_price: 0,
    vendor_email: "",
    category: "",
    quantity: 0,
    delivery_date: 0,
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
      // const dataToSend = {
      //     ...formData,
      //     quantity: parseInt(formData.quantity, 10),
      //     threshold_value: parseInt(formData.threshold_value, 10),
      //     buying_price: parseFloat(formData.buying_price), // Convert quantity to a number
      // };

      const response = await axios.post(
        "http://localhost:3001/api/orders/create",
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
        product_name: "",
        buying_price: 0,
        vendor_email: "",
        category: "",
        quantity: 0,
        delivery_date: 0,
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
        <h2 className="dashboard-card-heading">New Order</h2>
      </div>
      <div className="inventory-modal-form">
        <ModalInput
          label="Product Name"
          inputId="product_name"
          placeholder="Enter product name"
          name="product_name"
          value={formData.product_name}
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
          label="Vendor Email"
          inputId="vendor_email"
          placeholder="Enter vendor email"
          name="vendor_email"
          value={formData.vendor_email}
          onChange={handleChange}
          required
        />
        <ModalInput
          label="Category"
          inputId="category"
          placeholder="Enter product category"
          name="category"
          value={formData.category}
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
          label="Delivery Date"
          inputId="delivery_date"
          placeholder="Enter delivery date"
          name="delivery_date"
          value={formData.delivery_date}
          onChange={handleChange}
          required
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add Order
        </Button>
      </div>
    </div>
  );
}
