import { BsGithub } from "react-icons/bs";

const GitHub = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start py-2">
      <div className="flex flex-row">
        <a href="#home">
          <div className="flex justify-start text-main-gray text-xl lg:text-3xl select-none">
            back to home
          </div>
        </a>
        <div className="flex justify-center text-main-white text-4xl lg:text-6xl select-none">
          github
        </div>
      </div>
      <div className="flex h-screen flex-col lg:flex-row lg:justify-center gap-12 lg:gap-24 m-12 lg:m-0">
        <div className="flex text-main-gray justify-center text-xl lg:text-3xl select-none items-center">
          My portfolio is available on GitHub.
        </div>
        <div className="flex flex-col justify-center items-center">
          <a href="https://github.com/kluczi">
            <BsGithub color="#E6E6E6" fontSize="18em" />
          </a>
          <span className="text-main-gray text-3xl select-none">click me</span>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
