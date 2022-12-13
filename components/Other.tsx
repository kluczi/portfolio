import { BsKeyboardFill } from "react-icons/bs";

const Other = () => {
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
          other
        </div>
      </div>
      <div className="flex h-screen flex-col lg:flex-row justify-center lg:justify-center gap-12 lg:gap-24 m-12 lg:m-0">
        <div className="flex text-main-gray  text-2xl lg:text-4xl select-none items-center">
          As for other programming languages, I have contact with <br /> HTML,
          CSS, Vanilla JS, Python, SQL, PHP and Swift.
        </div>
        <div className="flex items-center justify-center text-[10rem] lg:text-[15rem] text-main-white">
          <BsKeyboardFill />
        </div>
      </div>
    </div>
  );
};

export default Other;
