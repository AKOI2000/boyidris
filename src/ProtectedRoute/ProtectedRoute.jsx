import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [ok, setOk] = useState(false);

    useEffect(() => { 
        async function checkAuth() {
            try {
                const res = await fetch("https://boyidrisbe.onrender.com/admin/check", {
                    method: "GET",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                });

                const data = await res.json();
                setOk(data.loggedIn);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        checkAuth();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    return ok ? <Outlet /> : <Navigate to="/login" />;
}
  

export default ProtectedRoute;