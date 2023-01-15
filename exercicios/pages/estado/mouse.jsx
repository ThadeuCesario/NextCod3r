import { useState } from "react";

function mouse() {
  const [click, setClick] = useState(null);

  function defineMouseClick(event) {
    setClick(event.altKey)
  }

  return (
    <>
      <button type="button" onClick={(e) => defineMouseClick(e)}>
        Clique aqui
      </button>
      <br />
      <br />
      {click && <div>O usuário clicou apertando o alt</div>}
    </>
  );
}

export default mouse;
