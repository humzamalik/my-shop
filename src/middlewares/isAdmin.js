import jwt from "jsonwebtoken"
import User from 'models/user'

const isAdmin = (controller, protectedMethods = ['POST', 'GET', 'Delete', 'PATCH']) => {
    return async(req, res) => {
        try {
            const { method } = req
            if (protectedMethods.includes(method)) {
                const { authorization } = req.headers;
                const decoded = jwt.verify(authorization, process.env.SECRET_KEY)
                const { id } = decoded
                const user = await User.findById(id)
                const { isVerified, role } = user
                if (!isVerified) {
                    return res.status(401).json({
                        status: false,
                        message: "Profile not verified"
                    })
                }
                if (role != 'admin') {
                    return res.status(401).json({
                        status: false,
                        message: "dont have admin rights"
                    })
                }
                req.userData = decoded
            }
            controller(req, res)
        } catch (e) {
            return res.status(401).json({
                status: false,
                message: "auth failed"
            })
        }
    }
}

export default isAdmin;