import { PrismaEditionsRepository } from '@/application/editions/repositories/prisma/PrismaEditionsRepository'
import { PrismaOrdersRepository } from '@/application/orders/repositories/prisma/PrismaOrdersRepository'
import { CreateOrder } from '@/application/orders/use-cases/order-item/order-item'
import { CreateOrderController } from '@/application/orders/use-cases/order-item/order-item.controller'
import { Controller } from '@/core/infra/controller'
import { ValidatorCompositor } from '@/infra/validation/ValidatorCompositor'

export function makeCreateOrdersController(): Controller {
  const prismaOrdersRepository = new PrismaOrdersRepository()
  const prismaEditionsRepository = new PrismaEditionsRepository()
  const useCaseCreateOrder = new CreateOrder(
    prismaOrdersRepository,
    prismaEditionsRepository,
  )

  const validator = new ValidatorCompositor([])

  return new CreateOrderController(validator, useCaseCreateOrder)
}
