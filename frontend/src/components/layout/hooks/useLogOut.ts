import type React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;

export const useLogout = () => {
  const logout = async (e: React.FormEvent) => {
    e.preventDefault();
    const navigate = useNavigate();

    const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = localStorage.getItem("accessToken");

    try {
      await fetch(`${ApiUrl}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ refreshToken }),
      });
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed!");
    }

    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");

    navigate("/");
  };

  return { logout };
};
