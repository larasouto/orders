import { EditionMapper } from '@/application/editions/mappers/edition.mapper'
import { prismaClient } from '@/infra/prisma/client'
import { kafkaConsumer } from '../kafka.consumer'
import { Edition } from '@/application/editions/domain/edition'
import { blue, green, red } from 'console-log-colors'

export async function createCostumerConsumer() {
  console.log('Create Product Consumer')
  const consumer = await kafkaConsumer('PRODUCT_CREATED')
  await consumer.run({
    eachMessage: async ({ message }) => {
      const product = JSON.parse(message.value?.toString() ?? '')
      console.log(green(product))

      try {
        await prismaClient.product.create({
          data: {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
          },
        })
      } catch (err) {
        console.log(red(err))
      }
    },
  })
}

createCostumerConsumer()
