type CreateFoodProps = {
  name?: string;
  title?: string;
  type?: string;
};

export const CreateFood = ({ name, title, type }: CreateFoodProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#121316] font-Poppins text-sm font-medium leading-[140%]">
        {title}
      </p>
      <input
        type={type}
        placeholder={name}
        className="px-3 h-14 bg-[#F4F4F4] rounded-lg w-full outline-none text-[#8B8E95]"
      />
    </div>
  );
};
