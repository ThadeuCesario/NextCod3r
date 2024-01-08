// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const idSelecionado = Number(req.query.id);
  const questoesSelecionadas = questoes.find(questao => questao.id === idSelecionado);

  if (questoesSelecionadas) {
    res.status(200).json(questoesSelecionadas.paraObjeto());
  } else {
    res.status(204).send('');
  }
}