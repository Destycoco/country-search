export function formatNumber(number) {
  // Convert number to string
  const numStr = number.toString();

  // Add commas for every three digits from the right
  let formattedNumber = '';
  for (let i = numStr.length - 1, count = 0; i >= 0; i--) {
    formattedNumber = numStr[i] + formattedNumber;
    count++;
    if (count % 3 === 0 && i !== 0) {
      formattedNumber = ',' + formattedNumber;
    }
  }

  return formattedNumber;
}
