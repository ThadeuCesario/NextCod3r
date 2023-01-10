function lista1() {
    return (
        <div>
            {Array(25).fill(0).map((item, index) => <span key={index}>{item + index + 1}, </span>)}
        </div>
    )
}

export default lista1;