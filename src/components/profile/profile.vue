<template>
    <div id="profilePage">
        <div class="box">

            <b-card header="Edit Profile" header-tag="header" v-if="!fetchingData">

                <b-form @submit="onSaveProfile">
                    <b-form-group id="input-group-email" label="Email address" label-for="input-email">
                        <b-form-input id="input-email" v-model="form.email" type="email" required
                            placeholder="Enter email" disabled>
                        </b-form-input>
                    </b-form-group>

                    <!-- User Name -->
                    <b-form-group id="input-group-user-name" label="User Name" label-for="input-user-name">
                        <b-form-input id="input-user-name" v-model="form.userName" required
                            placeholder="Enter user name" maxlength="50">
                        </b-form-input>
                    </b-form-group>

                    <!-- Name -->
                    <b-form-group id="input-group-name" label="Full Name" label-for="input-name">
                        <b-form-input id="input-name" v-model="form.name" required placeholder="Enter Full Name"
                            maxlength="50">
                        </b-form-input>
                    </b-form-group>

                    <!-- Location -->
                    <b-form-group id="input-group-location" label="Location" label-for="input-location">
                        <b-form-input id="input-location" v-model="form.location" required
                            placeholder="Enter location like Chicago, IL" maxlength="50">
                        </b-form-input>
                    </b-form-group>


                    <br />
                    <div style="text-align: center;">
                        <b-button type="submit" variant="outline-primary">Save</b-button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b-button type="button" @click="onCancel" variant="outline-danger">Cancel</b-button>
                    </div>
                </b-form>


            </b-card>

            <div v-else style="text-align: center; padding-top: 30vh;">
                <b-spinner style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
            </div>

        </div>



    </div>
</template>

<script>
    import profileComponent from "./profileComponent";
    export default profileComponent;
</script>


<style lang="scss" src="./profile.scss"></style>