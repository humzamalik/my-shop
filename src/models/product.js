import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    images: { type: Array },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    isAllowed: { type: Boolean, default: true },
    countInStock: { type: Number, required: true }
}, { timestamps: true })

export default mongoose.models.Product || mongoose.model('Product', productSchema)