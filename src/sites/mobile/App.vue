<template>
  <div v-if="title != '/'" id="nav">
    <div class="back" @click="goBack">
      <span name="left">&lt;</span>
    </div>
    {{ title }}
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'app',
  setup() {
    const title = ref('RRVUI');
    // 获取当前路由
    const route = useRoute();
    const router = useRouter();

    const goBack = () => {
      router.back();
    };

    // 当当前路由发生变化时，调用回调函数
    watch(
      () => route,
      () => {
        title.value = route.name as string;
      },
      {
        immediate: true,
        deep: true
      }
    );

    return { title, goBack };
  }
});
</script>

<style lang="scss">
#app {
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  #nav {
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    height: 57px;
    line-height: 57px;
    text-align: center;
    background: $white;
    font-weight: bold;
    font-size: 20px;
    color: rgba(51, 51, 51, 1);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.07);

    .back {
      position: absolute;
      left: 0;
      height: 100%;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  .demo {
    height: 100%;
    background: #f7f8fa;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 57px 17px 0 17px;

    > h2 {
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 14px;
      color: rgba(144, 156, 164, 1);
      padding: 0 10px;
      font-weight: normal;
    }

    &.full {
      padding: 57px 0 0 0;

      h2 {
        padding-left: 17px;
      }
    }

    &.bg-w {
      background: #fff;
    }

    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }

    > p {
      font-size: 12px;
    }

    .card {
      padding: 25px 18px;
      background: rgba(255, 255, 255, 1);
    }
  }
}
</style>
