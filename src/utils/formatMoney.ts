export const formatMoney = (number: number) => {
  return number > 0
    ? number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    : '0.00';
};
