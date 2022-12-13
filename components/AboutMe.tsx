import { SiAboutdotme } from "react-icons/si";

const AboutMe = () => {
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
          about me
        </div>
      </div>
      <div className="flex h-screen flex-col lg:flex-row justify-center lg:justify-center gap-12 lg:gap-24 m-12 lg:m-0">
        <div className="flex text-main-gray  text-2xl lg:text-4xl select-none items-center">
          <span className="text-main-white">Hey!</span> <br />
          My name is Bartek. I’m 18 and I’m studying computer science in Zespół
          Szkół Elektronicznych in Bydgoszcz. <br /> IT is my passion since
          2017, but programming is a thing that took my heart.
        </div>
        <div className="flex items-center justify-center text-[10rem] lg:text-[15rem] text-main-white">
          <SiAboutdotme />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
