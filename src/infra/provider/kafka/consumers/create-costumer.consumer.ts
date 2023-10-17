import { prismaClient } from '@/infra/prisma/client'
import { v4 as uuid } from 'uuid'
import { kafkaConsumer } from '../kafka.consumer'

export async function createCostumerConsumer() {
  console.log('Create Costumer Consumer')
  const consumer = await kafkaConsumer('COSTUMER_CREATED')
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value?.toString()
      const customer = JSON.parse(messageToString ?? '')

      if (customer) {
        await prismaClient.costumer.create({
          data: {
            id: uuid(),
            externalId: customer.externalId,
            email: customer.email,
          },
        })
      }
    },
  })
}

createCostumerConsumer()
