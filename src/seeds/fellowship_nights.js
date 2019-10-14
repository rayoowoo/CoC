import { models } from "mongoose";
import "core-js/stable";
import "regenerator-runtime/runtime";

export const createFellowshipNights = async () => {
    const fellowshipNight1 = new models.Story({
        date: "February 13, 2019",
        topic: "Spiritual Eating and Drinking",
        url: "https://www.youtube.com/watch?v=RWJ1gDpS4mc"
    })

    const fellowshipNight2 = new models.Story({
        date: "March 13, 2019",
        topic: "The Lord's Table and the Lord's Supper",
        url: "https://www.youtube.com/watch?v=pqWRcAQDxFs"
    })

    await fellowshipNight1.save();
    await fellowshipNight2.save();
}