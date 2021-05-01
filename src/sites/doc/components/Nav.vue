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
      console.log('123' + nav);
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
    top: 120px;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: $white;
    width: 290px;
    border-right: 1px solid #eee;
    overflow: auto;
    padding-left: 35px;

    ol {
      li {
        height: 48px;
        line-height: 48px;
        font-size: 14px;
        font-weight: bold;
        position: relative;

        &.active {
          &::before {
            position: absolute;
            content: '';
            left: 0;
            top: 50%;
            width: 22px;
            margin-top: -5px;
            height: 10px;
            transform: rotate(90deg);
            background: url(https://img10.360buyimg.com/imagetools/jfs/t1/136135/19/14659/946/5fa20aa8E33a9aa26/d329fbe669171208.png)
              no-repeat;
            background-size: 100% 100%;
          }
        }
      }

      > ul {
        li {
          padding-left: 29px;
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
