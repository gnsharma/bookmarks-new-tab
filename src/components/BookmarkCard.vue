<template>
    
<div class="flex" > 

  <a :href="previewData.url" >
    <img
      v-if="previewData.images && previewData.images.length > 0"
      :src="previewData.images[0]"
    />
    <div class="title">{{ previewData.title }}</div>
  </a>
      </div>

</template>

<script lang="ts">
import { ref, defineComponent, toRefs, watch, onMounted } from "vue";
import { getLinkPreview } from "link-preview-js";

export default defineComponent({
  name: "BookmarkCard",
  props: {
    bookmarkUrl: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    const { bookmarkUrl } = toRefs(props);
    const previewData = ref({});
    const updatePreviewData = async () => {
      previewData.value = await getLinkPreview(bookmarkUrl.value);
    };
    watch(bookmarkUrl, updatePreviewData);
    onMounted(updatePreviewData);
    const handleClick = () => {
      window.location.href = bookmarkUrl.value;
    };
    return { previewData, handleClick };
  },
});
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 5px 5px 5px 0px rgba(76, 81, 77, 0.18);
  background-color: white;
}
img {
  height: 180px;
  width: 180px;
}
</style>
