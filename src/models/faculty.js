import mongoose from 'mongoose';

const FacultySchema = new mongoose.Schema({
    personalInfo: {
        firstName: {
            type: String,
            required: [true, 'First name is required'],
            trim: true,
            maxlength: [50, 'First name cannot be more than 50 characters']
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required'],
            trim: true,
            maxlength: [50, 'Last name cannot be more than 50 characters']
        },
        dateOfBirth: {
            type: Date,
            required: [true, 'Date of birth is required']
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            required: [true, 'Gender is required']
        },
        description: {
            type: String,
            trim: true
        }
    },
    employeeId: {
        type: String,
        required: [true, "employee Id id required"],
        unique: true,
        trim: true
    },
    showInAbout: {
        type: Boolean,
        required: true
    },
    showInFacultyPage: {
        type: Boolean,
        required: true
    },
    showInContactPage: {
        type: Boolean
    },
    contactInfo: {
        email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
        },
        phone: {
            type: String,
            trim: true
        },
        address: {
            street: String,
            city: String,
            state: String,
            zipCode: String,
            country: String
        }
    },
    employmentDetails: {
        department: {
            type: String,
            trim: true
        },
        dateOfJoining: {
            type: Date,
        }
    },
    academicInfo: {
        highestDegree: {
            type: String,
            required: [true, 'Highest degree is required'],
            trim: true
        },
        specialization: {
            type: String,
            trim: true
        },
        yearsOfExperience: {
            type: Number,
        }
    },
    courses: [{
        type: String,
    }],
    publications: [{
        title: String,
        journal: String,
        year: Number,
        url: String
    }],
    awards: [{
        name: String,
        year: Number,
        description: String
    }],
    profilePicture: {
        data: Buffer,
        contentType: String,
    },
    position: {
        type: String,
        required: [true, 'Position is required'],
        trim: true
    },
    order: {
        type: Number,
        required: [true, 'Position is required'],
        trim: true
    },
}, {
    timestamps: true
});

// Virtual for faculty's full name
FacultySchema.virtual('fullName').get(function () {
    return `${this.personalInfo.firstName} ${this.personalInfo.lastName}`;
});

// Virtual for faculty's URL
FacultySchema.virtual('url').get(function () {
    return `/faculty/${this._id}`;
});

export default mongoose.models.Faculty || mongoose.model('Faculty', FacultySchema);
