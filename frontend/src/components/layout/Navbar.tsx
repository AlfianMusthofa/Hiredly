import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { getInitial } from "../../pages/utils/GetInitial";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <>
      <div className="bg-[#3c7ff8] fixed top-0 left-0 right-0 z-50">
        <div className="max-w-257.25 mx-auto text-white flex justify-between items-center text-[13px] py-3 overflow-visible">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-22.5" />
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/companies">Companies</Link>
            <Link to="/">Find Jobs</Link>
            <Link to="/">Course</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Blog</Link>
          </div>

          <div>
            {!user ? (
              <Link to="/login">Login</Link>
            ) : (
              <Link to="/me/profile">
                <div className="w-8 h-8 rounded-full bg-white text-[#3c7ff8] flex items-center justify-center cursor-pointer overflow-hidden">
                  {user.image ? (
                    <img
                      src={user.image}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    getInitial(user?.username)
                  )}
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
