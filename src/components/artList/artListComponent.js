export default {
    name: "artList",
    data() {
        return {
        };
    },
    methods: {
        getArtAssetUrl(imgId) {
            return require('./../../assets/art_images/' + imgId + '.png');
        }
    }
};