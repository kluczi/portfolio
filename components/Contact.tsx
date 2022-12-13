import { BsLinkedin } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-start py-2">
      <div className="flex flex-row">
        <a href="#home">
          <div className="flex justify-start text-main-gray text-xl lg:text-3xl select-none">
            back to home
          </div>
        </a>
        <div className="flex justify-center text-main-white text-4xl lg:text-6xl select-none">
          contact
        </div>
      </div>
      <div className="flex h-screen flex-col lg:flex-row justify-center lg:justify-center gap-12 lg:gap-24 m-12 lg:m-0">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row items-center justify-center">
            <MdMail color="#E6E6E6" fontSize="3.5em" />
            <a
              href="mailto:bartekcsgo04@gmail.com"
              className="text-main-gray text-3xl items-center justify-center m-4"
            >
              bartekcsgo04@gmail.com
            </a>
          </div>
          <div className="flex flex-row items-center">
            <a href="www.linkedin.com/in/bartek-kluska">
              <BsLinkedin color="#E6E6E6" fontSize="3.5em" />
            </a>
            <span className="text-main-gray text-3xl items-center justify-center m-4">
              linked in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
