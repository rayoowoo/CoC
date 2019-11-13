import { models } from "mongoose";
import "core-js/stable";
import "regenerator-runtime/runtime";

export const createUpcoming = async () => {
    const upcoming1 = new models.Upcoming({
        title: "Fellowship Night",
        date: "January 13, 2019",
        description: "Come enjoy dinner, fellowship with other believers, and a helpful speaking from what we have been studying in the Bible studies!",
        url: "1BIZmn7erE1TSfsu_a6OzwjH50kTXNslJ",
        urgent: true
    })

    const upcoming2 = new models.Upcoming({
        title: "Bible Study",
        date: "November 13, 2019",
        description: `Get plugged into a Bible study group and dive into the word of God. This school year we will be studying Matthew. We start August 28!\n\n
        Campanile Esplanade | Tuesday 2 - 3pm\nContact Kevin at(###) ### - ####\n\n
        Eshleman Hall | Wednesday 1 - 2pm\nContact Grace at (###) ###-####\n\n
        Dana St. & Haste St. | Thursday 8 - 9pm\nContact Alex at (###) ###-####`,
        url: "1LuuL3d56XksUhIyyuNktM8e68Kf0soqk",
        urgent: false
    })

    await upcoming1.save();
    await upcoming2.save();
}