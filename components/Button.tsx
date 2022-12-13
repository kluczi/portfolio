type Props = {
  buttonName: string;
  id: string;
};

const Button = ({ buttonName, id }: Props) => {
  return (
    <a href={`#${id}`}>
      <div className="text-main-gray select-none text-lg w-40 p-3 lg:text-2xl lg:w-52 lg:p-6 rounded-[3rem] border-2 border-solid border-main-gray hover:text-main-white hover:border-main-white flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
        {buttonName}
      </div>
    </a>
  );
};

export default Button;
