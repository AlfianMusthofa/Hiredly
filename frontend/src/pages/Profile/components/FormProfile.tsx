import {
  Activity,
  ChevronLeft,
  Mail,
  MapPin,
  Phone,
  SquarePen,
  Star,
  User,
} from "lucide-react";
import Avatar from "../../../assets/avatar.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormProfile = () => {
  const [value, setValue] = useState(0);
  const [input, setInput] = useState("");

  const [form, setForm] = useState({
    username: "",
    position: "",
    location: "",
    phone: "",
    experience: 0,
    bio: "",
    skills: [] as string[],
  });

  const handleSave = async () => {
    console.log("username:", form.username);
    console.log("pos:", form.position);
    console.log("phone:", form.phone);
    console.log("loc:", form.location);
    console.log("exp:", form.experience);
    console.log("bio:", form.bio);
    console.log("skills:", form.skills);
  };

  const handleAdd = () => {
    if (input.trim()) {
      setForm((prev) => ({ ...prev, skills: [...prev.skills, input.trim()] }));
      setInput("");
    }
  };

  const handleRemove = (skill: string) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  return (
    <>
      <div className="bg-[#F7F5F2] h-screen">
        <div className="max-w-175 mx-auto my-5">
          <div className="mb-3">
            <Link to="/me/profile">
              <div className="flex items-center gap-2">
                <ChevronLeft width={25} />
                <p className="text-[13px] mt-[1px]">Kembali ke profile</p>
              </div>
            </Link>
          </div>
          <div className="mb-3">
            <h1 className="text-[18px]">Edit Profile</h1>
            <p className="text-[13px] tracking-wide text-gray-400">
              Perubahan akan terlihat oleh perekrut setelah disimpan
            </p>
          </div>
          <div className="bg-white border border-gray-300 p-4 rounded-[10px] flex items-center gap-4">
            <img src={Avatar} alt="Avatar" className="w-23 rounded-full" />
            <div>
              <h1 className="text-[17px] font-medium">Jonathan Joestar</h1>
              <p className="text-[13px] tracking-wide font-medium">
                Senior Fullstack Developer
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-[5px]">
                  <MapPin width={14} color="gray" />
                  <p className="text-[12px] mt-[1px] text-gray-500">Jakarta</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <Mail width={14} color="gray" />
                  <p className="text-[12px] mt-[1px] text-gray-500">
                    yourmail@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <Phone width={14} color="gray" />
                  <p className="text-[12px] mt-[1px] text-gray-500">
                    your phone
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-300 p-4 rounded-[10px] mt-3">
            <div className="flex items-center gap-2.5">
              <div className="bg-[#3c7ef818] w-[35px] h-[35px] flex items-center justify-center rounded-[7px]">
                <User color="#3c7ff8" className="w-4" />
              </div>
              <div>
                <p className="text-[14px] font-medium">Informasi dasar</p>
                <p className="text-[12px] text-gray-500">
                  Nama, posisi & info kontak
                </p>
              </div>
            </div>
            <div className="border-[0.5px] mt-4 border-black/10"></div>
            <div className="mt-3.5 flex items-center gap-2.5">
              <div className="flex-1">
                <p className="text-[13px]">
                  Nama lengkap <span>*</span>
                </p>
                <input
                  type="text"
                  className="bg-gray-100 w-full outline-[#3c7ff8] text-[14px] p-2 mt-1 border border-gray-300 rounded-[7px]"
                  placeholder="Nama lengkap"
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, username: e.target.value }))
                  }
                />
              </div>
              <div className="flex-1">
                <p className="text-[13px]">
                  Posisi saat ini <span>*</span>
                </p>
                <input
                  type="text"
                  className="bg-gray-100 w-full outline-[#3c7ff8] text-[14px] p-2 mt-1 border border-gray-300 rounded-[7px]"
                  placeholder="cth. Senior Designer"
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, position: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="mt-3.5 flex items-center gap-2.5">
              <div className="flex-1">
                <p className="text-[13px]">
                  Lokasi saat ini <span>*</span>
                </p>
                <input
                  type="text"
                  className="bg-gray-100 w-full outline-[#3c7ff8] text-[14px] p-2 mt-1 border border-gray-300 rounded-[7px]"
                  placeholder="cth. Jakarta Selatan"
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, location: e.target.value }))
                  }
                />
              </div>
              <div className="flex-1">
                <p className="text-[13px]">
                  Nomor ponsel <span>*</span>
                </p>
                <input
                  type="number"
                  inputMode="numeric"
                  className="bg-gray-100 outline-[#3c7ff8] w-full text-[14px] p-2 mt-1 border border-gray-300 rounded-[7px]"
                  placeholder="+62 xxx xxx xxx"
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-300 p-4 rounded-[10px] mt-3">
            <div className="flex items-center gap-2.5">
              <div className="bg-[#3c7ef818] w-8.75 h-8.75 flex items-center justify-center rounded-[7px]">
                <Activity color="#3c7ff8" className="w-4" />
              </div>
              <div>
                <p className="text-[14px] font-medium">Pengalaman</p>
                <p className="text-[12px] text-gray-500">
                  Total tahun kerja dibidangmu
                </p>
              </div>
            </div>
            <div className="border-[0.5px] mt-4 border-black/10"></div>
            <div className="mt-3.5">
              <p className="text-[13px] text-gray-600 mb-4">
                Total tahun pengalaman
              </p>

              {/* SLIDER */}
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={value}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setValue(val);
                  setForm((prev) => ({ ...prev, experience: val }));
                }}
                className="w-full accent-blue-500 cursor-pointer"
              />

              {/* LABEL SCALE */}
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>0 thn</span>
                <span>5 thn</span>
                <span>10 thn</span>
                <span>15 thn</span>
                <span>20+ thn</span>
              </div>

              {/* VALUE */}
              <p className="text-center mt-4 font-semibold">
                {value} tahun pengalaman
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-300 p-4 rounded-[10px] mt-3">
            <div className="flex items-center gap-2.5">
              <div className="bg-[#3c7ef818] w-[35px] h-[35px] flex items-center justify-center rounded-[7px]">
                <SquarePen color="#3c7ff8" className="w-4" />
              </div>
              <div>
                <p className="text-[14px] font-medium">Bio / Tentang Saya</p>
                <p className="text-[12px] text-gray-500">
                  Ceritakan dirimu ke perekrut
                </p>
              </div>
            </div>
            <div className="border-[0.5px] mt-4 border-black/10"></div>
            <div className="mt-3">
              <p className="text-[13px]">bio</p>
              <textarea
                maxLength={300}
                rows={5}
                placeholder="Tulis sedikit tentang dirimu - pengalaman, passion dan apa yang kamu cari, buat singkat tapi berkesan."
                className="mt-2 w-full resize-none border border-gray-300 bg-gray-100 text-[14px] p-2.5 rounded-[8px] outline-[#3c7ff8]"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, bio: e.target.value }))
                }
              ></textarea>
            </div>
            <p className="text-[12px] text-gray-500 mt-1.5">
              Tampil di bagian "Tentang saya" profilmu
            </p>
          </div>
          <div className="bg-white border border-gray-300 p-4 rounded-[10px] mt-3">
            <div className="flex items-center gap-2.5">
              <div className="bg-[#3c7ef818] w-[35px] h-[35px] flex items-center justify-center rounded-[7px]">
                <Star color="#3c7ff8" className="w-4" />
              </div>
              <div>
                <p className="text-[14px] font-medium">Skill</p>
                <p className="text-[12px] text-gray-500">
                  Keahlian yang kamu miliki
                </p>
              </div>
            </div>
            <div className="border-[0.5px] mt-4 border-black/10"></div>
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {form.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="mt-3 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-[13px] flex items-center gap-1"
                  >
                    {skill}
                    <button
                      className="cursor-pointer"
                      onClick={() => handleRemove(skill)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tambah skill..."
                  className="flex-1 border border-gray-400 p-2 rounded-[7px] text-[13px] outline-[#3c7ff8]"
                />

                <button
                  onClick={handleAdd}
                  className="bg-[#3c7ff8] text-white px-4 rounded-lg text-[13px]"
                >
                  + Tambah
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="w-full cursor-pointer bg-[#3c7ff8] text-[14px] text-white py-2 rounded-[7px] mt-3"
          >
            Simpan
          </button>
        </div>
      </div>
    </>
  );
};

export default FormProfile;
