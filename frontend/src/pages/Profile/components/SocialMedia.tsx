import { ExternalLink, Globe } from "lucide-react";
import Linkedin from "../../../assets/icons/linkedin.png";
import Github from "../../../assets/icons/github.png";

const SocialMedia = () => {
  return (
    <>
      <div className="bg-white border border-gray-300 mt-3 rounded-[10px] p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold tracking-wide">Social Media</h2>
          <button className="text-[12px] border px-2.5 py-0.5 rounded-[5px] text-[#3c7ff8] cursor-pointer">
            + Add
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-2.5">
          <button className="w-full cursor-pointer">
            <div className="p-3.5 border border-gray-300 rounded-[7px] flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img src={Linkedin} alt="Linkedin" className="w-5" />
                <p className="text-[13px] font-semibold">Linkedin</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-[12px] text-gray-500">not added yet</p>
                <ExternalLink width={13} color="grey" />
              </div>
            </div>
          </button>
          <button className="w-full cursor-pointer">
            <div className="p-3.5 border border-gray-300 rounded-[7px] flex items-center justify-between">
              <div className="flex items-center gap-5">
                <Globe width={17} />
                <p className="text-[13px] mt-[2px] font-semibold">
                  Behance / Portfolio
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-[12px] text-gray-500">not added yet</p>
                <ExternalLink width={13} color="grey" />
              </div>
            </div>
          </button>
          <button className="w-full cursor-pointer">
            <div className="p-3.5 border border-gray-300 rounded-[7px] flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img src={Github} alt="Linkedin" className="w-5" />
                <p className="text-[13px] font-semibold">Github</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-[12px] text-gray-500">not added yet</p>
                <ExternalLink width={13} color="grey" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
