import { Button } from "@mui/material";
import { ModalInput } from "../../../core";

export default function OrderModal() {
  return (
    <>
      <div className="inventory-modal p-3">
        <div className="inventory-modal-header">
          <h2 className="dashboard-card-heading">New Product</h2>
        </div>
        <div className="inventory-modal-form">
          <ModalInput
            label="Product Name"
            inputId="productName"
            placeholder="Enter product name"
          />

          <ModalInput
            label="Category"
            inputId="categoryName"
            placeholder="Enter Product Category"
          />

          <ModalInput
            label="Quantity"
            inputId="productQuantity"
            placeholder="Enter Product Quantity"
          />
          <ModalInput
            label="Buying Price"
            inputId="productBuyingPrice"
            placeholder="Enter Buying Price"
          />
          <ModalInput
            label="Delivery Date"
            inputId="productDeliveryDate"
            placeholder="Enter Delivery Date"
          />

          <div className="inventory-modal-button text-end">
            <Button className="me-2 discard" variant="outlined">
              Discard
            </Button>
            <Button className="add-product" variant="contained">
              Order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
