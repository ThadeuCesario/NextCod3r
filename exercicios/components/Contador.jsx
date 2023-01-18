import { Component } from "react";

class Contador extends Component {
    constructor(props) {
        super(props);
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }

    state = {
        numero: this.props.valorInicial ?? 0,
    }

    inc() {
        this.setState({
            numero: this.state.numero + (this.props.passo || 1)
        })
    }

    dec() {
        this.setState({
            numero: this.state.numero - (this.props.passo || 1)
        })
    }


    render() {
        return (
            <div>
                <h1>Contador (usando classe)</h1>
                <h2>{this.state.numero}</h2>
                <button type="button" onClick={this.inc}>+</button>
                <button type="button" onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Contador;