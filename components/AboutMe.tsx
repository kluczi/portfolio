import { SiAboutdotme } from "react-icons/si";

const AboutMe = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start py-2">
      <div className="flex flex-row w-full">
        <a href="#home">
          <div className="flex justify-start text-main-gray text-xl lg:text-3xl select-none">
            back to home
          </div>
        </a>
        <div className="flex justify-center text-main-white text-4xl lg:text-6xl select-none">
          about me
        </div>
      </div>
      <div className="flex h-screen flex-col lg:flex-row lg:justify-center gap-12 lg:gap-24 m-12 lg:m-0">
        <div className="flex text-main-gray  text-xl lg:text-3xl select-none items-center">
          My name is Bartek. I have 18 years. <br /> I am a student of a
          technical college majoring in computer science. <br /> For several
          years I have been interested in the world of IT <br /> and for a long
          time specifically in programming.
        </div>
        <div className="flex items-center">
          <SiAboutdotme color="#E6E6E6" fontSize="18em" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
