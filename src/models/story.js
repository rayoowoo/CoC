import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
    author: {
        type: String
    },
    content: {
        type: String
    }
})

const Story = mongoose.model('Story', storySchema);

export default Story;