import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Companies from "./pages/Companies/Companies";
import Register from "./pages/Auth/Register";
import RolePage from "./pages/Auth/RolePage";
import Profile from "./pages/Profile/Profile";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./pages/utils/PrivateRoute";
import CompanyDashboard from "./pages/Dashboard/Company/CompanyDashboard";
import FormProfile from "./pages/Profile/components/FormProfile";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/role" element={<RolePage />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route path="/me/profile" element={<Profile />} />
          <Route path="/me/profile/edit" element={<FormProfile />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
