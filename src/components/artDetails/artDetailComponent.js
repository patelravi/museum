const axios = require("axios");
//import commentServices from "../../services/comment"
const baseUrl = "https://museum-backend.herokuapp.com/";
// const baseUrl = 'http://localhost:7071/'
import {
  ValidationObserver,
  ValidationProvider
} from "vee-validate";
let artService = require("../../services/art")
artService.updateImageMetadata();

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
        title: "ymutnbrv",
        painting: "rtbyb",
        descrption: 'rbynbg'
      },
      editForm: {
        title: "",
        painting: "",
        descrption: ""
      },

      imgUrl: null,

      editMode: false,
      updatingImage: false
    };
  },

  methods: {
    async DescriptionItem() {
      this.form.title = ''
      this.form.painting = ''
      this.form.descrption = ''
    },

    edit() {
      this.editMode = true;
      this.editForm.title = this.form.title;
      this.editForm.painting = this.form.painting;
      this.editForm.descrption = this.form.descrption;
    },

    async updateImage() {
      this.updatingImage = true;

      // const params = {
      //   title: this.editForm.title,
      //   painting: this.editForm.painting,
      //   descrption: this.editForm.descrption
      // }

      this.form.title = this.editForm.title;
      this.form.painting = this.editForm.painting;
      this.form.descrption = this.editForm.descrption;

      // artService.updateImageMetadata(params).then((result) => {
      //   if (result.data.success) {
      //     // disable edit mode after saving the data
      //     // this.editMode = false;
      //   }
      // }).catch((error) => {
      //   console.error(error);
      // })
      this.editMode = false;
    },

    cancel() {
      // reset form
      this.resetForm();
      // disable edit mode
      this.editMode = false;
    },


    //reset
    resetForm() {
      this.editForm.title = '';
      this.editForm.painting = '';
      this.editForm.descrption = '';
    }
  },



  async created() {
    let imgId = this.$route.params.id;

    // If its static image, show static image
    if (!isNaN(imgId) && parseInt(imgId) > 0 && parseInt(imgId) <= 20) {
      // Return static asset
      this.imgUrl = require("./../../assets/art_images/" + imgId + ".png");
      return;
    }

    // //Read fetch image remotely

    let url = baseUrl + "public/image/" + imgId;
    let response = await axios.get(url);
    this.imgUrl = response.data.data;
    console.log("image response", this.imgUrl);

  },

}