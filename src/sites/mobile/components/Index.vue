<template>
  <div class="index">
    <div class="index-header">
      <div class="info">
        <h1>RRVUI</h1>
        <p>轻量级移动端 Vue 组件库</p>
      </div>
    </div>
    <div class="index-components">
      <ol v-for="(_nav, index) in nav" :key="index">
        <li>{{ _nav.name }}</li>
        <ul>
          <template v-for="_package in _nav.packages" :key="_package">
            <li v-if="_package.show">
              <router-link :to="_package.name.toLowerCase()"
                >{{ _package.name }}&nbsp;&nbsp;{{
                  _package.cName
                }}</router-link
              >
            </li>
          </template>
        </ul>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { nav } from '@/config.json';
export default defineComponent({
  name: 'doc',
  setup() {
    return reactive({
      nav
    });
  }
});
</script>
<style lang="scss" scoped>
.index {
  height: 100%;
  width: 100%;
  padding-top: 50px;

  &-header {
    display: flex;
    align-items: center;
    padding: 0 34px;
    height: 117px;

    .info {
      display: flex;
      flex-direction: column;

      h1 {
        height: 48px;
        line-height: 48px;
        font-size: 34px;
        color: rgba(51, 51, 51, 1);
      }

      p {
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        color: rgba(154, 155, 157, 1);
      }
    }
  }

  &-components {
    background: #f7f8fa;
    border-radius: 30px 30px 0 0;
    overflow: hidden;

    > ol {
      margin: 24px;
      margin-bottom: 17px;
      padding: 0;

      > li {
        line-height: 20px;
        font-size: 14px;
        color: rgba(144, 156, 164, 1);
        margin-bottom: 10px;
      }

      > ul {
        padding: 0;
        margin: 0;

        li {
          display: flex;
          align-items: center;
          padding: 0 24px;
          height: 45px;
          line-height: 45px;
          background: rgba(255, 255, 255, 1);
          border-radius: 22px;
          box-shadow: 0 1px 4px 0 rgba(102, 102, 102, 0.06);
          margin-bottom: 13px;

          a {
            width: 100%;
            height: 100%;
            font-size: 15px;
            font-weight: bold;
            display: block;
            color: rgba(51, 51, 51, 1);
          }
        }
      }
    }
  }
}
</style>
