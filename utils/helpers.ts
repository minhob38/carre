export const convertNumberToWon = (number: number, isRaw = true): string => {
  const numberStr = number.toString();

  if (isRaw) {
    if (numberStr.length < 5) {
      return `${numberStr}원`;
    } else if (numberStr.length >= 5 && numberStr.length < 9) {
      return `${numberStr.slice(0, -4)}만원`;
    } else if (numberStr.length >= 9 && numberStr.length < 13) {
      return `${numberStr.slice(0, -8)}억 ${numberStr.slice(-8, -4)}만원`;
    }
  }

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
