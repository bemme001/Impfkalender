import { useState } from "react";
import AgeTiles from "./AgeTiles";
import { numberInBetween } from "./helper/helper";

export default function AgeTileBoard({ ageRanges, onFilterAge }) {
  const [selected, setSelected] = useState(0);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  return (
    <div>
      {ageRanges.map((ageRange, i) => {
        return (
          <AgeTiles active={selected === i ? true : false} text={ageRange.text} key={i} onClick={() => {
            console.log(ageRange.text);
            setSelected(i);
            onFilterAge(ageRange.start, ageRange.end);
          }} />
        );
      })}
      <div>
        <input type="number" placeholder="Alter Min" onChange={(event) => {
          setFrom(event.target.value);
        }} />
        <input type="number" placeholder="Alter Max" onChange={(event) => {
          setTo(event.target.value);
        }} />
        <button onClick={() => {
          setSelected(-1);
          if (from < 0 || to < 0) {
            alert("Bitte Zahlen größer gleich Null eingeben!")
            return;
          }
          onFilterAge(from, to);
        }}>Los</button>
      </div>
    </div>
  );
}

