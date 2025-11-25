import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="dashboard">
        <aside className={`sidebar ${!open && "collapsed"}`}>
          <div className="sidebar-container">
            <div className="sidebar-logo-box">
              <div className="sidebar-logo">
                {/* <img src="../../public/Images/logo.png" alt="Boy Idris" /> */}
                Idris
              </div>
              <button onClick={() => setOpen((open) => !open)}>&times;</button>
            </div>

            <div className="sidebar-links">
              <NavLink to="/dashboard/works">
                <span>Works</span>
                <img src="../../public/Images/Works.png" alt="" />
              </NavLink>
              <NavLink to="/dashboard/experience">
                <span>Experience</span>
                <img src="../../public/Images/user-experience.png" alt="" />
              </NavLink>
              <NavLink to="/dashboard/clients">
                <span>Clients</span>
                <img src="../../public/Images/Clients.png" alt="" />
              </NavLink>
            </div>

            <div className="sidebar-logout">
              <button>
                <span>Logout</span>
                <img src="../../public/Images/logout.png" alt="" />
              </button>
            </div>
          </div>
        </aside>

        <div className={`free-box ${!open && "collapsed"}`}></div>
        <main className="main">
          <Outlet />
        </main>
      </div>

      <div className="response-message">Use your Laptop</div>
    </>
  );
}

export default Dashboard;
