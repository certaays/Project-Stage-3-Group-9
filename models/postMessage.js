import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: { type: String, required:  true },
    message: { type: String, required:  true },
    creator: { type: String},
    tags: { type: String, required:  true },
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;