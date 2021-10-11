import bcrypt from "bcrypt"
import User from 'models/user'
import db_connection from 'utils/dbConnect'
import generateToken from "utils/generateToken"

const controller = async(req, res) => {
    await db_connection()
    const { method } = req

    switch (method) {
        case 'POST':
            const { email, password } = req.body
            const result = await User.findOne({ email })
            if (result && email != undefined && password != undefined) {
                const isValidPass = await bcrypt.compare(password, result.password)
                if (!result.isVerified) {
                    return res.status(500).json({
                        status: false,
                        message: 'Profile not verified',
                    })
                } else if (isValidPass) {
                    return res.status(200).json({
                        status: true,
                        message: 'Auth Successful',
                        token: generateToken(result)
                    })
                }
            }
            return res.status(500).json({
                status: false,
                message: "auth failed"
            })
        default:
            return res.status(405).json({
                status: false,
                method: `${method} not defined`
            })
    }
}

export default controller