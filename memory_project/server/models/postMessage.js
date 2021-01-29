import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// converting postSchema it to model
const PostMessage = mongoose.model('PostMessage', postSchema);

// we are exporting a mongoose model from PostMessage file.
// On that model later on we will be able to run command such as FIND,CREATE,DELETE,UPDATE(CRUD).
export default PostMessage;