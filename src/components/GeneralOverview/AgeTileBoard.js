import AgeTiles from "./AgeTiles";

export default function AgeTileBoard({ actions, handler }) {
    return (
      <div>
        {actions.map((action, i) => {
          return (
            <AgeTiles range={action.text} key={i} onClick={() => handler(action.handler)} />
          );
        })}
      </div>
    );
  }