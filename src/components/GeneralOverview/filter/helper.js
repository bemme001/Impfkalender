export function getAgeDifference(startDate, endDate) {
  const timeMilliseconds = startDate - endDate;
  const difference = 1970 - new Date(timeMilliseconds).getFullYear();
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
