import bcrypt from "bcrypt"
import User from 'models/user'
import dbConnection from 'utils/dbConnect'
import checkAuth from "middlewares/chechAuth"

const controller = async(req, res) => {
    const { method } = req
    const { userData: { id } } = req
    await dbConnection()

    switch (method) {
        case "PATCH":
            try {
                const { body } = req
                if (body) {
                    const user = await User.findById(id)
                    const { password: defPassword, address: defAddress } = user
                    let { password = false, address = defAddress } = req.body
                    if (password) {
                        const hash = await bcrypt.hash(password, 10)
                        password = hash
                    } else {
                        password = defPassword
                    }
                    await User.updateOne({ _id: id }, {
                        $set: {
                            address,
                            password
                        }
                    })
                    return res.status(200).json({
                        status: true,
                        message: "Updated"
                    })
                } else {
                    return res.status(500).json({
                        status: false,
                        message: "Payload required"
                    })
                }
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

export default checkAuth(controller)