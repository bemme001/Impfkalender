import { useState } from "react";
import AgeTiles from "./AgeTiles";
import { numberInBetween } from "./helper/helper";
import "./GO.css"
import MultiRangeSlider from "./MultiRangeSlider";

export default function AgeTileBoard({ ageRanges, onFilterAge }) {
  const [selected, setSelected] = useState(0);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  return (
    <div className="row">
      <div className="col-12">
        {ageRanges.map((ageRange, i) => {
          return (
            <AgeTiles active={selected === i ? true : false} text={ageRange.text} key={i} onClick={() => {
              console.log(ageRange.text);
              setSelected(i);
              onFilterAge(ageRange.start, ageRange.end);
            }} />
          );
        })}
        <div className="col-12 mt-4 h100">
          <MultiRangeSlider
            min={0}
            max={60}
            onChange={({ min, max }) => { setFrom(min); setTo(max) }}
          />
          {/* <input type="number" placeholder="Alter Min" onChange={(event) => {
          setFrom(event.target.value);
        }} />
        <input type="number" placeholder="Alter Max" onChange={(event) => {
          setTo(event.target.value);
        }} /> */}
        </div>
        <div className="col-12">
          <button className="btn btn-primary" onClick={() => {
            setSelected(-1);
            // if (from < 0 || to < 0) {
            //   alert("Bitte Zahlen größer gleich Null eingeben!")
            //   return;
            // }
            onFilterAge(from, to);
          }}>Los</button>
        </div>
      </div>
    </div>
  );
}

