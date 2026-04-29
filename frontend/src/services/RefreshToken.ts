const ApiUrl = import.meta.env.VITE_API_URL;

export const refreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) return null;

  try {
    const response = await fetch(`${ApiUrl}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) return null;

    const data = await response.json();
    localStorage.setItem("accessToken", data.accessToken);

    return data.accessToken;
  } catch (error) {
    console.log("Refresh token error:", error);
    return null;
  }
};
