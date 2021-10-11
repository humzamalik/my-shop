import mongoose from "mongoose"

const categorySchema = mongoose.Schema({
    name: { type: String, required: true, unique: true},
    description: { type: String, required: true}
}, { timestamps: true })

export default mongoose.models.Category || mongoose.model('Category', categorySchema)