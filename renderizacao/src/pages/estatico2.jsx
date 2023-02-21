export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

function estatico2(props) {
    return (
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}

export default estatico2;