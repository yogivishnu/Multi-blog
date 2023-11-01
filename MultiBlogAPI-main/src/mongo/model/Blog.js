import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
});
// blogSchema.index({ title: 'text', content: 'text' });

const Blog = mongoose.model('Blog', blogSchema);

Blog.createIndexes({ title: 'text', content: 'text' });


export default Blog;
