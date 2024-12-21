import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    meta_description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    status: {
        type: String, enum: (['draft', 'published']),
        required: true
    }
}, {timestamps: true})
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
export default Blog;