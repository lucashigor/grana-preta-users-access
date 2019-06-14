import { Router } from 'express'
import UserController from './controllers/UsersController'
import DefaultController from './controllers/DefaultController'
import FinancialPositionController from './controllers/FinancialPositionController'

const routes = Router()

routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

routes.get('/', DefaultController.index)

routes.get('/financialposition', FinancialPositionController.index)
routes.get('/financialposition/:id', FinancialPositionController.show)
routes.post('/financialposition', FinancialPositionController.store)
routes.put('/financialposition/:id', FinancialPositionController.update)
routes.delete('/financialposition/:id', FinancialPositionController.destroy)



export default routes
