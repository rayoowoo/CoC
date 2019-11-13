// TODO:
// Create a upcoming model. 
// In the fetch API endpoint for upcoming, only provide upcoming instances that are occuring between NOW and 1 month from now, or URGENT.

import mongoose from 'mongoose';

const upcomingSchema = new mongoose.Schema({
    description: {
        type: String
    },
    date: {
        type: Date
    },
    url: {
        type: String
    },
    urgent: {
        type: Boolean
    }
})

const Upcoming = mongoose.model('Upcoming', upcomingSchema);

export default Upcoming;