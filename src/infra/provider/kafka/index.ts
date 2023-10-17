import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  brokers: ['engaging-manatee-12003-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'ZW5nYWdpbmctbWFuYXRlZS0xMjAwMyTRC_e3_VpkwzfJVPjwVjevweHdRSe-UnI',
    password: 'NTJjZWNkMjMtYTc0Ni00YmY4LWE5M2MtNDc4NjJjZTcwYTgw',
  },
  ssl: true,
})

export { kafka }
