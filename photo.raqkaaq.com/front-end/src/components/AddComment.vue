<template>
    <div>
        <form @submit.prevent="addComment">
          <p>Add a comment:</p>
          <fieldset>
          <textarea v-model="new_comment" placeholder="Description" />
          </fieldset>
          <button type="submit">Add Comment</button>
        </form>
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddComment",
  data() {
    return {
      new_comment: "",
    };
  },
  methods: {
    async addComment() {
      try {
        await axios.post("/api/comments/" + this.$route.params.id, {photo: this.$route.params.id, description: this.new_comment});
        this.new_comment = "";
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  },
};
</script>