import { Component } from "react";
import Contador from "../../components/Contador";

class ContadorPage extends Component {
  render() {
    return (
      <div>
        <Contador valorInicial={100} passo={5} />
        <Contador />
      </div>
    );
  }
}

export default ContadorPage;
