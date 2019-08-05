<template>
  <div id="artDetailPage">

    <!-- Image Container Box -->
    <div class="row box">

      <!-- Left side image -->

      <div class="col-md-7 imageBox" v-bind:style="{'background': 'url(' + imgUrl + ')'}">

      </div>

      <!-- Right side image descrption -->
      <div class="col-md-5 rightSide">

        <!-- Title Section -->
        <div class="row title">

          <div>
            <img class="logoImg" src="https://instagram.fbom2-1.fna.fbcdn.net/vp/20f886aa7cb7d8ed5194807bebc9bc3a/5DC227E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net">
          </div>

          <div class="titleName">natgeo</div>

          <div class="settingsIcon">
            <font-awesome-icon icon="ellipsis-h" />
          </div>
        </div>

        <!-- Description List -->

        <div class="DescriptionItem">

          <template>
            <div>
              <div class="editbtn" v-if="!editMode">
                <div class="edit">
                  <b-button size="sm" @click="edit()">Edit</b-button>
                </div>
                <br>
                Title: {{form.title}}
                <br>
                Painting:{{form.painting}}
                <br>
                Description:{{form.descrption}}
              </div>

              <div class="editform" v-if="editMode">
                <template>
                  <ValidationObserver ref="observer">
                    <b-form slot-scope="{ validate }" @submit.prevent="validate().then(updateImage)">

                      <!-- // title input -->
                      <ValidationProvider rules="required" name="title">
                        <b-form-group id=" input-group-1" slot-scope="{ valid, errors }" small label="Title" label-for="input-1">
                          <b-form-input class="form-control form-control-sm" id="input-1" v-model="editForm.title" :state="errors[0] ? false : (valid ? true : null)" placeholder="Enter title"></b-form-input>
                          <b-form-invalid-feedback id="inputLiveFeedback">
                            {{ errors[0] }}
                          </b-form-invalid-feedback>
                        </b-form-group>

                      </ValidationProvider>

                      <!-- // painting input -->
                      <ValidationProvider rules="required" name="painting">
                        <b-form-group id="input-group-2" slot-scope="{ valid, errors }" small label="Painting" label-for="input-2">
                          <b-form-input class="form-control form-control-sm" id="input-1" v-model="editForm.painting" :state="errors[0] ? false : (valid ? true : null)" required placeholder="Enter painting"></b-form-input>
                          <b-form-invalid-feedback id="inputLiveFeedback">
                            {{ errors[0] }}
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </ValidationProvider>

                      <!-- // descrption -->
                      <ValidationProvider rules="required" name="descrption">
                        <b-form-group id="input-group-2" slot-scope="{ valid, errors }" small label="Descrption" label-for="input-2">
                          <b-form-textarea id="textarea" v-model="editForm.descrption" :state="errors[0] ? false : (valid ? true : null)" placeholder="Enter descrption..." rows="3" max-rows="6"></b-form-textarea>
                          <b-form-invalid-feedback id="inputLiveFeedback">
                            {{ errors[0] }}
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </ValidationProvider>

                      <!-- // save  and cancle-->
                      <b-button type="submit" class="btn btn-success" color="green" v-if="editMode">Save</b-button>
                      &nbsp;
                      <b-button type="reset" @click="cancel()" class="btn btn-danger" color="primary" v-if="editMode">cancel</b-button>

                    </b-form>
                  </ValidationObserver>
                </template>
              </div>

            </div>
          </template>

        </div>

        <!-- Like/Comment/Share Section -->
        <!-- <div class="engageSection">
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
        </div> -->

        <!-- Add comment section -->
        <!-- <div class="addCommentSection">
          <input type="text" v-model="comment" placeholder="Add a comment..." />
          <b-button class="postBtn" variant="link" @click="addCommment()">POST</b-button>
        </div> -->

      </div>
    </div>

  </div>
</template>

<script>
import artDetailComponent from "./artDetailComponent";
export default artDetailComponent;
</script>


<style lang="scss" src="./artDetail.scss"></style>