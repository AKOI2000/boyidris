import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  async function logout(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("https://boyidrisbe.onrender.com/admin/logout", {
        method: "POST",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
      });
      if (!res.ok) throw new Error("Error Logging out");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="dashboard">
        <aside className={`sidebar ${!open && "collapsed"}`}>
          <div className="sidebar-container">
            <div className="sidebar-logo-box">
              <div className="sidebar-logo">
                {/* <img src="../../public/Images/logo.png" alt="Boy Idris" /> */}
                BOYIdris
              </div>
              <button onClick={() => setOpen((open) => !open)}>&times;</button>
            </div>

            <div className="sidebar-links">
              <NavLink to="/dashboard/works">
                <span>Works</span>
                <img src="/Images/works.png" alt="" />
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
              <button onClick={logout} disabled={loading}>
                <span>{loading ? "Logging out" : "Logout"}</span>
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
