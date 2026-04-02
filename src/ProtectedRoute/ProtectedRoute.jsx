import { Outlet, useNavigate } from "react-router-dom";
import { useCheckAuth } from "../Services/useAuth";
import Loading from "../component/Loading";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { user, isPending } = useCheckAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!user && !isPending) navigate("/login");
    },
    [user, isPending, navigate]
  );

  if (isPending) return <Loading />;
  if (user) return <Outlet />;
}

export default ProtectedRoute;
