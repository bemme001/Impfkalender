import { numberInBetween, numberIsBigger } from "./helper";

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
  if(r[0] === 17) {
    text = '17';
  }
  return {
    text: text,
    handler: (age) => numberInBetween(age, r[0], r[1]),
  }
}

const allAction = {
  text: "Show all",
  handler: () => true,
};

const over60Action = {
  text: "60+",
  handler: (age) => numberIsBigger(age, 60),
};

let actions = [];
actions = actions.concat([allAction], ranges.map(rangeActionGenerator));
actions.push(over60Action);

export default actions;