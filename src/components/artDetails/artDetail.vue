<template>
  <div id="artDetailPage">

    <!-- Show Loader -->
    <div class="pageLoader" v-if="fetchingArtMetadata">
      <b-spinner label="Loading..."></b-spinner>
    </div>

    <div v-else>

      <!-- Title Section -->
      <div class="d-sm-none">
        <div class=" row pageHeader">
          <div>
            <img class="logoImg"
              src="https://instagram.fbom2-1.fna.fbcdn.net/vp/20f886aa7cb7d8ed5194807bebc9bc3a/5DC227E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net">
          </div>

          <!-- User name -->
          <div class="titleName">
            {{userInfo.userName?userInfo.userName: userInfo.email}}
          </div>

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
      </div>


      <!-- Image Container Box -->
      <div class="row box">

        <!-- Left side image -->

        <div class="col-md-7 imageBox" v-bind:style="{'background': 'url(' + imgUrl + ')'}">
        </div>

        <!-- Right side image description -->
        <div class="col-md-5 rightSide">

          <!-- HEader Section -->
          <div class="d-none d-md-block">
            <div class=" row pageHeader">

              <!-- User name -->
              <div class="titleName">
                {{userInfo.userName?userInfo.userName: userInfo.email}}
              </div>

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
          </div>

          <div class="imageMetadata">

            <!-- Display Image Metadata -->
            <div class="readOnlyMetadata" v-if="!editMode">

              <div class="title">Title</div>
              <div class="content">{{form.title}}</div>

              <div class="title">Painting</div>
              <div class="content">{{form.painting}}</div>

              <div class="title">Description</div>
              <div class="content">{{form.description}}</div>

            </div>

            <!-- Edit Form -->
            <div class="editform" v-else>
              <ValidationObserver ref="observer">
                <b-form slot-scope="{ validate }" @submit.prevent="validate().then(updateImage)">

                  <!-- // title input -->
                  <ValidationProvider rules="required" name="title">
                    <b-form-group id=" input-group-1" slot-scope="{ valid, errors }" small label="Title"
                      label-for="input-1">
                      <b-form-input class="form-control form-control-sm" id="input-1" v-model="editForm.title"
                        :state="errors[0] ? false : (valid ? true : null)" placeholder="Enter title"></b-form-input>
                      <b-form-invalid-feedback id="inputLiveFeedback">
                        {{ errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>

                  </ValidationProvider>

                  <!-- // painting input -->
                  <ValidationProvider rules="required" name="painting">
                    <b-form-group id="input-group-2" slot-scope="{ valid, errors }" small label="Painting"
                      label-for="input-2">
                      <b-form-input class="form-control form-control-sm" id="input-2" v-model="editForm.painting"
                        :state="errors[0] ? false : (valid ? true : null)" required placeholder="Enter painting">
                      </b-form-input>
                      <b-form-invalid-feedback id="inputLiveFeedback">
                        {{ errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </ValidationProvider>

                  <!-- // description -->
                  <ValidationProvider rules="required" name="description">
                    <b-form-group id="input-group-3" slot-scope="{ valid, errors }" small label="Descrption"
                      label-for="input-3">
                      <b-form-textarea id="textarea" v-model="editForm.description"
                        :state="errors[0] ? false : (valid ? true : null)" placeholder="Enter description..." rows="3"
                        max-rows="3"></b-form-textarea>
                      <b-form-invalid-feedback id="inputLiveFeedback">
                        {{ errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </ValidationProvider>

                  <!-- // save  and cancle-->
                  <b-button type="submit" size="sm" class="btn btn-success" color="green" v-if="editMode">Save
                  </b-button>
                  &nbsp;
                  <b-button type="reset" size="sm" @click="cancelEdit()" class="btn btn-danger" color="primary"
                    v-if="editMode">cancel</b-button>

                </b-form>
              </ValidationObserver>
            </div>

          </div>

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