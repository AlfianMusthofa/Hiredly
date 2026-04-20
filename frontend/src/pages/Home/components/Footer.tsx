import GP from "../../../assets/icons/google-play-badge-en.png";
import AS from "../../../assets/icons/apple-store-badge-en.png";
import FB from "../../../assets/icons/facebook.png";
import IG from "../../../assets/icons/instagram.png";
import TT from "../../../assets/icons/tiktok.png";

const Footer = () => {
  return (
    <>
      <div className="max-w-257.25 mx-auto">
        <div className=" flex justify-between border-y border-gray-200 py-8">
          <div>
            <h3 className="font-medium">Company</h3>
            <div className="text-[14px] flex flex-col gap-1 mt-3">
              <a href="#">About Us</a>
              <a href="#">Carrier</a>
              <a href="#">Blogs</a>
              <a href="#">User Agreement</a>
              <a href="#">Courses</a>
              <a href="#">Testimonials</a>
            </div>
          </div>
          <div>
            <h3 className="font-medium">Help</h3>
            <div className="text-[14px] flex flex-col gap-1 mt-3">
              <a href="#">Help Centre</a>
              <a href="#">Contact Us</a>
              <a href="#">FAQ</a>
              <a href="#">Community Guide</a>
            </div>
          </div>
          <div>
            <h3 className="font-medium">Legal</h3>
            <div className="text-[14px] flex flex-col gap-1 mt-3">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Sequrity</a>
              <a href="#">Compliance</a>
            </div>
          </div>
          <div>
            <h3 className="font-medium">Download the Hiredly App</h3>
            <div className="mt-3 flex flex-col gap-1">
              <img src={GP} alt="" className="w-42.5" />
              <img src={AS} alt="" className="w-42.5" />
            </div>
          </div>
        </div>
        <div className="text-[13px] py-4 flex items-center justify-between">
          <div>@2026 PT. Hiredly Indonesia Group</div>
          <div className="flex items-center gap-2">
            <a href="#">
              <img src={IG} alt="" className="w-[25px]" />
            </a>
            <a href="#">
              <img src={FB} alt="" className="w-[25px]" />
            </a>
            <a href="#">
              <img src={TT} alt="" className="w-[25px]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
