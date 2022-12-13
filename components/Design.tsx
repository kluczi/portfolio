const Design = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start py-2">
      <div className="flex flex-row">
        <a href="#home">
          <div className="flex justify-start text-main-gray text-xl lg:text-3xl select-none">
            back to home
          </div>
        </a>
        <div className="flex justify-center text-main-white text-4xl lg:text-6xl select-none">
          design
        </div>
      </div>
      <div className="flex h-screen flex-col lg:flex-row lg:justify-center gap-12 lg:gap-24 m-12 lg:m-0">
        <div className="flex text-main-gray  text-xl lg:text-3xl select-none items-center">
          I have knowledge and experience about UI design in Figma. <br /> I
          mainly do it for fun, but I think that web dev should have some
          knowledge of UI/UX.
        </div>
        <div className="flex items-center justify-center">
          <img src="design.png" alt="" style={{ width: "15rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Design;
