import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#3c7ff8] fixed top-0 left-0 right-0">
        <div className="max-w-257.25 mx-auto text-white flex justify-between items-center text-[13px] py-3 ">
          <a href="/">
            <img src={Logo} alt="" className="w-22.5" />
          </a>
          <div className="flex items-center gap-6">
            <a href="/">Home</a>
            <a href="/">Find Jobs</a>
            <a href="/">Home</a>
            <a href="/">Contact</a>
            <a href="/">Blog</a>
            <a href="/">About</a>
          </div>
          <div className="text-[13px]">
            <a href="/">Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
