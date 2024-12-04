import { ChangeEventHandler } from "react";

type CreateFoodProps = {
  name?: string;
  title?: string;
  type?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  id?: string;
  placeholder?: string;
};

export const CreateFood = ({
  id,
  name,
  title,
  type,
  value,
  onChange,
  placeholder,
}: CreateFoodProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#121316] font-Poppins text-sm font-medium leading-[140%]">
        {title}
      </p>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="px-3 h-14 bg-[#F4F4F4] rounded-lg w-full outline-none text-[#8B8E95]"
      />
    </div>
  );
};
