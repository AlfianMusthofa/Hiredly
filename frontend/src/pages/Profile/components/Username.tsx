import {
  Briefcase,
  FileDown,
  Mail,
  MapPin,
  PencilLine,
  Phone,
  Share2,
} from "lucide-react";
import Avatar from "../../../assets/avatar.jpg";
import { Link } from "react-router-dom";

interface Props {
  username: string;
  email: string;
  phone: string;
  location: string;
  total_years_experience: string;
  current_position: string;
}

const Username = ({
  email,
  username,
  phone,
  location,
  total_years_experience,
  current_position,
}: Props) => {
  return (
    <>
      <div className="border border-gray-300 bg-white p-5 rounded-[10px]">
        <div className="flex gap-7 items-center">
          <img src={Avatar} alt="" className="w-24 h-24 rounded-full" />
          <div>
            <h1 className="text-[22px] font-bold tracking-wide">{username}</h1>
            <p className="text-[13px] tracking-wide text-[#3c7ff8] font-semibold">
              {current_position ? current_position : "No added yet"}
            </p>
            <div className="flex items-center gap-2.5 mt-1.5">
              <div className="flex items-center gap-[5px]">
                <MapPin width={14} color="gray" />
                <p className="text-[12px] mt-[1px] text-gray-500">
                  {location ? location : "No added yet"}
                </p>
              </div>
              <div className="flex items-center gap-[5px]">
                <Mail width={14} color="gray" />
                <p className="text-[12px] mt-[1px] text-gray-500">{email}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <Phone width={14} color="gray" />
                <p className="text-[12px] mt-[1px] text-gray-500">
                  {phone ? phone : "No added yet"}
                </p>
              </div>
              <div className="flex items-center gap-[5px]">
                <Briefcase width={14} color="gray" />
                <p className="text-[12px] mt-[1px] text-gray-500">
                  {total_years_experience
                    ? total_years_experience
                    : "No added yet"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 my-5"></div>
        <div className="text-[12px] flex items-center gap-2">
          <button className="bg-[#3c7ff8] text-white px-3.5 py-1.5 rounded-[8px] cursor-pointer flex items-center gap-1">
            <FileDown width={14} />
            Download CV
          </button>
          <Link
            to="/me/profile/edit"
            className="border border-gray-300 px-3.5 py-1.5 rounded-[8px] cursor-pointer flex items-center gap-2"
          >
            <PencilLine width={14} />
            Edit Profile
          </Link>
          <button className="border border-gray-300 px-3.5 py-1.5 rounded-[8px] cursor-pointer flex items-center gap-2">
            <Share2 width={14} />
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default Username;
