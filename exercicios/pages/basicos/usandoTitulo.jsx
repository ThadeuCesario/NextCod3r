import Titulo from "../../components/Titulo";

function usandoTitulo() {
  return (
    <div>
      <Titulo
        principal="Página de Cadastro"
        secundario="Incluir, alterar e excluir coisas!"
      />

      <Titulo
        principal="Página de Login"
        secundario="Informe seu e-mail e senha"
      />
    </div>
  );
}

export default usandoTitulo;
