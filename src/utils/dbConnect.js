import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const connection = async() => {
    if (mongoose.connection.readyState >= 1) {
        return
    }
    return mongoose.connect(
        process.env.DATABASE_URL || "mongodb+srv://myshop:myshop@cluster0.qx8i4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
}



export default connection