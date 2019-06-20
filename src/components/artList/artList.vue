<template>
    <div id="artListPage">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-6 column" v-for="imgId in 19" :key="imgId">
                <div class="artContainer" @click="onArtClick(imgId)">
                    <img :src="getArtAssetUrl(imgId)">
                    <div class="artInfo">
                        <font-awesome-icon icon="heart" /> 100k
                        &nbsp;&nbsp;&nbsp;
                        <font-awesome-icon icon="comments" /> 440
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import artListComponent from "./artListComponent";
    export default artListComponent;
</script>


<style lang="scss" src="./artList.scss"></style>