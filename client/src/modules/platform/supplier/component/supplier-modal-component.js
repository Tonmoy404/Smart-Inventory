import { Button } from "@mui/material";
import { ModalInput } from "../../../core";

export default function SupplierModal() {
  return (
    <>
      <div className="inventory-modal p-3">
        <div className="inventory-modal-header">
          <h2 className="dashboard-card-heading">New Product</h2>
        </div>
        <div className="inventory-modal-form">
          <ModalInput
            label="Supplier Name"
            inputId="supplierName"
            placeholder="Enter supplier name"
          />

          <ModalInput
            label="Product"
            inputId="product"
            placeholder="Enter product"
          />

          <ModalInput
            label="Buying Price"
            inputId="buyingPrice"
            placeholder="Enter buying price"
          />
          <ModalInput
            label="Email"
            inputId="supplierEmail"
            placeholder="Enter Supplier Email"
          />
          <ModalInput
            label="Contact"
            inputId="supplierContact"
            placeholder="Enter Supplier Contact"
          />

          <div className="inventory-modal-button text-end">
            <Button className="me-2 discard" variant="outlined">
              Discard
            </Button>
            <Button className="add-product" variant="contained">
              Add Supplier
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
