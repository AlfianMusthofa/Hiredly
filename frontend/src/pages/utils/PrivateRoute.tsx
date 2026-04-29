import { useEffect, useState } from "react";
import { refreshToken } from "../../services/RefreshToken";
import { Navigate, Outlet } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;

const PrivateRoute = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        setLoading(false);
        return;
      }

      try {
        let response = await fetch(`${ApiUrl}/auth/me`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 401 || response.status === 403) {
          const newAccessToken = await refreshToken();

          if (!newAccessToken) {
            throw new Error("Refresh token invalid");
          }

          response = await fetch(`${ApiUrl}/auth/me`, {
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
            },
          });
        }

        if (response.ok) {
          setAuthorized(true);
        } else {
          throw new Error("Unauthorized");
        }
      } catch (error) {
        console.log("Auth failed:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Checking authentication...</p>;
  }

  return authorized ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
