export default function questao(req, res) {
    if (req.method !== "GET") return res.status(405).send("Method Not Allowed");
  
  
    const id = req.query.id;
  
    res.status(200).json({
      id,
      question: "Qual é a sua cor preferida?",
      answers: ["White", "Red", "Yellow", "Green"],
    });
  }
  