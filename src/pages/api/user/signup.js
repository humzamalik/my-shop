import bcrypt from "bcrypt"
import User from 'models/user'
import dbConnection from 'utils/dbConnect'

const controller = async(req, res) => {
    await dbConnection()
    const { method } = req

    switch (method) {
        case 'POST':
            const { firstname, lastname, email, username, password, address } = req.body
            const user = {
                firstname,
                lastname,
                email,
                username,
                password,
                address
            }
            if (Object.values(user).includes(undefined)) {
                return res.status(200).json({
                    status: false,
                    message: 'Invalid payload'
                })
            }
            const result = await User.findOne({ username, email })
            if (result) {
                res.status(409).json({
                    status: false,
                    message: "Username taken. please try another one"
                })
            } else {
                try {
                    const hash = await bcrypt.hash(password, 10)
                    user['password'] = hash
                    const createdUser = await User.create(user)
                    res.status(200).json({
                        status: true,
                        message: "User Created",
                        verificationURL: `http://localhost:3000/api/user/verify/${createdUser._id}`
                    })
                } catch (error) {
                    res.status(500).json({
                        status: false,
                        error
                    })
                }
            }
            break;
        default:
            res.status(405).json({
                status: false,
                message: `${method} method not defined`
            })
    }
}

export default controller