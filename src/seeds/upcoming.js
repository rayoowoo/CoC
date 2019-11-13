import { models } from "mongoose";
import "core-js/stable";
import "regenerator-runtime/runtime";

export const createUpcoming = async () => {
    const upcoming1 = new models.Upcoming({
        date: "January 13, 2019",
        description: "Come enjoy dinner, fellowship with other believers, and a helpful speaking from what we have been studying in the Bible studies!",
        url: "https://drive.google.com/file/d/1BIZmn7erE1TSfsu_a6OzwjH50kTXNslJ/view?usp=sharing",
        urgent: true
    })

    const upcoming2 = new models.Upcoming({
        date: "November 13, 2019",
        description: "The Lord's Table and the Lord's Supper",
        url: "https://drive.google.com/file/d/1LuuL3d56XksUhIyyuNktM8e68Kf0soqk/view?usp=sharing",
        urgent: false
    })

    await upcoming1.save();
    await upcoming2.save();
}