import { InventoryCard } from "../../inventory";
import { ProductCard } from "../../product";
import { PurchaseCard } from "../../purchase";
import { SalesCard } from "../../sales";
import ProductSummary from "../chart/product-summary";
import SalesPurchase from "../chart/sales-purchase";
import { StockTable } from "../../stock";
import StockStatus from "../../stock/components/stock-status.component";
import StockStatus2 from "../../stock/components/stock-status2.component";
import StockStatus3 from "../../stock/components/stock-status3.component";
import StockStatus4 from "../../stock/components/stock-status4.component";
export default function Dashboard() {
  return (
    <div className=" inventory-parent p-3">
      <div class="row mb-4">
        <SalesCard />
        <InventoryCard />
        <PurchaseCard />
        <ProductCard />
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <SalesPurchase />{" "}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div class="card mb-4">
            <div class="card-body">
              <ProductSummary />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <h1 className="dashboard-card-heading">
                Next Month Stock(prediction)
              </h1>
              <StockTable />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div class="card mb-4">
            <div class="card-body">
              <h1 className="dashboard-card-heading">Next Week Stock</h1>
              <StockStatus /> <StockStatus2 /> <StockStatus3 /> <StockStatus4 />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
