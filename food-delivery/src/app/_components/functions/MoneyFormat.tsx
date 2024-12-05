// type moneyFormatProps = {
//   amount: number;
// };

// export const MoneyDisplay = ({ amount }: moneyFormatProps) => {
//   const formatMNT = new Intl.NumberFormat("mn-MN", {
//     style: "currency",
//     currency: "MNT",
//     minimumFractionDigits: 0,
//   });

//   return <div>{formatMNT.format(amount)}</div>;
// };

const formatMNT = new Intl.NumberFormat("mn-MN", {
  style: "currency",
  currency: "MNT",
  minimumFractionDigits: 0, // Бутархай тооны оронг харуулахгүй
});

// Жишээ
const amount = 1234567;
console.log(formatMNT.format(amount));
