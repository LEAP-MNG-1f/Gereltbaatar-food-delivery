type headerButtonProps = {
  text?: string;
  pathname?: string;
  path?: string;
};

export const HeaderButton = (props: headerButtonProps) => {
  return (
    <div>
      <p
        className={`px-4 py-2 font-bold text-sm leading-4 tracking-[-0.2px] ${
          props.pathname === props.path ? "text-BrandGreen " : "text-black"
        }`}
      >
        {props.text}
      </p>
    </div>
  );
};
