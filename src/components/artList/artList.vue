<template>
    <div id="artListPage">
        <!-- Show Loader -->
        <div class="pageLoader" v-if="fetchArtList">
            <b-spinner label="Loading..."></b-spinner>
        </div>
        <!-- Profile Section -->
        <div class="profileContainer" v-if="userInfo">
            <div class="editBtn">
                <b-button variant="outline-secondary" size="sm" @click="onEditProfile()">Edit Profile</b-button>
            </div>
            <div class="userName">
                <span v-if="userInfo.userName">{{userInfo.userName}}</span>
                <span v-else>{{userInfo.email}}</span>
            </div>
            <div class="activities">
                <span> 12 posts</span>
                <span> 176 followers</span>
                <span> 180 following</span>
            </div>
            <div class="fullName">
                <span v-if="userInfo.fullName">{{userInfo.fullName}}</span>
                <div class="location" v-if="userInfo.userLocation">
                    {{userInfo.userLocation}}
                </div>
            </div>
            <!-- <div class="about">
                  Experience the world through the eyes of National Geographic photographers.
              </div> -->
        </div>
        <!-- Art List -->
        <div class="row artListContainer" v-if="!fetchingImageList">
            <div class="col-md-4 col-sm-4 col-6 column" v-for="img in imageList" :key="img.id">
                <div class="artContainer" @click="onArtClick(img)"
                    v-bind:style="{'background': 'url(' + img.url + ')'}">
                    <!-- <img :src="img.url"> -->
                    <div class="artInfo">
                        <font-awesome-icon icon="heart" /> 100k
                        &nbsp;&nbsp;&nbsp;
                        <font-awesome-icon icon="comments" /> 440
                    </div>
                </div>
            </div>
        </div>
        <!-- Load More button -->
        <div class="loadMorebtn" v-if="!fetchingImageList && showLoadMore">
            <b-button variant="outline-secondary" @click="fetchImages()">Show more image</b-button>
            <!-- <b-spinner label="Loading..."></b-spinner> -->
        </div>
    </div>
</template>
<script>
    import artListComponent from "./artListComponent";
    export default artListComponent;
</script>
<style lang="scss" src="./artList.scss"></style>