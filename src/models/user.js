import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    username: { type: String, unique: true },
    password: {type: String},
    address: { type: String, required: true },
    role: { type: String, default: 'customer' },
    isVerified : { type: Boolean, default: false},
}, { timestamps: true })

export default mongoose.models.User || mongoose.model('User', userSchema)