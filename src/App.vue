<template>
  <NewTab :bookmarksList="bookmarksList" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import NewTab from "./components/NewTab.vue";
import {
  getBookmarksTree,
  getBookmarksList,
  getLimitedBookmarksList,
} from "./book";

export default defineComponent({
  name: "App",
  components: {
    NewTab,
  },
  setup: () => {
    const bookmarksList = ref([]);
    onMounted(async () => {
      const bookmarksTree = await getBookmarksTree();
      bookmarksList.value = getLimitedBookmarksList(
        getBookmarksList(bookmarksTree[0])
      );
    });
    return { bookmarksList };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
