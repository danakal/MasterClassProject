<template>
  <div>
    <div v-if="thread" class="col-large push-top">
      <h1>{{ thread.title }}</h1>

      <post-list :posts="threadPosts" />

      <div class="col-full">
        <form @submit.prevent="addPost">
          <div class="form-group">
            <!-- bez v-model
            <textarea :value="newPostText" @input="newPostText = $event.target.value" name="" id="" cols="30" rows="10" class="rorm-input"></textarea> -->
            <textarea
              v-model="newPostText"
              name=""
              id=""
              cols="30"
              rows="10"
              class="rorm-input"
            ></textarea>
          </div>
          <div class="form-actions">
            <button class="btn-blue">Submit post</button>
          </div>
        </form>
      </div>
    </div>

    <div v-else class="col-full text-center">
      <h1>This thread does not exist</h1>
      <router-link :to="{ name: 'Home' }"> Read some cool threads </router-link>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import PostList from "@/components/PostList.vue";

export default {
  name: "ThreadShow",
  components: {
    PostList,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      newPostText: "",
    };
  },
  computed: {
    thread() {
      return this.threads.find((thread) => thread.id === this.id); //also available as this.$route.params.id bez použití props;
    },
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id);
    },
  },
  methods: {
    addPost() {
      const postId = "jjj" + Math.random(); //never do this like that
      const post = {
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: "u4r8XCziZEWEXsj2UIKNHBoDh0n2",
      };
      this.posts.push(post);
      this.thread.posts.push(postId);
      this.newPostText = "";
    },
  },
};
</script>
