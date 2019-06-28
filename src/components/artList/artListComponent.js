import { timingSafeEqual } from "crypto";

const axios = require('axios');
const baseUrl = 'https://museum-backend.herokuapp.com/';

export default {
    name: "artList",
    data() {
        return {
            emailId: null,
            imageList: [],
            fetchingImageList: false,
            userInfo: null

        };
    },
    methods: {

        onEditProfile() {
            this.$router.push({ name: 'Profile', params: { email: this.userInfo.email } });
        },

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

                // Fetch images 
                this.fetchingImageList = true;
                let url = baseUrl + 'public/images?email=' + this.emailId;
                axios.get(url).then((result) => {
                    this.imageList = result.data.images;
                    this.fetchingImageList = false;
                });


                // Fetch details of user from email id
                url = encodeURI(baseUrl + 'public/user/' + this.emailId);
                let response = await axios.get(url);
                response = response.data.data;
                // this.fetchingData = false;

                if (response == null) {
                    // no data found for given email id
                    // redirect to default list page
                    // this.$router.push({ name: 'ArtList' });
                    // this.$router.go()
                    location.href = '/'
                } else {
                    this.userInfo = response;
                }
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