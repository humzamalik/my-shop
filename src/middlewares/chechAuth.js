import jwt from "jsonwebtoken"
import User from 'models/user'

const checkAuth = (controller) => {
    return async(req, res) => {
        try {
            const { authorization } = req.headers;
            const decoded = jwt.verify(authorization, process.env.SECRET_KEY)
            const { id } = decoded
            const user = await User.findById(id)
            const { isVerified } = user
            if (!isVerified) {
                return res.status(401).json({
                    status: false,
                    message: "Profile not verified"
                })
            }
            req.userData = decoded
            controller(req, res)
        } catch (e) {
            return res.status(401).json({
                status: false,
                message: "auth failed"
            })
        }

    }
}

export default checkAuth;