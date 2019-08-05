const axios = require('axios');
const baseUrl = 'https://museum-backend.herokuapp.com/'
// const baseUrl = 'http://localhost:7071/'

export default {
    name: "profile",
    data() {
        return {
            fetchingData: true,
            form: {
                name: null,
                userName: null,
                email: null,
                location: null
            }
        };
    },
    methods: {

        async onSaveProfile(evt) {
            evt.preventDefault();

            // Fetch details of user from email id
            let url = encodeURI(baseUrl + 'public/user');
            await axios.put(url, this.form);

            this.$bvToast.toast(`Profile updated successfully.`, {
                title: 'Success',
                autoHideDelay: 5000,
                variant: 'success',
                toaster: 'b-toaster-bottom-right'
            });

            this.$router.push({
                name: 'ArtList',
                query: {
                    email: this.form.email
                }
            });
        },

        onCancel() {
            // redirect to default list page
            this.$router.push({
                name: 'ArtList',
                query: {
                    email: this.form.email
                }
            });
        }

    },
    async mounted() {

        let emailId = this.$route.params.email;

        // Fetch details of user from email id
        let url = encodeURI(baseUrl + 'public/user/' + emailId);
        let response = await axios.get(url);
        response = response.data.data;
        this.fetchingData = false;

        if (response == null) {
            // no data found for given email id
            // redirect to default list page
            this.$router.push({
                name: 'ArtList'
            });
        } else {
            this.form.email = response.email;
            this.form.name = response.fullName;
            this.form.userName = response.userName;
            this.form.location = response.userLocation;
        }

    }
};