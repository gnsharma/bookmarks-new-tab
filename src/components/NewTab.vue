<template>
  <div class="parent">
    <BookmarkCard
      v-for="bookmark in bookmarksList"
      :bookmarkUrl="bookmark.url"
      :key="bookmark.url"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BookmarkCard from "./BookmarkCard.vue";
export default defineComponent({
  name: "NewTab",
  components: {
    BookmarkCard,
  },
  props: {
    bookmarksList: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 80px;
  grid-row-gap: 80px;
  padding: 40px;
  background-color: #eeeeee;
}
</style>
