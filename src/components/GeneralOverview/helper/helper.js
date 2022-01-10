export function getAgeDifference(startDate, endDate) {

  const timeMilliseconds = endDate - startDate;
  const difference = new Date(timeMilliseconds).getFullYear() - 1970;
  return difference;
}

export function numberInBetween(x, start, end) {
  let lower = Math.min(start,end);
  let upper = Math.max(start,end);

  return x >= lower && x <= upper;
}

export function numberIsBigger(x, start) {
  return x >= start;
}