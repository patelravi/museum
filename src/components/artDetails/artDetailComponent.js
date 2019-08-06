import {
  ValidationObserver,
  ValidationProvider
} from "vee-validate";
let artService = require("../../services/art")

export default {
  $_veeValidate: {
    validator: 'new',
  },
  name: "artDetail",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      form: {
        title: "",
        painting: "",
        description: ""
      },
      editForm: {
        title: "",
        painting: "",
        description: ""
      },
      imgUrl: null,
      artId: null,
      editMode: false,

      // loader variables
      updatingImageMetdata: false,
      fetchingArt: true,
      fetchingArtMetadata: true
    };
  },

  methods: {
    async DescriptionItem() {
      this.form.title = ''
      this.form.painting = ''
      this.form.description = ''
    },
    showEditForm() {
      this.editMode = true;
      this.editForm.title = this.form.title;
      this.editForm.painting = this.form.painting;
      this.editForm.description = this.form.description;
    },
    async updateImage() {
      this.updatingImageMetdata = true;

      const params = {
        title: this.editForm.title,
        painting: this.editForm.painting,
        description: this.editForm.description
      }

      artService.updateImageMetadata(this.artId, params).then((result) => {
        if (result.data.success) {
          this.fetchArtMetadata();
          // disable edit mode when done saving art metadata
          this.editMode = false;
        }
        this.updatingImageMetdata = false;
      }).catch((error) => {
        console.error(error);
        this.updatingImageMetdata = false;
      })
    },
    cancelEdit() {
      // reset form
      this.resetForm();
      // disable edit mode
      this.editMode = false;
    },
    //reset
    resetForm() {
      this.editForm.title = '';
      this.editForm.painting = '';
      this.editForm.description = '';
    },

    /********************Start: GET Image & Image Metdata *********/

    async fetchArtImage() {

      // If its static image, show static image
      if (!isNaN(this.artId) && parseInt(this.artId) > 0 && parseInt(this.artId) <= 20) {
        // Return static asset
        this.imgUrl = require("./../../assets/art_images/" + this.artId + ".png");
        return;
      }

      this.fetchingArt = true;
      //Read image remotely
      try {
        let result = await artService.fetchArt(this.artId);
        this.imgUrl = result.data.data;
        this.fetchingArt = false;
      } catch (e) {
        this.fetchingArt = false;
        console.error(e);
      }
    },

    async fetchArtMetadata() {
      this.fetchingArtMetadata = true;
      try {
        // Read art metadata
        let result = await artService.fetchImageMetadata(this.artId);
        if (result.data.success) {
          this.form.title = result.data.data.title;
          this.form.painting = result.data.data.painting;
          this.form.description = result.data.data.description;
        }
        this.fetchingArtMetadata = false;
      } catch (e) {
        this.fetchingArtMetadata = false;
        console.error(e);
      }
    }

    /********************End: GET Image & Image Metdata *********/
  },

  async created() {
    this.artId = this.$route.params.id;
    this.fetchArtImage();
    this.fetchArtMetadata();
  },

}