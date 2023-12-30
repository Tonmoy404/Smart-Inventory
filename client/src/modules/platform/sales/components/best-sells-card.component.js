import { DynamicTable } from "../../../core";
import { categoryColumns, categoryRows } from "./sales.tool";

function BestSalesCard() {
  return (
    <div class="col-sm-6">
      <div class="card mb-4">
        <div class="card-body">
          <div className="row">
            <h1 className="dashboard-card-heading">Top 3 Selling Category</h1>
          </div>
          <DynamicTable columns={categoryColumns} rows={categoryRows} />
        </div>
      </div>
    </div>
  );
}

export default BestSalesCard;
