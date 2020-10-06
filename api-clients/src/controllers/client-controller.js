const User = require('../models/client')

module.exports = {
	async addClient(req, res) {
		try {
			const { name, cpf } = req.body
			if (!name || !cpf) {
				return res.status(400).json({ error: 'Faltando atributos' })
			}

			let client = await User.findOne({ cpf })

			if (client) {
				return res.status(400).json({ error: 'Esse CPF já foi cadastrado.' })
			}

			client = await User.create({ name, cpf })
			return res.json(client)
		} catch (e) {
			console.log(JSON.stringify(e,null,2));
      return res
          .status(e.code || 500)
          .json({message: e.message || 'server error'});
		}
	},

	async indexClients(_req, res) {
		try {
			const client = await User.find()
			if (!client || !client.length)
				return res.json({ message: 'Nenhum Cliente cadastrado' })
			return res.json(client)
		} catch (e) {
			console.log(JSON.stringify(e,null,2));
      return res
          .status(e.code || 500)
          .json({message: e.message || 'server error'});
		}
	},

	async getClientByName(req, res) {
		try {
			const { name } = req.body
			const client = await User.find({ name })
			if (!client || !client.length) {
				return res
					.status(404)
					.json({ message: 'Cliente não encontrado' })
			}

			return res.json(client)
		} catch (e) {
			console.log(JSON.stringify(e, null, 2))
			return res.status(e.code || 500).json({ message: 'Cliente não encontrado' })
		}
	},

	async getClientByCPF(req, res) {
		try {
			let { cpf } = req.body
			const client = await User.findOne({ cpf })
			if (!client) {
				return res.status(404).json({message: 'Cliente não encontrado'})
			}
			return res.json(client)
		} catch (e) {
			console.log(JSON.stringify(e, null, 2))
			return res.status(e.code || 500).json({ message: e.message || 'server error' })
		}
	},

	async updateClient(req, res) {
		try {
			let { name, cpf, newName, newCpf } = req.body
			const filter = { name, cpf }
			const update = { name: newName, cpf: newCpf }
			let client = await User.findOneAndUpdate(filter, update)
			if (!client)
				return res
					.status(404)
					.json({message: 'Usuário não existe'})

			return res.json({ message: 'Atualizado!' })
		} catch (e) {
			console.log(JSON.stringify(e, null, 2))
			return res.status(e.code || 500).json({ message: e.message || 'server error' })
		}
	},
	async deleteClientByCPF(req, res) {
		try {
			let { cpf } = req.body
			const filter = { cpf }
			let client = await User.findOneAndDelete(filter)
			if (!client)
				return res
					.status(404)
					.json({message: 'Usuário não existe'})

			return res.json({ message: 'Deletado!' })
		} catch (e) {
			console.log(JSON.stringify(e,null,2));
      return res
          .status(e.code || 500)
          .json({message: e.message || 'server error'});
    }
	},
}
