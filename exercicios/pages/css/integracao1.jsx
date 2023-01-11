/**
 * Não podemos importar diretamente o .css
 * Precisamos utilizar css modules ou passar dentro do _app.js para utilizar de uma forma global.
 */

function integracao1() {
    return (
        <>
           <div className="vermelha">Texto #01</div>
           <div className="azul">Texto #02</div>
           <div className="branca">Texto #03</div>
        </>
    )
}

export default integracao1;