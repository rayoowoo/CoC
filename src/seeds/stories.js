import { models } from "mongoose";
import "core-js/stable";
import "regenerator-runtime/runtime";

export const createStories = async () => {
    const story1 = new models.Story({
        author: "L.M.",
        content: `
                It’s been almost four years since the tow truck driver told me, “Young lady, you need to have a lot more faith in God.” It was a Sunday afternoon, and I was driving back to work from a weekend road trip when my car began to smoke and broke down. By the time AAA arrived a few hours later, anxiety had set in. This was the final episode in a downward spiral of events that led me to turn to God.
                Still worrying about how I was going to get home, I truly prayed for the first time in my life: “Lord I don’t know if you exist, but if you do, I need to talk to you.” At that moment, something inside of me burst open. The hardness and hopelessness began to melt away with the flow of tears – springs of living water quenching my thirst.
                I don’t know what I was expecting – a booming voice from heaven or perhaps nothing – but that day I learned that the Lord is so awesomely human. On the way home, the tow truck driver started talking about Jesus. For the first time I thought, “Oh yeah, what about Jesus?” I had gotten so used to seeing Him dead on the cross that I was blind to the fact that Jesus also resurrected, ascended, and is alive today ruling on the throne of God.
                Through His simple statements and questions, the words that the tow truck driver spoke struck and exposed me. When I told him that I had been going through a “questioning period” wondering whether God existed or not, He said bluntly, “You lost faith.” Next, when I told him that I wanted to believe in God with my whole heart but could not, He stated, “You either have faith or you do not. There is no in-between.”
                Finally, He asked me, “What did you do after leaving the Catholic Church?” I proudly told him that to avoid the hypocrisies of listening to the gospel without practicing it, I led community service projects. In response, He said, “How could you be so selfish?” Ouch. I was humbled to see that in the process of doing God’s work, I had completely forgotten about God.
                At the end when I was thanking the tow truck driver for all his words of wisdom, He boldly stated, “You still don’t get it, do you?” Somewhat bewildered, I listened as He spelled it out for me: “It was not me speaking. It was God speaking through me, to you.” That’s when it clicked. Earlier I had earnestly pleaded, “God, I need to talk to you.” He answered my prayer.
                As I got out of the truck, the last thing He said to me was, “You don’t have to worry about your car. It’s fine.” Still somewhat skeptical, I took the car into the shop. A few days later I received a call. “Ma’am we’ve checked everything, and there is nothing wrong with your car.” That’s when it hit me: it was not the car that needed towing—it was me. That day the Lord saved me by being towing me back to faith.`
    });

    await story1.save();
}