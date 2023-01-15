function Filho(props) {
  const {
    propsPai: { conteudo },
  } = props;

  return <div>Componente filho: {conteudo}</div>;
}

export default Filho;
