import User from 'models/user'
import dbConnection from 'utils/dbConnect'

const controller = async(req, res) => {
    const { query: {id}, method } = req
    await dbConnection()
    switch(method) {
        case 'GET':
            try{
                const user = await User.findById(id)
                if(user){
                    if(user.isVerified){
                        return res.status(200).json({
                            status: false,
                            message: 'Profile already verified'
                        })
                    } else {
                        await User.updateOne({_id: id}, {
                            $set: {
                                isVerified: true
                            }
                        })
                        return res.status(200).json({
                            status: true,
                            message: "Profile verified"
                        })
                    }
                } else {
                    return res.status(404).json({
                        status: false,
                        message: "No user found"
                    })
                }
            } catch(error) {
                return res.status(500).json({
                    status: false,
                    error
                })
            }
            break
        default:
            return res.status(405).json({
                status: false,
                method: `${method} not defined`
            })
    }
}

export default controller