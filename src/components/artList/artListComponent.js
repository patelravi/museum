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

        onArtClick(url) {
            this.$router.push({ name: 'ArtDetail', query: { url: url } });
        },

       async fetchImages(){
        
            if(this.emailId){
                let url = baseUrl + 'public/images?email=' + this.emailId;
                let  response = await axios.get(url);
                this.imageList = response.data.images;
                console.log('image list', this.imageList);
            }else{

                for(var i = 0; i < 19; i++){
                    this.imageList.push({
                        id: i,
                        url: require('./../../assets/art_images/' + (i+1) + '.png')
                    })
                }
                console.log('image list =>', this.imageList);
                
            }
        }

    },

    created(){
        
        this.emailId = this.$route.query.email;
        this.fetchImages()
    }
};