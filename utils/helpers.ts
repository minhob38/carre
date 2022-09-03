export const convertNumberToWon = (number: number): string => {
  const numberStr = number.toString();

  if (numberStr.length < 5) {
    return `${numberStr}만원`;
  } else if (numberStr.length >= 5 && numberStr.length < 9) {
    return `${numberStr.slice(0, -4)}억 ${numberStr.slice(-4)}만원`;
  }
  return '';
};

export const insertCommaToNumber = (number: number): string => {
  return number.toLocaleString();
};
