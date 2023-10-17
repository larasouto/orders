import { Router } from 'express'
import { orders } from './orders.routes'

export const router = Router()

router.use('/orders', orders)
