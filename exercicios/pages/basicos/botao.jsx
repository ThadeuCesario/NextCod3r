function botao() {
  function acao1() {
    console.log("ação 1");
  }

  return (
    <div>
      <input type="text" onChange={(e) => console.log(e.target.value)}/>
      <button type="button" onClick={acao1}>
        Click
      </button>
    </div>
  );
}

export default botao;
