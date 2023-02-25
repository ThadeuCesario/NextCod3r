/* 
Quando o fallback é falso, se passarmos um id diferente ele gerará um 404.
*/

export function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {params: { id: '1'}},
            {params: { id: '2'}},
            {params: { id: '3'}}
        ],
    }
}

export function getStaticProps() {
    return {
        props: {}
    }
}

export default function AlunoPorId() {
    return (
        <div>
            <h1>Detalhes do aluno</h1>
        </div>
    )
}