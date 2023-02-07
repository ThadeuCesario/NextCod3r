import { useEffect, useState } from "react";

function Estatico1() {
    const [num, setNum] = useState(0);

    useEffect(() => {
        setNum(Math.random())
    }, [])

    return (
        <div>
            <h1>Estático #01</h1>
            <h2>{num}</h2>
        </div>
    )
}

export default Estatico1;