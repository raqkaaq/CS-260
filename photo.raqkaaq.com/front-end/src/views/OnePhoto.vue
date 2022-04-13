<template>
  <div>
    <section class="one-photo">
      <div class="image">
        <img :src="photo.path" />
        <div class="photoInfo">
          <p class="photoTitle">{{ photo.title }}</p>
          <p class="photoName">
            {{ photoUser.firstName }} {{ photoUser.lastName }}
          </p>
        </div>
        <p class="photoDate">{{ formatDate(photo.created) }}</p>
        <comment-gallery :comments="comments" />
        <div v-if="show">
            <add-comment/>
        </div>
        <div v-else>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import moment from "moment";
import axios from "axios";
import CommentGallery from "../components/CommentGallery.vue";
import AddComment from "../components/AddComment.vue";
export default {
  components: { CommentGallery, AddComment },
  name: "OnePhoto",
  data() {
    return {
      photoUser: "",
      photo: "",
      comments: [],
      show: false,
    };
  },
  created() {
    this.getPhoto();
    this.getComments();
    this.checkUser();
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), "days") < 15)
        return moment(date).fromNow();
      else return moment(date).format("d MMMM YYYY");
    },
    async getPhoto() {
      try {
        let response = await axios.get("/api/photos/" + this.$route.params.id);
        this.photo = response.data;
        let responseUser = await axios.get("/api/users/" + this.photo.user);
        this.photoUser = responseUser.data;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    async getComments() {
      try {
        let response = await axios.get(
          "/api/comments/" + this.$route.params.id
        );
        this.comments = response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    checkUser(){
        console.log(this.$root.$data.user == null)
        this.show = !(this.$root.$data.user == null);
    }
  },
};
</script>
<style scoped>
.photoInfo {
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
}

.photoInfo p {
  margin: 0px;
}

.photoDate {
  font-size: 0.7em;
  font-weight: normal;
}

p {
  margin: 0px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.one-photo {
  column-gap: 1em;
}

.image {
  margin: 0 0 1.5em;
  display: block;
  width: 100%;
}

.image img {
  width: 100%;
  margin-top: 20%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .one-photo {
    column-count: 1;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .one-photo {
    column-count: 1;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .one-photo {
    column-count: 1;
  }
}
</style>