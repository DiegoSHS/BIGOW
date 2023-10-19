import { connex } from "@/models/connector";
import { ObjectId } from "mongodb";

/**
 * Get products from a MongoDB collection.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - Return a JSON response with products API or error.
 */
export default async function getProducts(req, res) {
  const collection = connex("bigo", "products");
  const data = await collection.find({}).toArray();
  const { query, method } = req;

  switch (method) {
    case "GET":
      if (query.id) {
        /**
         * Get a product by its _id.
         *
         * @param {string} query.id - The _id of the product.
         * @returns {Promise<void>} - Returns a JSON response with the product or error.
         */

        const id = query.id;
        const item = data.find((item) => item._id.toString() === id);

        if (!item) {
          return res.status(404).json({ error: "Product not found!" });
        }

        res.status(200).json(item);
      } else {
        const filter = query.filter || {};
        const filterData = data.filter((item) => {
          for (const key in filter) {
            if (filter[key] !== item[key]) {
              return false;
            }
          }
          return true;
        });

        if (filterData.length === 0) {
          return res.status(404).json({ error: "No products match the criteria." });
        }

        res.status(200).json(filterData);
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} not allowed`);
  }
}
