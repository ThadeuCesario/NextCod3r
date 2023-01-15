import Filho from "./Filho";

function Pai(props) {
  return (
    <div>
      <Filho propsPai={props} />
    </div>
  );
}

export default Pai;
