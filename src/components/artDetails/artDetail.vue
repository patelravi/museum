<template>
    <div id="artDetailPage">

        <!-- Image Container Box -->
        <div class="row box">

            <!-- Left side image -->
            <div class="col-md-7 imageBox" v-bind:style="{'background': 'url(' + getArtAssetUrl() + ')'}">
                
            </div>

            <!-- Right side image descrption -->
            <div class="col-md-5 rightSide">

                <!-- Title Section -->
                <div class="row title">

                    <div>
                        <img class="logoImg"
                            src="https://instagram.fbom2-1.fna.fbcdn.net/vp/20f886aa7cb7d8ed5194807bebc9bc3a/5DC227E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net">
                    </div>

                    <div class="titleName">natgeo</div>

                    <div class="settingsIcon">
                        <font-awesome-icon icon="ellipsis-h" />
                    </div>
                </div>


                <!-- Comment List -->
                <div class="commentListSection">
                    <div class="row commentItem" v-for="comment in commentList">
                        <div class="col-md-1 col-1">
                            <img class="userImg" :src="getArtAssetUrl()">
                        </div>
                        <div class="col-md-11 col-11 commentContent">
                            <span class="name">{{comment.userName}}</span>
                            <div class="comment">
                                {{comment.comment}}
                            </div>
                            <div class="commentEngagement">
                                {{comment.when}}
                                &nbsp;&nbsp;
                                {{comment.likes}} Likes
                                &nbsp;&nbsp;
                                Reply
                            </div>
                        </div>


                    </div>
                </div>


                <!-- Like/Comment/Share Section -->
                <div class="engageSection">
                    <span class="icon">
                        <font-awesome-icon icon="heart" /></span>
                    <span class="icon">
                        <font-awesome-icon icon="comments" /></span>
                    <span class="icon">
                        <font-awesome-icon icon="share" />
                    </span>

                    <div class="icon rightSide">
                        <font-awesome-icon icon="bookmark" />
                    </div>
                </div>

                <!-- Add comment section -->
                <div class="addCommentSection">
                    <input type="text" placeholder="Add a comment..." />
                    <b-button class="postBtn" variant="link">POST</b-button>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import artDetailComponent from "./artDetailComponent";
    export default artDetailComponent;
</script>


<style lang="scss" src="./artDetail.scss"></style>