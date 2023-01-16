import { useState } from "react";

function formulario() {
const [valor, setValor] = useState('inicial')

  return (
    <div>
      <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
    </div>
  );
}

export default formulario;
