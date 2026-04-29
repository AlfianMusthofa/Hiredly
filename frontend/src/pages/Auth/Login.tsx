import Google from "../../assets/icons/search.png";
import Linkeding from "../../assets/icons/linkedin.png";
import { useState } from "react";
import { useHandleLogin } from "./hooks/HandleLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useHandleLogin(email, password);

  return (
    <>
      <div className="flex w-full items-center justify-center h-screen bg-gray-100">
        <div className="bg-white w-[450px] p-4 border border-gray-300 rounded-[12px]">
          <p className="text-[12px] tracking-wide font-semibold text-gray-500">
            WELCOME BACK
          </p>
          <h1 className="text-[22px] tracking-wide font-bold my-[2px]">
            Login to Hiredly
          </h1>
          <p className="text-[12px] tracking-wide text-gray-500">
            Doesn't have an account?{" "}
            <a href="#" className="text-[#3c7ff8] font-semibold">
              SignUp
            </a>
          </p>
          <div className="flex items-center gap-2 mt-7">
            <button className="border border-gray-300 text-[13px] flex-1 py-[7px] rounded-[7px] cursor-pointer">
              <div className="flex items-center justify-center gap-2">
                <img src={Google} alt="Google" className="w-4" />
                <p className="font-medium mt-[3px]">Google</p>
              </div>
            </button>
            <button className="border border-gray-300 text-[13px] flex-1 py-[7px] rounded-[7px] cursor-pointer">
              <div className="flex items-center justify-center gap-2">
                <img src={Linkeding} alt="Google" className="w-4" />
                <p className="font-medium mt-0.75">Linkedin</p>
              </div>
            </button>
          </div>
          <p className="text-[12px] tracking-wide text-center mt-5 text-gray-400">
            or login with email
          </p>
          <div className="mt-4">
            <div>
              <p className="text-[13px]">Email</p>
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                className="bg-gray-100 w-full text-[14px] p-2 rounded-[7px] mt-[4px] border border-gray-300"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <p className="text-[13px]">Password</p>
              <input
                type="password"
                placeholder="Enter password"
                className="bg-gray-100  w-full text-[14px] p-2 rounded-[7px] mt-[4px] border border-gray-300"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end mt-3">
              <a href="#" className="text-[12px]">
                Forgot Password?
              </a>
            </div>
            <button
              onClick={handleLogin}
              className="bg-[#3c7ff8] w-full text-white text-[13px] mt-3 py-2.5 rounded-[7px] cursor-pointer"
            >
              LogIn
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
