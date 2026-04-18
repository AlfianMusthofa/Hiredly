import Pertamina from "../../../assets/icons/960px-Pertamina_Logo.png";
import BankMega from "../../../assets/icons/bankmega.png";
import RuangGuru from "../../../assets/icons/ruangguru.png";
import McD from "../../../assets/icons/McDonals.png";

const TrustedCompany = () => {
  return (
    <>
      <div className="max-w-257.25 mx-auto pb-4 mt-14 text-center">
        <h2 className="text-[21px] font-bold tracking-wide">
          Trusted by Company
        </h2>
        <div className="grid grid-cols-4 gap-2 mt-3">
          <div className="border border-gray-200 rounded-[7px] p-3">
            <img src={Pertamina} alt="" className="w-[100px]" />
            <p className="text-[11px] text-left mt-3">
              PT Pertamina (Persero) is an Indonesian state-owned oil and
              natural gas corporation, headquartered in Jakarta.
            </p>
          </div>
          <div className="border p-3 border-gray-200 rounded-[7px]">
            <img src={RuangGuru} alt="" className="w-[50px]" />
            <p className="text-[11px] text-left mt-2">
              PT Ruang Raya Indonesia, doing business as Ruangguru, is a startup
              company focusing in education.
            </p>
          </div>
          <div className="border p-3 border-gray-200 rounded-[7px]">
            <img src={McD} alt="" className="w-[37px]" />
            <p className="text-[11px] text-left mt-2">
              McDonald's Corporation, doing business as McDonald's, is an
              American multinational fast food restaurant chain.
            </p>
          </div>
          <div className="border border-gray-200 rounded-[7px] p-3">
            <img src={BankMega} alt="" className="w-[50px]" />
            <p className="text-[11px] text-left mt-2">
              Bank Mega is a national private banking company in Indonesia which
              operates in the financial services.
            </p>
          </div>
        </div>
        <div className="mt-3">
          <a
            href="#"
            className="bg-[#3c7ff8] text-[13px] text-white px-3 py-2 rounded-[5px]"
          >
            and more
          </a>
        </div>
      </div>
    </>
  );
};

export default TrustedCompany;
