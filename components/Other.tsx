import { BsKeyboardFill } from "react-icons/bs";

const Other = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start py-2">
      <div className="flex flex-row">
        <a href="#home">
          <div className="flex justify-start text-main-gray text-xl lg:text-3xl select-none">
            back to home
          </div>
        </a>
        <div className="flex justify-center text-main-white text-4xl lg:text-6xl select-none">
          other
        </div>
      </div>
      <div className="flex h-screen flex-col lg:flex-row lg:justify-center gap-12 lg:gap-24 m-12 lg:m-0">
        <div className="flex text-main-gray  text-xl lg:text-3xl select-none items-center">
          As for other programming languages at school, <br /> I have contact
          with HTML, CSS, Vanilla JS, Python, SQL and PHP. <br /> Some time ago
          I was learning Swift for mobile apps.
        </div>
        <div className="flex items-center justify-center">
          <BsKeyboardFill color="#E6E6E6" fontSize="18em" />
        </div>
      </div>
    </div>
  );
};

export default Other;
