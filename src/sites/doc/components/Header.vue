<template>
  <div class="doc-header"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'doc-header'
});
</script>

<style lang="scss">
.doc {
  &-header {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    min-width: 1300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 64px;
    line-height: 32px;
    text-align: left;
    padding: 0 50px;
    font-size: 20px;
  }
}
</style>
