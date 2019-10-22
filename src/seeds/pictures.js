import { models } from "mongoose";
import "core-js/stable";
import "regenerator-runtime/runtime";

export const createPictures = async () => {
    const picture1 = new models.Picture({
        type: 'landing-splash',
        url: "https://static.wixstatic.com/media/bacfc7_d4ba929224a24a64b427ef91ee11dfd2~mv2_d_4496_3000_s_4_2.jpg/v1/fill/w_1838,h_800,al_c,q_85,usm_0.66_1.00_0.01/bacfc7_d4ba929224a24a64b427ef91ee11dfd2~mv2_d_4496_3000_s_4_2.webp"
    });

    await picture1.save();
}