<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'app'
});
</script>

<style lang="scss">
::selection {
  background: #808080;
  color: #fff;
}

#doc {
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 32px;
}
</style>
