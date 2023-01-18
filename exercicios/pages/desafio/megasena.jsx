import { useState } from "react";

function megasena() {
  const [numbers, setNumbers] = useState([]);
  const [quantity, setQuantity] = useState(6);

  function randomNumbers() {
    let n = [];

    for (let index = 0; index < quantity; index++) {
      n.push(Math.floor(Math.random() * 60) + 1);
    }

    n = [...new Set(n)];
    console.log(n, n.length, quantity);
    
    if(n.length === quantity) setNumbers(n.sort((a,b) => a - b));
    else randomNumbers()
  }

  return (
    <div>
      <div>
        {numbers.map((number) => (
          <strong key={number}>{number} </strong>
        ))}
      </div>
      <input
        type="number"
        min={6}
        max={16}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button type="button" onClick={randomNumbers}>
        Gerar números
      </button>
    </div>
  );
}

export default megasena;
