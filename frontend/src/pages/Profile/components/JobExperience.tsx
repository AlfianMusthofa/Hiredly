import { Briefcase } from "lucide-react";

const JobExperience = () => {
  return (
    <>
      <div className="bg-white border border-gray-300 mt-3 rounded-[10px] p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold tracking-wide">Job Experience</h2>
          <button className="text-[12px] border px-2.5 py-0.5 rounded-[5px] text-[#3c7ff8] cursor-pointer">
            + Add
          </button>
        </div>
        <div className="mt-4.5 flex flex-col gap-3">
          <div className="flex gap-5">
            <div className="bg-gray-100 w-16 h-10 flex items-center justify-center rounded-[5px]">
              <Briefcase color="gray" width={18} />
            </div>
            <div>
              <p className="text-[13px] font-semibold">
                Senior Fullstack Developer
              </p>
              <p className="text-[13px] font-semibold text-[#3c7ff8]">
                Tokopedia
              </p>
              <div className="text-[12px] text-gray-500">
                <p>Januari 2023 - Maret 2026 | 3 years | Jakarta</p>
              </div>
              <p className="text-[13px] mt-1.5 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                numquam error soluta dolorem vitae at maxime veniam eum dolorum?
                Quod adipisci sit ex autem dicta porro quibusdam mollitia
                pariatur corporis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobExperience;
