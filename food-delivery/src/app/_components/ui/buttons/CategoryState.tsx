type CategoryStateType = {
  text?: string;
  focus?: string;
  buttonName?: string;
};

export const CategoryState = (props: CategoryStateType) => {
  return (
    <div
      className={`group border hover:border-BrandGreen duration-300 py-2 px-4 rounded-lg flex justify-center items-center ${
        props.focus === props.buttonName
          ? "bg-BrandGreen text-white border-BrandGreen"
          : "bg-white text-black border-[#D6D8DB]"
      }`}
    >
      <p className="font-Inter text-blackfont-medium text-lg tracking-[-0.396px]">
        {props.text}
      </p>
    </div>
  );
};
