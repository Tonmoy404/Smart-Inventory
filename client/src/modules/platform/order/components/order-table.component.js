import { DynamicTable } from "../../../core";
import { columns, rows } from "../order-table-tool";

export default function OrderTable() {
    return (
        <>
            <div className="inventory-parent row inventory-bottom-table my-5 bg-white py-4 m-0">
                <div className="inventory-table text-start">
                    <DynamicTable
                        columns={columns}
                        rows={rows}
                        pagination={true}
                    />
                </div>
            </div>
        </>
    );
}