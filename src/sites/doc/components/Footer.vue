<template>
  <div class="doc-footer">
    <p class="doc-footer-desc">2021 vadxq.&nbsp;All Rights Reserved.</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'doc-footer'
});
</script>

<style lang="scss">
.doc {
  &-footer {
    padding: 30px 80px 20px;
    text-align: center;

    &-desc {
      font-size: 12px;
    }
  }
}
</style>
