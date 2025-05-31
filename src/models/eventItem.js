import mongoose from 'mongoose';

const EventItemSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.String,
        ref: 'Event',
        required: [true, 'Event ID reference is required'],
        trim: true,
        maxlength: [100, 'Event ID cannot be more than 100 characters']
    },
    eventItemId: {
        type: String,
        required: [true, 'Event item ID is required'],
        unique: true,
        trim: true,
        maxlength: [100, 'Event item ID cannot be more than 100 characters']
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
    title: {
        type: String,
        trim: true,
        maxlength: [200, 'Title cannot be more than 200 characters']
    },
    description: {
        type: String,
        trim: true,
        maxlength: [2000, 'Description cannot be more than 2000 characters']
    },
    image: {
        data: Buffer,
        contentType: String,
    }
}, {
    timestamps: true
});

const EventItem = mongoose.models.EventItem || mongoose.model('EventItem', EventItemSchema);
export default EventItem;
