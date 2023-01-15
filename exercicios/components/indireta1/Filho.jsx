function Filho(props) {
    const {printar} = props;
    
    return (
        <div>
            Filho indireto
            <br/>
            <button type="button" onClick={() => printar("dado do componente filho")}>Executar</button>
        </div>
    )
}

export default Filho;