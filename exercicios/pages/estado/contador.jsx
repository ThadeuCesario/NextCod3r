import { useState } from "react";

function contador() {
  const [value, setValue] = useState(0);

  function count(plus) {
    setValue(plus ? value + 1 : value - 1);
  }

  return (
    <div>
      <h1>{value}</h1>
      <button type="button" onClick={() => count(true)}>
        +
      </button>
      <button type="button" onClick={() => count()}>
        -
      </button>
    </div>
  );
}

export default contador;
