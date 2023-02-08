export function getStaticProps() {
    return {
        revalidate: 7, // A cada 7s o Next atualizará o conteúdo
        props: {
            numero: Math.random()
        }
    }
}

function estatico3(props) {
    return (
        <div>
            <h1>Estático #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}

export default estatico3;