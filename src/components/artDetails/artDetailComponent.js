export default {
    name: "artDetail",
    data() {
        return {
            commentList: [
                {
                    userName: "natgeo",
                    comment: "Morales @hannahreyesmorales | A gray day out at sea was lit up by this spear fisherman. I've met some remarkable small-scale fisherfolk out here in the islands of the Philippines. For our archipelago, located in the center of the world's marine biodiversity, fishing is a way of life for many coastal communities. They know the language of the sea, they help scientists identify species of fish, they understand weather patterns intimately by looking out into the horizon. They are also among the first to witness the devastation happening in our oceans. Follow me @hannahreyesmorales for more stories from the #Philippines, and beyond. #Surigao #fishing",
                    when: '18h',
                    img: '1.png',
                    likes: 20,
                    replies: 2
                },
                {
                    userName: "thepeassa",
                    comment: "Zombie! DANGER",
                    when: '1h',
                    img: '4.png',
                    likes: 2,
                    replies: 2
                },
                {
                    userName: "stephenwilkes",
                    comment: "This is a gorgeous photo, capturing amazing light and a magical moment. Are people taking photos necessarily oblivious to beauty around them? As a photographer, I’m sure you know that’s not the case.",
                    when: '8h',
                    img: '5.png',
                    likes: 25,
                    replies: 2
                },
                {
                    userName: "gwenmgal",
                    comment: "“Somewhere, something incredible is waiting to be known.” - Carl Sagan. An luckily photos like these, capture those fleeting moments.",
                    when: '1h',
                    img: '7.png',
                    likes: 200,
                    replies: 2
                },
                {
                    userName: "javanoted",
                    comment: "Terrific shot! It's the simple moments like this that should be captured :)",
                    when: '15h',
                    img: '8.png',
                    likes: 300,
                    replies: 24
                },
                {
                    userName: "ekiraga",
                    comment: "I always enjoy your beautiful imagery",
                    when: '23h',
                    img: '15.png',
                    likes: 54,
                    replies: 2
                }
            ]

        };
    },
    methods: {
        getArtAssetUrl() {
            console.log('returnign url =>', this.$route.query.url)
            return this.$route.query.url;
        }
    }
};