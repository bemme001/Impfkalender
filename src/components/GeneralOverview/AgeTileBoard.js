import { useState } from "react";
import AgeTiles from "./AgeTiles";
import { numberInBetween } from "./filter/helper";

export default function AgeTileBoard({ actions, handler }) {
  const [selected, setSelected] = useState(0);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

    return (
      <div>
        {actions.map((action, i) => {
          return (
            <AgeTiles active={selected === i ? true : false} range={action.text} key={i} onClick={() => {
              setSelected(i);
              handler(action.handler)}} />
          );
          
        })}
        <div>
          <input type="number" placeholder="Alter Min" onChange={(event) => {
            setFrom(event.target.value);
          }}/>
          <input type="number" placeholder="Alter Max" onChange={(event) => {
            setTo(event.target.value);
          }}/>
          <button onClick={() => {
            setSelected(-1);
            if(from < 0 || to < 0) {
              alert("Bitte Zahlen größer gleich Null eingeben!")
              return;
            }
            handler((age) => {
              return numberInBetween(age, from, to);
            });
          }}>Los</button>
        </div>
      </div>
    );
  }

