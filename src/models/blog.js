import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String
    }, 
    date: {
        type: Date
    },
    author: {
        type: String
    },
    url: {
        type: String
    },
    content: {
        type: String
    }
})

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;