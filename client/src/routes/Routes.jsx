import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import {
    Login,
    Dashboard,
    Inventory,
    ProductView,
    SupplierTable,
} from "../modules/platform";
=======
import { Login, Dashboard, Inventory, ProductView } from "../modules/platform";
import { InventoryModal } from "../modules/platform/inventory";
import { OrderModal } from "../modules/platform/order/component/order-modal-component";
>>>>>>> f79ece8 (Fixed getOrder API)
import { DashboardLayout } from "../modules/core";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    ),
  },
  {
    path: "/inventory",
    element: (
      <DashboardLayout>
        <Inventory />
      </DashboardLayout>
    ),
  },

<<<<<<< HEAD
    {
        path: "/product-view",
        element: (
            <DashboardLayout>
                <ProductView />
            </DashboardLayout>
        ),
    },
    {
        path: "/suppliers",
        element: (
            <DashboardLayout>
                <SupplierTable />
            </DashboardLayout>
        ),
    },
=======
  {
    path: "/product-view",
    element: (
      <DashboardLayout>
        <ProductView />
      </DashboardLayout>
    ),
  },
  // {
  //   path: "/test-route",
  //   element: <OrderModal />,
  // },
>>>>>>> f79ece8 (Fixed getOrder API)
]);

export default Routes;
