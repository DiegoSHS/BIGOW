import { connex } from "@/models/connector"

export default async function handler(req, res) {
  const collection = connex('bigo','products')
  const result = await collection.find({}).toArray()
  console.log(result)
  res.status(200).json(result)
}
