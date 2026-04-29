import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ApiUrl = import.meta.env.VITE_API_URL;

export const useHandleRegister = (form: any, role: any) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!role) {
      toast.error("Role is required!");
      return;
    }

    if (!form.username || !form.email || !form.password) {
      toast.error("All fields is required");
      return;
    }

    if (role === "employer" && !form.companyName) {
      toast.error("Company name is required");
      return;
    }

    const payload = {
      username: form.username,
      email: form.email,
      password: form.password,
      role,
      ...(role === "employer" && {
        companyName: form.companyName,
      }),
    };

    try {
      setLoading(true);
      await fetch(`${ApiUrl}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        return data;
      });

      toast.success("Welcome");

      navigate("/login");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, loading };
};
