<template>
  <div class="doc-nav">
    <ol v-for="(_nav, index) in nav" :key="index">
      <li>{{ _nav.name }}</li>
      <ul>
        <template v-for="_package in _nav.packages" :key="_package">
          <li v-if="_package.show">
            <router-link :to="_package.name.toLowerCase()">
              {{ _package.name }}&nbsp;&nbsp;
              <b>{{ _package.cName }}</b>
            </router-link>
          </li>
        </template>
      </ul>
    </ol>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
import { nav } from '@/config.json';
export default defineComponent({
  name: 'doc-nav',
  setup() {
    onMounted(() => {
      console.log('123' + JSON.stringify(nav));
    });
    return {
      nav: reactive(nav)
    };
  }
});
</script>

<style lang="scss">
.doc {
  &-nav {
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: $white;
    width: 180px;
    border-right: 1px solid #eee;
    overflow: auto;
    // padding-left: 10px;

    ol {
      margin: 16px;

      li {
        height: 32px;
        font-size: 14px;
        font-weight: bold;
        position: relative;
      }

      > ul {
        margin-left: 12px;

        li {
          cursor: pointer;

          a {
            &:link,
            &:visited {
              color: $title-color;
            }

            height: 100%;

            b {
              font-weight: normal;
              font-size: 12px;
            }
          }
        }
      }

      &.introduce {
        padding-left: 5px;

        li {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
