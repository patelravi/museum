<template>
  <div id="artDetailPage">

    <!-- Image Container Box -->
    <div class="row box">

      <!-- Left side image -->

      <div class="col-md-7 imageBox" v-bind:style="{'background': 'url(' + imgUrl + ')'}">

      </div>

      <!-- Right side image description -->
      <div class="col-md-5 rightSide">

        <!-- Title Section -->
        <div class="row title">

          <div>
            <img class="logoImg" src="https://instagram.fbom2-1.fna.fbcdn.net/vp/20f886aa7cb7d8ed5194807bebc9bc3a/5DC227E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net">
          </div>

          <!-- User name -->
          <div class="titleName">natgeo</div>

          <!-- Right side settings icon -->
          <div class="settingsIcon">
            <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
              <template slot="button-content">
                <font-awesome-icon icon="ellipsis-h" />
              </template>
              <b-dropdown-item @click="showEditForm">Edit</b-dropdown-item>
            </b-dropdown>

          </div>
        </div>

        <!-- Description List -->

        <div class="DescriptionItem">

          <template>

            <div class="editbtn" v-if="!editMode">
              <form class="display">
                <br>
                <b>Title</b>
                <br>{{form.title}}<br>
                <br>
                <b>Painting</b>
                <br>{{form.painting}}<br>
                <br>
                <b>Description</b>
                <br>{{form.description}}
              </form>
            </div>

            <div>

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
                          <b-form-input class="form-control form-control-sm" id="input-2" v-model="editForm.painting" :state="errors[0] ? false : (valid ? true : null)" required placeholder="Enter painting"></b-form-input>
                          <b-form-invalid-feedback id="inputLiveFeedback">
                            {{ errors[0] }}
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </ValidationProvider>

                      <!-- // description -->
                      <ValidationProvider rules="required" name="description">
                        <b-form-group id="input-group-3" slot-scope="{ valid, errors }" small label="Descrption" label-for="input-3">
                          <b-form-textarea id="textarea" v-model="editForm.description" :state="errors[0] ? false : (valid ? true : null)" placeholder="Enter description..." rows="3" max-rows="6"></b-form-textarea>
                          <b-form-invalid-feedback id="inputLiveFeedback">
                            {{ errors[0] }}
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </ValidationProvider>

                      <!-- // save  and cancle-->
                      <b-button type="submit" size="sm" class="btn btn-success" color="green" v-if="editMode">Save</b-button>
                      &nbsp;
                      <b-button type="reset" size="sm" @click="cancelEdit()" class="btn btn-danger" color="primary" v-if="editMode">cancel</b-button>

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