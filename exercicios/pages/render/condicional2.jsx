import If from "../../components/If";

function condicional2() {
  const numeros = [
    13, 1235, 342562, 5642, 12, 23, 56, 7, 4, 456, 56, 875, 2, 3, 1, 16, 33, 56, 10
  ];

  function validarNumero(numero) {
    return numero % 2 === 0;
  }

  return (
    <>
      {numeros.map((numero) => (
        <If teste={validarNumero(numero)}>
          <div>O número {numero} é par</div>
        </If>
      ))}
    </>
  );
}

export default condicional2;
