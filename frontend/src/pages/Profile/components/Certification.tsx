import { Medal } from "lucide-react";

const Certification = () => {
  return (
    <>
      <div className="bg-white border border-gray-300 mt-3 rounded-[10px] p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold tracking-wide">Certification</h2>
          <button className="text-[12px] border px-2.5 py-0.5 rounded-[5px] text-[#3c7ff8] cursor-pointer">
            + Add
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex gap-5">
            <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-[5px]">
              <Medal color="gray" width={18} />
            </div>
            <div>
              <p className="text-[13px] font-semibold">
                Google UX Design Certificate
              </p>
              <p className="text-[12px] text-gray-500">
                Google | Coursera | 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
