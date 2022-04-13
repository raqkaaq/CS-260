<template>
  <div>
      <br>
      <br>
      <h2> Comments: </h2>
    <section class="comment-gallery">
      <div class="comment" v-for="comment in comments" v-bind:key="comment._id">
        <div class="commentInfo">
          <p class="commentBody">{{ comment.description }}</p>
          <p class="commentName">
            ~{{ comment.user.firstName }} {{ comment.user.lastName }}
          </p>
        </div>
        <p class="commentDate">{{ formatDate(comment.created) }}</p>
      </div>
    </section>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "CommentGallery",
  props: {
    comments: Array,
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), "days") < 15)
        return moment(date).fromNow();
      else return moment(date).format("d MMMM YYYY");
    },
  },
};
</script>
<style scoped>
.commentInfo {
  display: flex;
  justify-content: none;
  font-size: 0.8em;
}

.commentInfo p {
  margin: 0px;
  width: 25%;
}

.commentDate {
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

.comment-gallery {
  column-gap: 1em;
}

.comment {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.commentName{
    margin-left: 25px;
}
/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .comment-gallery {
    column-count: 1;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .comment-gallery {
    column-count: 1;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .comment-gallery {
    column-count: 1;
  }
}
</style>