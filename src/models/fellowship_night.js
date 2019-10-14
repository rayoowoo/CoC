import mongoose from 'mongoose';

const fellowshipNightSchema = new mongoose.Schema({
    date: {
        type: String
    },
    topic: {
        type: String
    },
    url: {
        type: String
    }
})

const FellowshipNight = mongoose.model('FellowshipNight', fellowshipNightSchema);

export default FellowshipNight;