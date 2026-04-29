import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useHandleRegister } from "./hooks/HandleRegister";

const Register = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    companyName: "",
  });

  const { handleRegister } = useHandleRegister(form, role);

  return (
    <>
      <div className="background flex w-full h-screen items-center justify-center bg-gray-50">
        <div className="border border-gray-300 bg-white p-5 rounded-[8px] w-[470px]">
          <h1 className="font-bold tracking-wide text-[20px]">
            Create your account
          </h1>
          <p className="text-[13px] text-gray-400">
            Fill in your details below to start exploring your career with
            Hiredly.
          </p>
          {role === "employer" && (
            <div className="mt-3 border border-dashed p-3 rounded-[8px] bg-[#19a44c1a]">
              <p className="text-[12px]">Company title</p>
              <input
                type="text"
                className="mt-[5px] bg-gray-50 border border-gray-300 w-full text-[14px] p-2 rounded-[8px] outline-[#3c7ff8]"
                placeholder="ex. PT. Indonesia Bahari"
                required
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, companyName: e.target.value }))
                }
              />
            </div>
          )}
          <div className="mt-3">
            <p className="text-[12px]">Username</p>
            <input
              type="text"
              className="mt-[5px] bg-gray-50 border border-gray-300 w-full text-[14px] p-2 rounded-[8px] outline-[#3c7ff8]"
              placeholder="John Doe"
              required
              onChange={(e) =>
                setForm((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </div>
          <div className="mt-2">
            <p className="text-[12px]">Email</p>
            <input
              type="text"
              className="mt-[5px] bg-gray-50 border border-gray-300 w-full text-[14px] p-2 rounded-[8px] outline-[#3c7ff8]"
              placeholder="johndoe@gmail.com"
              required
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            <div className="flex-1">
              <p className="text-[12px]">Password</p>
              <input
                type="password"
                className="mt-[5px] bg-gray-50 border border-gray-300 w-full text-[14px] p-2 rounded-[8px] outline-[#3c7ff8]"
                placeholder="At least 8 character"
                required
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
            <div className="flex-1">
              <p className="text-[12px]">Password Confirmation</p>
              <input
                type="password"
                className="mt-[5px] bg-gray-50 border border-gray-300 w-full text-[14px] p-2 rounded-[8px] outline-[#3c7ff8]"
                placeholder="Repeat password"
                required
              />
            </div>
          </div>

          <div className="flex gap-2 w-[350px] my-5">
            <input type="checkbox" className="w-[20px] h-[20px]" />
            <p className="text-[12px]">
              By signing up, you agree to Hiredly's Terms & Conditions and
              Privacy Policy.
            </p>
          </div>
          <button
            onClick={handleRegister}
            className="cursor-pointer bg-[#3c7ff8] w-full text-[13px] text-white py-2.5 rounded-[8px]"
          >
            Create Account
          </button>
          <p className="text-[13px] mt-3 text-center ">
            Have an account? <Link to="/login">LogIn</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
