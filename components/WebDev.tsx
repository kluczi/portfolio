const WebDev = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-start py-2">
      <div className="flex flex-row w-full my-3">
        <div className="flex justify-start w-3/12"></div>
        <div className="flex justify-center text-main-white text-4xl lg:text-6xl select-none w-1/2">
          web dev
        </div>
      </div>
      <div className="flex h-screen flex-col lg:flex-row justify-center lg:justify-center gap-12 lg:gap-24 m-12 lg:m-0">
        <div className="flex text-main-gray  text-2xl lg:text-4xl select-none items-center">
          Currently my main learning path is React (Next.js) + TailwindCSS.{" "}
          <br /> I associate my future with this combo. <br /> I am gaining new
          knowledge and skills every day.
        </div>
        <div className="flex items-center justify-center">
          <img src="react-icon.png" alt="" style={{ width: "15rem" }} />
        </div>
      </div>
    </div>
  );
};

export default WebDev;
