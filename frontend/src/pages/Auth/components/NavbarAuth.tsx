const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 border-b border-gray-200">
        <div className="max-w-257.25 mx-auto text-white flex justify-between items-center text-[13px] py-3 ">
          <h1 className="text-[#3c7ff8] font-bold text-[20px] tracking-wide">
            Hiredly.
          </h1>
          <div className="text-[13px]">
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
