const express = require('express')
const {
	addClient,
	deleteClientByCPF,
	getClientByCPF,
	getClientByName,
	indexClients,
	updateClient,
} = require('./src/controllers/client-controller')

const routes = express.Router()

routes.get('/indexClients', indexClients)
routes.post('/getClientByName', getClientByName)
routes.post('/getClientByCPF', getClientByCPF)
routes.post('/addClient', addClient)
routes.put('/updateClient', updateClient)
routes.delete('/deleteClientByCPF', deleteClientByCPF)

module.exports = routes
