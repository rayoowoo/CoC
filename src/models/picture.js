import mongoose from 'mongoose';

const pictureSchema = new mongoose.Schema({
    type: {
        type: String
    },
    url: {
        type: String
    }
})

const Picture = mongoose.model('Picture', pictureSchema);

export default Picture;