import type React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;

export const useHandleLogin = (email: string, password: string) => {
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${ApiUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error("Email or Password is invalid!");
        return;
      }

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data.user.id,
          uuid: data.user.uuid,
          username: data.user.username,
          email: data.user.email,
          image: data.user.image,
          bio: data.user.bio,
          location: data.user.location,
          experience: data.user.job_experience,
          education: data.user.education,
          skills: data.user.skills,
          documents: data.user.documents,
          companyId: data.user.companyId,
          role: data.user.role,
        }),
      );

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      const role = data.user.role;

      if (role === "user") {
        navigate("/");
      } else if (role === "employer") {
        navigate("/company-dashboard");
      } else {
        toast.error("Unknown role");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return { handleLogin };
};
