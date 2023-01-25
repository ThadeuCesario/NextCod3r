export function getStaticProps() {
    // o next automaticamente detecta que será um componente estático
    return {
        props: {
            numero: Math.random()
        }
    }
}

function estatico(props) {
    return (
        <div>
            <span>Aleatório {props.numero}</span> 
        </div>
    )
}

export default estatico;