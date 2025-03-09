import mongoose from 'mongoose';

const HighlightSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Highlight title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Highlight description is required'],
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  image:{
    data: Buffer,
    contentType: String,
  },
  category: {
    type: String,
  },
  order: {
    type: Number,
    default: 0
  },
  link: {
    type: String,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  showInAbout: {
    type: Boolean
  },
  showInMain: {
    type: Boolean
  }
}, {
  timestamps: true
});

const Highlight = mongoose.models.Highlight || mongoose.model('Highlight', HighlightSchema);

export default Highlight;
