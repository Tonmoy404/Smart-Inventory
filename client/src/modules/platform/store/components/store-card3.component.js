import { Button } from "@mui/material";

export default function StoreCard3() {
  return (
    <div class="manage-store mt-2">
      <div class="row">
        <div class="col-lg-3">
          <div class="manage-store-card-image">
            <img src="../images/branch.jpg" alt="" width="180" height="150" />
          </div>
        </div>
        <div class="col-lg-7">
          <div class="manage-store-card-content">
            <h2 class="dashboard-card-heading"></h2>
            <p>Gulshan Branch</p>
            <p>House: 48 Road:18</p>
            <p>+880-1992766459</p>
          </div>
        </div>
        <div class="col-lg-2 ms-auto text-end">
          <div class="manage-store-card-button">
            {/* <Button variant="outlined">Outlined</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
