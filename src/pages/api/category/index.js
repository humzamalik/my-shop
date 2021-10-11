import isAdmin from "middlewares/isAdmin"
import Category from "models/category"
import dbConnection from 'utils/dbConnect'

const controller = async(req, res) => {
    const { method } = req
    await dbConnection()
    switch (method) {
        case 'POST':
            const { name, description } = req.body
            if (!name || !description) {
                return res.status(200).json({
                    status: false,
                    message: 'Invalid payload'
                })
            }
            try {
                await Category.create({
                    name,
                    description
                })
                return res.status(200).json({
                    status: true,
                    message: `${name} added`
                })
            } catch (error) {
                return res.status(500).json({
                    status: false,
                    error
                })
            }
        case 'GET':
            try {
                const categories = await Category.find()
                return res.status(200).json({
                    status: true,
                    categories
                })
            } catch (error) {
                return res.status(500).json({
                    status: false,
                    error
                })
            }
        case 'PATCH':
            const { name, description } = req.body
            if (!description || !name) {
                return res.status(200).json({
                    status: false,
                    message: 'Invalid payload'
                })
            }
            try {
                await Category.updateOne({ name }, {
                    $set: {
                        description
                    }
                })
                return res.status(200).json({
                    status: true,
                    message: `${name} updated`
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
                    message: 'Category id required to delete a category'
                })
            }
            try {
                const category = await Category.findByIdAndDelete(id)
                return res.status(200).json({
                    status: true,
                    message: `${category.name} deleted`
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