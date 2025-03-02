import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['Student', 'Parent', 'Alumni', 'Staff', 'Other']
    },
    name: {
        type: String,
        trim: true,
        maxlength: [100, 'Name cannot be more than 100 characters']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
    content: {
        type: String,
        required: [true, 'Review content is required'],
        trim: true,
        maxlength: [2000, 'Content cannot be more than 2000 characters']
    },
    rating: {
        type: Number
    },
    pros: {
        type: String,
        trim: true,
        maxlength: [500, 'Pros cannot be more than 500 characters']
    },
    cons: {
        type: String,
        trim: true,
        maxlength: [500, 'Cons cannot be more than 500 characters']
    },
    isAnonymous: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});


export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
