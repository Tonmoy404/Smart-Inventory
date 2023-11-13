import { Button } from "@mui/material";
import { useState } from "react";
import { ModalInput } from "../../../core";
import axios from "axios";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    buying_price: "",
    category: "",
    expiry_date: "",
    quantity: "",
    threshold_value: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/products",
        formData
      );
      console.log(response.data);
      setFormData({
        name: "",
        buying_price: "",
        category: "",
        expiry_date: "",
        quantity: "",
        threshold_value: "",
      });
    } catch (error) {
      alert("Check all fields");
      console.error(error);
    }
  };

  return (
    <div className="inventory-modal p-3 bg-white">
      <div className="inventory-modal-header">
        <h2 className="dashboard-card-heading">New Product</h2>
      </div>
      <div className="inventory-modal-form">
        <ModalInput
          label="Product Name"
          inputId="productName"
          placeholder="Enter product name"
          name="productName"
          value={formData.name}
          onChange={handleChange}
        />
        <ModalInput
          label="Category"
          inputId="productCategory"
          placeholder="Select product category"
          name="productCategory"
          value={formData.category}
          onChange={handleChange}
        />
        <ModalInput
          label="Buying Price"
          inputId="buyingPrice"
          placeholder="Enter buying price"
          name="buyingPrice"
          value={formData.buying_price}
          onChange={handleChange}
        />
        <ModalInput
          label="Quantity"
          inputId="productQuantity"
          placeholder="Enter product quantity"
          name="productQuantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <ModalInput
          label="Expiry Date"
          inputId="productExpiryDate"
          placeholder="Enter expiry date"
          name="productExpiryDate"
          value={formData.expiry_date}
          onChange={handleChange}
        />
        <ModalInput
          label="Threshold Value"
          inputId="productThresholdValue"
          placeholder="Enter threshold value"
          name="productThresholdValue"
          value={formData.threshold_value}
          onChange={handleChange}
        />

        <div className="inventory-modal-button text-end">
          <Button className="me-2 discard" variant="outlined">
            Discard
          </Button>
          <Button
            className="add-product"
            variant="contained"
            onClick={handleSubmit}
          >
            Add Product
          </Button>
        </div>
      </div>
    </div>
  );
}
