interface Props {
  bio: string;
}

const Bio = ({ bio }: Props) => {
  return (
    <>
      <div className="bg-white border border-gray-300 mt-3 rounded-[10px] p-5">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-semibold tracking-wide">About Me</h2>
          </div>
          <p className="text-[13px] mt-4 text-gray-500">
            {bio ? bio : "No bio yet"}
          </p>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold tracking-wide">Skills</h2>
          </div>
          <div className="text-[12px] flex items-center gap-2.5 mt-4 font-semibold">
            <div className="bg-gray-100 px-[10px] py-[4px] rounded-full">
              <p>UX researcher</p>
            </div>
            <div className="bg-gray-100 px-[10px] py-[4px] rounded-full">
              <p>Mobile App</p>
            </div>
            <div className="bg-gray-100 px-[10px] py-[4px] rounded-full">
              <p>Fullstack Developer</p>
            </div>
            <div className="bg-gray-100 px-[10px] py-[4px] rounded-full">
              <p>UI Design</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bio;
