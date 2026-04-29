import { Briefcase, User } from "lucide-react";
import Navbar from "./components/NavbarAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const RolePage = () => {
  const [selectedRole, setSelectedRole] = useState<string>("user");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!selectedRole) return;
    navigate(`/register?role=${selectedRole}`);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
      >
        <Navbar />
        <div className="flex items-center justify-center w-full h-screen bg-[#F8FAFC]">
          <div className="flex flex-col text-center">
            <p className="text-[13px] tracking-wider text-[#3c7ff8]">
              START YOUR JOURNEY
            </p>
            <h1 className="text-[29px] font-bold tracking-wide my-1">
              What are you here as?
            </h1>
            <div>
              <p className="text-[15px] w-125 text-gray-400">
                Choose your role so Hiredly can tailor the best experience for
                you from day one.
              </p>
            </div>
            <div>
              <div className="flex justify-center gap-3 mt-5 text-left">
                <div
                  onClick={() => setSelectedRole("user")}
                  className={`border p-4 w-65 cursor-pointer rounded-[5px] bg-white transition ${
                    selectedRole === "user"
                      ? "border-2 border-[#3c7ff8]"
                      : "border-gray-300"
                  }`}
                >
                  <User color="#3c7ff8" />
                  <h1 className="font-medium mt-3">Job Seeker</h1>
                  <p className="text-[12px] mt-1 text-gray-500">
                    I am looking for a job or want to explore new career.
                  </p>
                  <div className="mt-8 flex flex-col gap-2">
                    <p className="text-[12px]">
                      ✅ access various active vacancies
                    </p>
                    <p className="text-[12px]">✅ CV Builder & tracking</p>
                    <p className="text-[12px]">✅ Vacancy recommendations</p>
                  </div>
                </div>
                <div
                  onClick={() => setSelectedRole("employer")}
                  className={`border  p-4 w-65 cursor-pointer rounded-[5px] bg-white ${
                    selectedRole === "employer"
                      ? "border-2 border-[#3c7ff8]"
                      : "border-gray-300"
                  }`}
                >
                  <Briefcase color="#19A44C" />
                  <h1 className="font-medium mt-3">HR / Company</h1>
                  <p className="text-[12px] mt-1 text-gray-500">
                    I represent the company and want to find the best candidates
                    for our team.
                  </p>
                  <div className="mt-8 flex flex-col gap-2">
                    <p className="text-[12px]">✅ Unlimited job postings</p>
                    <p className="text-[12px]">
                      ✅ Applicant monitoring dashboard
                    </p>
                    <p className="text-[12px]">
                      ✅ Access to 5 million candidates
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleNext}
                className="bg-[#3c7ff8] w-full text-[14px] text-white py-2.5 rounded-[5px] my-3 cursor-pointer"
              >
                Continue
              </button>
              <p className="text-[13px] text-gray-500 tracking-wide">
                Have an account?{" "}
                <Link to="/login" className="text-[#3c7ff8] font-bold">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default RolePage;
