import { models } from "mongoose";
import "core-js/stable";
import "regenerator-runtime/runtime";

export const createBlogs = async () => {
    const blog1 = new models.Blog({
        title: "God's Savign Love",
        date: "October 26, 2019",
        author: "W.L.",
        url: "https://www.youtube.com/watch?v=RWJ1gDpS4mc",
        content: `The college conference was about God’s heart of love towards man. The two aspects we covered were Jesus as the good Samaritan with the highest morality and the saving love of the Triune God. These points were illustrated through parables— fictitious stories with spiritual significance. The first of the two Jesus told was to a lawyer about a man who had been robbed, beaten, and left half dead. A priest and a Levite, two kinds of people the lawyer would look up to, ignored the man, but a Samaritan came and not only bound and anointed the wounds but also brought the man to an inn. The world with all its attacks leaves people in the state the man was, but the Lord as a good Samaritan comes and cares for us with His healing love. And that makes Him happy!\n
        This is seen in the second parable of the conference in Luke 15 which is also about God’s saving love.The parable is three- fold and talks about the Son, Spirit, and Father.The Son came as a shepherd to find the one stray sheep from the flock, which is us.The Spirit as the sweeping woman seeks her lost coin, which is us again.Finally, the Father is portrayed as the father of the prodigal son, who is us again.I like how that the father, after having waited and watched for many days, happily welcomed his repenting son.He gave the best robe, a ring, sandals, and slaughtered the fattened calf all for the son.This is the exact same kind of love God has for us! Hallelujah!`
    })

    await blog1.save();
}