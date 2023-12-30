import { SmallChip } from "../../../core";

function StockStatus2() {
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
        <p className="m-0">Apple</p>
        <span
          className="m-0"
          style={{
            fontSize: "6px!important",
          }}
        >
          Remaining : 102
        </span>
      </div>
      <div class="col-lg-3">
        <SmallChip label="IN" />
      </div>
    </div>
  );
}

export default StockStatus2;
