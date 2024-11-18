type CategoryStateType = {
  text?: string;
};

export const CategoryState = (props: CategoryStateType) => {
  return (
    <div className="border border-[#D6D8DB] py-2 px-4 rounded-lg flex justify-center items-center">
      <p className="font-Inter font-medium text-lg tracking-[-0.396px]">
        {props.text}
      </p>
    </div>
  );
};
