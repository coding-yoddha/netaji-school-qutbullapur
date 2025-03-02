import mongoose from 'mongoose';

const AchievementSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    description: {
        type: String,
        trim: true,
        maxlength: [1000, 'Description cannot be more than 1000 characters']
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    achievementDate: {
        type: Date,
    },
    category: {
        type: String,
        default: 'Other'
    },
    level: {
        type: String,
        default: 'School'
    },
    recognitionBody: {
        type: String,
        trim: true
    },
    awardDetails: {
        name: String,
        position: String,
        prize: String
    },
    isActive: {
        tyoe: Boolean,
    },
}, {
    timestamps: true
});

// Virtual for formatted achievement date
AchievementSchema.virtual('formattedDate').get(function () {
    return this.achievementDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
});

// Index for efficient querying
AchievementSchema.index({ category: 1, level: 1, achievementDate: -1, featured: 1 });

export default mongoose.models.Achievement || mongoose.model('Achievement', AchievementSchema);
