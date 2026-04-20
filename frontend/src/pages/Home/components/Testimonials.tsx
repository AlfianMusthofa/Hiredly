import Avatar from "../../../assets/avatar.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="max-w-257.25 mx-auto py-5 mt-4">
        <div className=" text-center">
          <h1 className="text-[21px] font-bold tracking-wide">
            1 million people get hired through Hiredly
          </h1>
          <p className="text-[15px] mt-1">
            See how they land their dream jobs from Hiredly, so you can land
            yours
          </p>
        </div>
        <div className="mt-6 flex gap-3">
          <div className="flex-1 border border-gray-300 shadow-md p-3 rounded-[7px]">
            <div className="flex items-center gap-3">
              <img
                src={Avatar}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              />
              <div>
                <h3 className="font-bold text-[15px] tracking-wide">
                  Jameson Hidrogez
                </h3>
                <p className="text-[12px] text-gray-500">Senior IT Developer</p>
              </div>
            </div>
            <p className="text-[14px] mt-3">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
              autem sit soluta voluptas asperiores cupiditate nisi nulla
              deserunt ad tempora voluptatibus laboriosam ipsum"
            </p>
          </div>
          <div className="flex-1 border border-gray-300 shadow-md p-3 rounded-[7px]">
            <div className="flex items-center gap-3">
              <img
                src={Avatar}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              />
              <div>
                <h3 className="font-bold text-[15px] tracking-wide">
                  Jameson Hidrogez
                </h3>
                <p className="text-[12px] text-gray-500">Senior IT Developer</p>
              </div>
            </div>
            <p className="text-[14px] mt-3">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
              autem sit soluta voluptas asperiores cupiditate nisi nulla
              deserunt ad tempora voluptatibus laboriosam ipsum"
            </p>
          </div>
          <div className="flex-1 border border-gray-300 shadow-md p-3 rounded-[7px]">
            <div className="flex items-center gap-3">
              <img
                src={Avatar}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              />
              <div>
                <h3 className="font-bold text-[15px] tracking-wide">
                  Jameson Hidrogez
                </h3>
                <p className="text-[12px] text-gray-500">Senior IT Developer</p>
              </div>
            </div>
            <p className="text-[14px] mt-3">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
              autem sit soluta voluptas asperiores cupiditate nisi nulla
              deserunt ad tempora voluptatibus laboriosam ipsum"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
