const HomeCategory = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center py-5">
        <h1 className="text-[25px] font-bold tracking-wide">
          Browse Popular Jobs
        </h1>
        <p className=" text-[14px] w-125 text-center text-gray-500">
          We have listed our top & demandable jobs according to our audience
          demand. Popular jobs may changes, it depens on time & market.
        </p>
      </div>
      <div className="max-w-257.25 mx-auto grid grid-cols-4 gap-3 text-center text-[15px] font-medium my-5">
        <div className="min-h-20 border border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
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
        <div className="min-h-21.25 border border-gray-200 p-3 rounded-[7px] shadow-md py-5 flex justify-center items-center">
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
          Fresh Graduate
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
