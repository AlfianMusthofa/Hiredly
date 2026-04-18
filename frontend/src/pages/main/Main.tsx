import Navbar from "../../components/layout/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-gray-50 mt-[60px] py-13">
        <div className="max-w-257.25 mx-auto flex flex-col items-center">
          <div className="w-[550px] text-center">
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
                  className="outline-none flex-1 py-[15px] pl-3"
                />
                <input
                  type="text"
                  placeholder="Search city or province"
                  className="outline-none flex-1 py-[15px] pl-3"
                />
              </div>
              <button className=" bg-[#3c7ff8] text-white text-[13px] py-[15px] px-7 rounded-[5px] cursor-pointer">
                Search
              </button>
            </div>
            <p className="text-[13px] text-gray-500 mt-4 tracking-wide">
              Trusted over 1000+ companies
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center py-7">
        <h1 className="text-[25px] font-bold tracking-wide">
          Browse Popular Jobs
        </h1>
        <p className=" text-[14px] w-[500px] text-center text-gray-500">
          We have listed our top & demandable jobs according to our audience
          demand. Popular jobs may changes, it depens on time & market.
        </p>
      </div>
      <div className="max-w-257.25 mx-auto grid grid-cols-4 gap-3 text-center text-[15px] font-medium my-5">
        <div className="min-h-[80px] border border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
          Administrative & Human resource
        </div>
        <div className="border border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
          Marketing
        </div>
        <div className="border border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
          Operations
        </div>
        <div className="border border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
          Active Hiring
        </div>
        <div className="min-h-[85px] border border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
          Supply Chain & Logistic
        </div>
        <div className="border border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
          Business Development & Sales
        </div>
        <div className="border  border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
          Accounting & Finance
        </div>
        <div className="border border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
          Remote Jobs
        </div>
        <div className="border border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
          Design
        </div>
        <div className="border border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
          Media & Communications
        </div>
        <div className="border  border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
          Computer & Information Technology
        </div>
        <div className="border border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
          Remote Jobs
        </div>
      </div>
    </>
  );
};

export default Main;
