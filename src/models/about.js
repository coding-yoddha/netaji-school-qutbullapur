import mongoose from 'mongoose';

const AboutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'About title is required'],
        trim: true,
        maxlength: [200, 'Title cannot be more than 200 characters']
    },
    description: {
        type: String,
        required: [true, 'About description is required'],
        trim: true,
        maxlength: [2000, 'Description cannot be more than 2000 characters']
    },
    keypoints: [{
        title: {
            type: String,
            required: [true, 'Keypoint title is required'],
            trim: true,
            maxlength: [100, 'Keypoint title cannot be more than 100 characters']
        },
        description: {
            type: String,
            required: [true, 'Keypoint description is required'],
            trim: true,
            maxlength: [500, 'Keypoint description cannot be more than 500 characters']
        },
        author: {
            type: String,
            trim: true,
            maxlength: [100, 'Author name cannot be more than 100 characters']
        },
        image: {
            data: Buffer,
            contentType: String,
        },
        order: {
            type: Number,
            unique: true,
        }
    }],
    image: {
        data: Buffer,
        contentType: String,
    },
    videoUrl: {
        type: String,
        trim: true
    },
    tags: [{
        type: String,
        trim: true
    }],
    relatedLinks: [{
        title: String,
        url: String
    }]
}, {
    timestamps: true
});

// Virtual for keypoint count
AboutSchema.virtual('keypointCount').get(function () {
    return this.keypoints.length;
});

// Index for efficient querying
AboutSchema.index({ status: 1, order: 1 });

const About = mongoose.models.About || mongoose.model('About', AboutSchema);
export default About;
