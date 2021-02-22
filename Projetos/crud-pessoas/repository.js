const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgre',
    port: 5432
})


const getPessoas = (req, res) => {
    pool.query('SELECT * FROM pessoas ORDER BY id DESC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getPessoaById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM pessoas WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const createPessoa = (req, res) => {
    const { nome, email, telefone } = req.body
    pool.query('INSERT INTO pessoas (nome, email, telefone) VALUES ($1, $2, $3)',
    [nome, email, telefone], (error, result) => {
        if (error) {
            throw error
        }
        res.status(201).send(`Pessoa criada com sucesso.`)
    })
}

const updatePessoa = (req, res) => {
    const id = parseInt(req.params.id)
    const { nome, email, telefone } = req.body

    pool.query(
        'UPDATE pessoas SET nome = $1, email = $2, telefone = $3 WHERE id = $4',
        [nome, email, telefone, id],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Pessoa ${id} atualizada com sucesso.`)
        }
    )
}

const deletePessoa = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM pessoas WHERE id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Pessoa removida com sucesso com o identificador: ${id}`)
    })
}

module.exports = { getPessoas, getPessoaById, createPessoa, updatePessoa, deletePessoa }