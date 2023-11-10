import React from 'react';
import './Dashboard.css'; // Make sure to adjust the path if needed

const Dashboard = () => {
  return (
    <div className="container">
      <aside>
        <div className="top">
          <div className="close" id="close_btn">
            <span className="material-symbols-sharp">close</span>
          </div>
        </div>
      </aside>
      <main>
        <h1>Dashbord</h1>

        <div className="date">
          <input type="date" />
        </div>

        <div className="insights">
          <div className="sales">
            <span className="material-symbols-sharp">trending_up</span>
            <div className="middle">
              <div className="left">
                <h3>Total Sales</h3>
                <h1>$25,024</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle r="30" cy="40" cx="40"></circle>
                </svg>
                <div className="number"><p>80%</p></div>
              </div>
            </div>
            <small>Last 24 Hours</small>
          </div>

          <div className="expenses">
            <span className="material-symbols-sharp">local_mall</span>
            <div className="middle">
              <div className="left">
                <h3>Total Sales</h3>
                <h1>$25,024</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle r="30" cy="40" cx="40"></circle>
                </svg>
                <div className="number"><p>80%</p></div>
              </div>
            </div>
            <small>Last 24 Hours</small>
          </div>

          <div className="income">
            <span className="material-symbols-sharp">stacked_line_chart</span>
            <div className="middle">
              <div className="left">
                <h3>Total Sales</h3>
                <h1>$25,024</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle r="30" cy="40" cx="40"></circle>
                </svg>
                <div className="number"><p>80%</p></div>
              </div>
            </div>
            <small>Last 24 Hours</small>
          </div>
        </div>

        <div className="recent_order">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Payments</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mini USB</td>
                <td>4563</td>
                <td>Due</td>
                <td className="warning">Pending</td>
                <td className="primary">Details</td>
              </tr>
              <tr>
                <td>Mini USB</td>
                <td>4563</td>
                <td>Due</td>
                <td className="warning">Pending</td>
                <td className="primary">Details</td>
              </tr>
              <tr>
                <td>Mini USB</td>
                <td>4563</td>
                <td>Due</td>
                <td className="warning">Pending</td>
                <td className="primary">Details</td>
              </tr>
              <tr>
                <td>Mini USB</td>
                <td>4563</td>
                <td>Due</td>
                <td className="warning">Pending</td>
                <td className="primary">Details</td>
              </tr>
            </tbody>
          </table>
          <a href="#">Show All</a>
        </div>
      </main>

      <div className="right">
        <div className="top">
          <button id="menu_bar">
            <span className="material-symbols-sharp">menu</span>
          </button>
          <div className="theme-toggler">
            <span className="material-symbols-sharp active">light_mode</span>
            <span className="material-symbols-sharp">dark_mode</span>
          </div>
          <div className="profile">
            <div className="info">
              <p><b>Babar</b></p>
              <p>Admin</p>
              <small className="text-muted"></small>
            </div>
            <div className="profile-photo">
              <img src="./images/profile-1.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="recent_updates">
          <h2>Recent Update</h2>
          <div className="updates">
            <div className="update">
              <div className="profile-photo">
                <img src="./images/profile-4.jpg" alt="" />
              </div>
              <div className="message">
                <p><b>Babar</b> Received his order of USB</p>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src="./images/profile-3.jpg" alt="" />
              </div>
              <div className="message">
                <p><b>Ali</b> Received his order of USB</p>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src="./images/profile-2.jpg" alt="" />
              </div>
              <div className="message">
                <p><b>Ramzan</b> Received his order of USB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sales-analytics">
          <h2>Sales Analytics</h2>
          <div className="item onlion">
            <div className="icon">
              <span className="material-symbols-sharp">shopping_cart</span>
            </div>
            <div className="right_text">
              <div className="info">
                <h3>Online Orders</h3>
                <small className="text-muted">Last seen 2 Hours</small>
              </div>
              <h5 className="danger">-17%</h5>
              <h3>3849</h3>
            </div>
          </div>
          <div className="item onlion">
            <div className="icon">
              <span className="material-symbols-sharp">shopping_cart</span>
            </div>
            <div className="right_text">
              <div className="info">
                <h3>Online Orders</h3>
                <small className="text-muted">Last seen 2 Hours</small>
              </div>
              <h5 className="success">-17%</h5>
              <h3>3849</h3>
            </div>
          </div>
          <div className="item onlion">
            <div className="icon">
              <span className="material-symbols-sharp">shopping_cart</span>
            </div>
            <div className="right_text">
              <div className="info">
                <h3>Online Orders</h3>
                <small className="text-muted">Last seen 2 Hours</small>
              </div>
              <h5 className="danger">-17%</h5>
              <h3>3849</h3>
            </div>
          </div>
        </div>

        <div className="item add_product">
          <div>
            <span className="material-symbols-sharp">add</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
