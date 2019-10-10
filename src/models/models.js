import mongoose from 'mongoose';

import Story from './story';

const connectDb = () => {
    const url = process.env.DATABASE_URL || "mongodb://localhost:27017/coc";
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
};

const models = {Story};

export { connectDb };
export default models;