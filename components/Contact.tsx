import { BsLinkedin } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const Contact = () => {
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
          contact
        </div>
      </div>
      <div className="flex h-screen flex-col lg:flex-row justify-center lg:justify-center gap-12 lg:gap-24 m-12 lg:m-0">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row items-center justify-center">
            <MdMail color="#E6E6E6" fontSize="3em" />
            <a
              href="mailto:bartekcsgo04@gmail.com"
              className="text-main-gray text-3xl items-center justify-center m-4"
            >
              bartekcsgo04@gmail.com
            </a>
          </div>
          <div className="flex flex-row items-center">
            <a
              href="https://www.linkedin.com/in/bartek-kluska/"
              className="flex flex-row"
            >
              <BsLinkedin color="#E6E6E6" fontSize="3em" />
              <span className="text-main-gray text-3xl items-center justify-center m-4">
                linked in
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
