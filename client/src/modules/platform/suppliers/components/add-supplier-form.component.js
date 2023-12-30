
import { Button } from "@mui/material";
import { useState } from "react";
import { ModalInput } from "../../../core";
import axios from "axios";

export default function AddSupplier() {
  const [formData, setFormData] = useState({
    product_name: "",
    category: "",
    buying_price: "",
    productQuantity: "",
    delivery_date: "",
    vendor_email: "",
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
        "http://localhost:3001/api/items/create",
        formData
      );
      console.log(response.data);
      setFormData({
        supplier_name: "",
        product: "",
        contact_number: null,
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
          inputId="supplier_name"
          placeholder="Enter supplier name"
          name="supplier_name"
          value={formData.supplier_name}
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
          inputId="contact_number"
          placeholder="Enter supplier contact number"
          name="contact_number"
          value={formData.contact_number}
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
