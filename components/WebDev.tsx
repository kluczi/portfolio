const WebDev = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start py-2">
      <div className="flex flex-row">
        <a href="#home">
          <div className="flex justify-start text-main-gray text-xl lg:text-3xl select-none">
            back to home
          </div>
        </a>
        <div className="flex justify-center text-main-white text-4xl lg:text-6xl select-none">
          web dev
        </div>
      </div>
      <div className="flex h-screen flex-col lg:flex-row lg:justify-center gap-12 lg:gap-24 m-12 lg:m-0">
        <div className="flex text-main-gray  text-xl lg:text-3xl select-none items-center">
          I am currently developing in React technology <br /> to build app and
          TailwindCSS for styling. <br />I associate my future with it. <br /> I
          am gaining new knowledge and skills every day.
        </div>
        <div className="flex items-center justify-center">
          <img src="react-icon.png" alt="" style={{ width: "15rem" }} />
        </div>
      </div>
    </div>
  );
};

export default WebDev;
