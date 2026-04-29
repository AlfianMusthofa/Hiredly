import Navbar from "../../components/layout/Navbar";
import Username from "./components/Username";
import Bio from "./components/Bio";
import JobExperience from "./components/JobExperience";
import Education from "./components/Education";
import Certification from "./components/Certification";
import SocialMedia from "./components/SocialMedia";
import { useGetMe } from "./hooks/useGetMe";

const Profile = () => {
  const { user } = useGetMe();

  return (
    <>
      <Navbar />
      <div className="bg-[#F7F5F2] h-screen">
        <div className="max-w-222.5 mx-auto mt-20 mb-5">
          <Username
            email={user?.email}
            username={user?.username}
            phone={user?.phone}
            location={user?.location}
            total_years_experience={user?.total_years_experience}
            current_position={user?.current_position}
          />
          <Bio bio={user?.bio} />
          <JobExperience />
          <Education />
          <Certification />
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default Profile;
