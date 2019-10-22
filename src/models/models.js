import mongoose from 'mongoose';

import Story from './story';
import FellowshipNight from './fellowship_night';
import Picture from './picture';

const connectDb = () => {
    const url = process.env.DATABASE_URL || "mongodb://localhost:27017/coc";
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
};

const models = {Story, FellowshipNight, Picture};

export { connectDb };
export default models;