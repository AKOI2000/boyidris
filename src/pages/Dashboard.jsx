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
                {/* <img src="/Images/logo.png" alt="Boy Idris" /> */}
                Idris
              </div>
              <button onClick={() => setOpen((open) => !open)}>&times;</button>
            </div>

            <div className="sidebar-links">
              <NavLink to="/dashboard/works">
                <span>Works</span>
                <img src="/Images/Works.png" alt="" />
              </NavLink>
              <NavLink to="/dashboard/experience">
                <span>Experience</span>
                <img src="/Images/user-experience.png" alt="" />
              </NavLink>
              <NavLink to="/dashboard/clients">
                <span>Clients</span>
                <img src="/Images/Clients.png" alt="" />
              </NavLink>
            </div>

            <div className="sidebar-logout">
              <button>
                <span>Logout</span>
                <img src="/Images/logout.png" alt="" />
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
