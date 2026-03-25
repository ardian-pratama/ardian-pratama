import { MongoClient, ServerApiVersion } from 'mongodb'

export const client = new MongoClient(process.env.DATABASE_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

export async function createDatabaseClient() {
  try {
    await client.connect()
    await client.db('admin').command({ ping: 1 })

    return client.db('ardian-pratama')
  } catch (error) {
    console.log(error.message)
  }
}
