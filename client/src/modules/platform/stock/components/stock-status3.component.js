import { SmallChip } from "../../../core";

function StockStatus3() {
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
        <p className="m-0">Vegetable</p>
        <span
          className="m-0"
          style={{
            fontSize: "6px!important",
          }}
        >
          Remaining : 6
        </span>
      </div>
      <div class="col-lg-3">
        <SmallChip label="OUT" />
      </div>
    </div>
  );
}

export default StockStatus3;
