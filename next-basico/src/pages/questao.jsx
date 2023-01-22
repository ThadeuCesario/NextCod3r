/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

function questao() {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/123")
      .then((resp) => resp.json())
      .then((json) => setQuestion(json));
  }, []);

  return (
    <div>
      {question && (
        <>
          <h1>{question?.id}) {question?.question}</h1>
          <ul>
            {question?.answers?.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default questao;
