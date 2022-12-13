const WebDev = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-start py-2">
      <div className="flex flex-row w-full my-3">
        <div className="flex justify-start w-3/12">
          <a href="#home">
            <div className="flex justify-start text-main-gray text-xl lg:text-3xl select-none ml-6 my-3 hover:text-main-white transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
              back
            </div>
          </a>
        </div>
        <div className="flex justify-center text-main-white text-4xl lg:text-6xl select-none w-1/2">
          web dev
        </div>
      </div>
      <div className="flex h-screen flex-col lg:flex-row justify-center lg:justify-center gap-12 lg:gap-24 m-12 lg:m-0">
        <div className="flex text-main-gray  text-2xl lg:text-4xl select-none items-center">
          I am currently developing in React technology to build app and
          TailwindCSS for styling. <br />
          <br /> I associate my future with it. I am gaining new knowledge and
          skills every day.
        </div>
        <div className="flex items-center justify-center">
          <img src="react-icon.png" alt="" style={{ width: "15rem" }} />
        </div>
      </div>
    </div>
  );
};

export default WebDev;
