import { useNavigate } from "react-router-dom";
import DashboardLeftNav from "./DashboardLeftNav.component";

export default function DashboardLeft() {
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = "cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/login");
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12 dashboard-left p-3">
          <div className="dashboard-left-header text-center">
            <img className="me-2" src="../images/logo.png" alt="Logo"></img>
            <h2 className="d-inline-block">Inventory</h2>
          </div>
          <div className="dashboard-left-menu">
            <DashboardLeftNav />
          </div>
          <div className="dashboard-left-bottom-buttons">
            <a className="d-inline-block w-100 text-decoration-none my-2">
              {/* <i className="bi bi-gear me-2"></i>
              Settings */}
            </a>
            <button
              className="d-inline-block w-100 text-decoration-none my-2 btn btn-outline-danger text-start"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right me-2 text-start"></i> Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
