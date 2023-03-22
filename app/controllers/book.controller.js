const listBooks = (req, res) => {
    res.status(200).send('bienvenido a la biblioteca')
}

const createBook = (req, res) => {
    res.status(200).json(req.body)
}

module.exports = {
    listBooks,
    createBook
} 