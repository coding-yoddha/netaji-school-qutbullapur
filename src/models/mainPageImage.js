import mongoose from 'mongoose';

const MainPageImageSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    thumbnailUrl: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    order: {
        type: Number,
        required: [true, 'Display order is required'],
        min: [1, 'Order must be at least 1'],
        default: 1
    },
    isActive: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        default: 'General'
    },
}, {
    timestamps: true
});

const MainPageImage = mongoose.models.MainPageImage || mongoose.model('MainPageImage', MainPageImageSchema);
export default MainPageImage;
