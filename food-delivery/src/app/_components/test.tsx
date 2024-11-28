type TBorderBoxProps = {
  text: string;
  handleClick: (number1: number, number2: number) => void;
};

const BorderBox = ({ text, handleClick }: TBorderBoxProps) => {
  return (
    <div>
      {text}
      <button onClick={() => handleClick(12, 12)}>Click</button>
    </div>
  );
};

const Container = () => {
  const handleClick = () => {
    alert("Hello");
  };

  return (
    <div>
      <BorderBox text="Bye" handleClick={handleClick} />
      {/* <BorderBox />
      <BorderBox /> */}
    </div>
  );
};
