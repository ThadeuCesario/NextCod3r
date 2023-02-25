export default function handler(req, res) {
    const id = Number(req.query.id);

    res.status(200).json({
        id,
        nome: `João Almeida ${id}`,
        email: `joaoalmeida${id}@gmail.com`
    })
}