import { timingSafeEqual } from "crypto";

const axios = require('axios');
const baseUrl = 'https://museum-backend.herokuapp.com/'

export default {
    name: "artList",
    data() {
        return {
            emailId: null,
            imageList: []
        };
    },
    methods: {

        getArtAssetUrl(imgId) {
            return require('./../../assets/art_images/' + imgId + '.png');
        },

        onArtClick(imgObj) {
            // If its static image, show static image
            let intId = imgObj.id;
            if (!isNaN(intId) && intId >= 0 && intId <= 20) {
                this.$router.push({ name: 'ArtDetail', params: { id: (imgObj.id + 1) } });
            } else {
                this.$router.push({ name: 'ArtDetail', params: { id: imgObj.id } });
            }
        },

        async fetchImages() {

            if (this.emailId) {
                let url = baseUrl + 'public/images?email=' + this.emailId;
                let response = await axios.get(url);
                this.imageList = response.data.images;
                console.log('image list', this.imageList);
            } else {

                for (var i = 0; i < 19; i++) {
                    this.imageList.push({
                        id: i,
                        url: require('./../../assets/art_images/' + (i + 1) + '.png')
                    })
                }
                console.log('image list =>', this.imageList);

            }
        }

    },

    created() {

        this.emailId = this.$route.query.email;
        this.fetchImages()
    }
};