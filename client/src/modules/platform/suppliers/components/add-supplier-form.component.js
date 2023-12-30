import { Button } from "@mui/material";
import { useState } from "react";
import { ModalInput } from "../../../core";
import axios from "axios";

export default function AddSupplier() {
  const [formData, setFormData] = useState({
    name: "",
    product: "",
    contact: null,
    email: "",
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
        "http://localhost:3001/api/suppliers/add",
        formData
      );
      console.log(response.data);
      setFormData({
        name: "",
        product: "",
        contact: null,
        email: null,
      });
    } catch (error) {
      alert("Check all input fields");
      console.error(error);
    }
  };

  return (
    <div className="inventory-modal p-3 bg-white">
      <div className="inventory-modal-header">
        <h2 className="dashboard-card-heading">New Supplier</h2>
      </div>
      <div className="inventory-modal-form">
        <ModalInput
          label="Supplier Name"
          inputId="name"
          placeholder="Enter supplier name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <ModalInput
          label="Product"
          inputId="product"
          placeholder="Select supplier product category"
          name="product"
          value={formData.product}
          onChange={handleChange}
        />
        <ModalInput
          label="Contact Number"
          inputId="contact"
          placeholder="Enter supplier contact number"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <ModalInput
          label="Email"
          inputId="email"
          placeholder="Enter supplier email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add Supplier
        </Button>
      </div>
    </div>
  );
}
