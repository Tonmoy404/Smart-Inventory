import { SmallChip } from "../../../core";

function StockStatus4() {
  return (
    <div class="row">
      <div class="col-lg-2">
        {/* <img
                    style={{
                        width: "50px",
                    }}
                    src="../images/product.png"
                    alt=""
                /> */}
      </div>
      <div class="col-lg-7">
        <p className="m-0">Milk</p>
        <span
          className="m-0"
          style={{
            fontSize: "6px!important",
          }}
        >
          Remaining : 13
        </span>
      </div>
      <div class="col-lg-3">
        <SmallChip label="OUT" />
      </div>
    </div>
  );
}

export default StockStatus4;
