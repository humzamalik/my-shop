import isAdmin from "middlewares/isAdmin"
import Product from "models/product"
import dbConnection from 'utils/dbConnect'

const controller = async(req, res) => {
    const { method } = req
    await dbConnection()
    switch (method) {

        case 'POST':
            const { title, description, price, images, category, isAllowed, countInStock } = req.body
            try {
                await Product.create({
                    title,
                    description,
                    price,
                    images,
                    category,
                    isAllowed,
                    countInStock
                })
                return res.status(200).json({
                    status: true,
                    message: `${title} added`
                })
            } catch (error) {
                return res.status(500).json({
                    status: false,
                    error
                })
            }
        case 'GET':
            try {
                const products = await Product.find()
                return res.status(200).json({
                    status: true,
                    products
                })
            } catch (error) {
                return res.status(500).json({
                    status: false,
                    error
                })
            }
        case 'DELETE':
            const { id } = req.body
            if (!id) {
                return res.status(200).json({
                    status: false,
                    message: 'Product id required to delete a product'
                })
            }
            try {
                const product = await Product.findByIdAndDelete(id)
                return res.status(200).json({
                    status: true,
                    message: `${product.title} deleted`
                })
            } catch (error) {
                return res.status(500).json({
                    status: false,
                    error
                })
            }
        default:
            return res.status(405).json({
                status: false,
                method: `${method} method not defined`
            })
    }
}

export default isAdmin(controller, ['POST', 'PATCH', 'DELETE'])