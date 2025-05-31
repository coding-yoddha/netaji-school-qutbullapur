import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    eventId: {
        type: String,
        required: [true, 'Event ID is required'],
        unique: true,
        trim: true,
        maxlength: [100, 'Event ID cannot be more than 100 characters']
    },
    title: {
        type: String,
        required: [true, 'Event title is required'],
        trim: true,
        maxlength: [200, 'Title cannot be more than 200 characters']
    },
    date: {
        type: String,
        trim: true,
        maxlength: [50, 'Date cannot be more than 50 characters']
    },
    description: {
        type: String,
        trim: true,
        maxlength: [2000, 'Description cannot be more than 2000 characters']
    },
    color: {
        type: String,
        trim: true,
        maxlength: [100, 'Color string cannot be more than 100 characters']
    },
    order: {
        type: Number,
        required: [true, 'Order is required'],
        unique: true,
    },
    showInEventPage: {
        type: Boolean,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String,
    }
}, {
    timestamps: true
});

const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);
export default Event;
