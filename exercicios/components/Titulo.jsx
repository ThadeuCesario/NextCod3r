function Titulo(props) {
    const {principal, secundario} = props;
    return (
        <>
            <h1>{principal}</h1>
            <h2>{secundario}</h2>
        </>
    )
}

export default Titulo;