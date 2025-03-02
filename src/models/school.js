import mongoose from 'mongoose';

const SchoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'School name is required'],
        trim: true,
        maxlength: [100, 'School name cannot be more than 100 characters']
    },
    about: {
        type: String,
    },
    description: {
        type: String,
    },
    logo: {
        data: Buffer,
        contentType: String,
    },
    address: {
        street: {
            type: String,
            required: [true, 'Street address is required'],
            trim: true
        },
        city: {
            type: String,
            required: [true, 'City is required'],
            trim: true
        },
        state: {
            type: String,
            required: [true, 'State is required'],
            trim: true
        },
        zipCode: {
            type: String,
            required: [true, 'Zip code is required'],
            trim: true
        },
        country: {
            type: String,
            required: [true, 'Country is required'],
            trim: true
        }
    },
    contactInfo: {
        phone: {
            type: [String],
            trim: true
        },
        email: {
            type: [String],
            trim: true,
            lowercase: true,
        },
        website: {
            type: String,
            trim: true
        }
    },
    type: {
        type: String,
        required: [true, 'School type is required'],
    },
    foundedYear: {
        type: Number,
    },
    principal: {
        name: {
            type: String,
            required: [true, 'Principal name is required'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Principal email is required'],
            trim: true,
            lowercase: true,
            match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
        }
    },
}, {
    timestamps: true
});

// Virtual for school's URL
SchoolSchema.virtual('url').get(function () {
    return `/schools/${this._id}`;
});

export default mongoose.models.School || mongoose.model('School', SchoolSchema);

