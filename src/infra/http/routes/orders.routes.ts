import { adaptMiddleware } from '@/core/infra/adapters/express-middleware-adapter'
import { Router } from 'express'
import { adaptRoute } from '@/core/infra/adapters/express-route-adapter'
import { makeCreateOrdersController } from '../factories/controllers/orders/makeCreateOrderController'

export const orders = Router()

orders.post('/new', adaptRoute(makeCreateOrdersController()))
