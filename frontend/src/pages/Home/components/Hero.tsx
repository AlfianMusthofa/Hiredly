const Hero = () => {
  return (
    <>
      <div className=" bg-gray-50 mt-15 py-13">
        <div className="max-w-257.25 mx-auto flex flex-col items-center">
          <div className="w-137.5 text-center">
            <h1 className="text-[40px] tracking-wide font-bold">
              Find Your <span className="text-[#3c7ff8]">Dream Job</span> Here
              Fast & Easy
            </h1>
            <p className="text-gray-500 text-[15px] mt-2">
              Finding proper jobs in Indonesia can be tough. Hiredly is a
              platform where you can get your desired without any hassle & in
              less time.
            </p>
            <div className="flex items-center mt-9 justify-center rounded-[5px] bg-white">
              <div className=" flex text-[13px] w-full">
                <input
                  type="text"
                  placeholder="Search job title or keyword"
                  className="outline-none flex-1 py-3.75 pl-3"
                />
                <input
                  type="text"
                  placeholder="Search city or province"
                  className="outline-none flex-1 py-3.75 pl-3"
                />
              </div>
              <button className=" bg-[#3c7ff8] text-white text-[13px] py-3.75 px-7 rounded-[5px] cursor-pointer">
                Search
              </button>
            </div>
            <p className="text-[13px] text-gray-500 mt-4 tracking-wide">
              Trusted over 1000+ companies
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
