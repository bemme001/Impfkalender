const ranges = [
  [0, 1],
  [2, 4],
  [5, 6],
  [7, 8],
  [9, 14],
  [15, 16],
  [17, 17],
  [18, 59],
];

function rangeActionGenerator(r) {
  let text = r[0] + " - " + r[1];
  if (r[0] === 17) {
    text = '17';
  }
  return {
    text: text,
    start: r[0],
    end: r[1],
  }
}

const over60Action = {
  text: "60+",
  start: 60,
  end: -1,
};

const showAll = {
  text: 'Alle anzeigen',
  start: -1,
  end: -1
};

const ageRanges = [showAll, ...ranges.map(rangeActionGenerator)];
ageRanges.push(over60Action);

export default ageRanges;