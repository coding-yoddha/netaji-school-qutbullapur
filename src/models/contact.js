import mongoose from 'mongoose';

const ContactDetailsSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    emails: [{
        type: {
            type: String,
        },
        email: {
            type: String,
        }
    }],
    phoneNumbers: [{
        type: {
            type: String,
        },
        number: {
            type: String,
        },
        isPrimary: {
            type: Boolean,
            default: false
        }
    }],
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
        },
        googleMapLink: {
            type: String,
        },
        coordinates: {
            lat: {
                type: String,
            },
            lon: {
                type: String,
            }
        }
    },
    socialMedia: [{
        name: {
            type: String,
        },
        link: {
            type: String,
        },
        description: {
            type: String
        }
    }],
    preferredContactMethod: {
        type: String,
        enum: ['Email', 'Phone', 'Mail'],
        default: 'Email'
    },
    notes: {
        type: String,
        trim: true,
        maxlength: [500, 'Notes cannot be more than 500 characters']
    }
}, {
    timestamps: true
});

// Virtual for formatted address
ContactDetailsSchema.virtual('formattedAddress').get(function () {
    return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zipCode}, ${this.address.country}`;
});

// Method to get primary phone number
ContactDetailsSchema.methods.getPrimaryPhoneNumber = function () {
    const primaryPhone = this.phoneNumbers.find(phone => phone.isPrimary);
    return primaryPhone ? primaryPhone.number : (this.phoneNumbers[0] ? this.phoneNumbers[0].number : null);
};

const Contact = mongoose.models.ContactDetails || mongoose.model('ContactDetails', ContactDetailsSchema);
export default Contact;
