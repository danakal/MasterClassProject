<template>
  <div class="post-list">
    <div class="post" v-for="postId in thread.posts" :key="postId">
      <div class="user-info">
        <a href="#" class="user-name">
          {{ userById(postById(postId).userId).name }}
        </a>
        <a href="#">
          <img
            class="avatar-large"
            :src="userById(postById(postId).userId).avatar"
            alt="avatar"
          />
        </a>
        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>{{ postById(postId).text }}</p>
        </div>
      </div>

      <div class="post-date text-faded">
        {{ postById(postId).publishedAt }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId);
    },
    userById(userId) {
      return this.users.find((u) => u.id === userId);
    },
  },
};
</script>
