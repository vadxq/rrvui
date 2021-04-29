<template>
  <div class="demo full">
    <h2>基础布局</h2>
    <div class="box-item">
      <rrv-row>
        <rrv-col :span="24">
          <div class="flex-content">span:24</div>
        </rrv-col>
      </rrv-row>
      <rrv-row>
        <rrv-col :span="12">
          <div class="flex-content">span:12</div>
        </rrv-col>
        <rrv-col :span="12">
          <div class="flex-content flex-content-light">span:12</div>
        </rrv-col>
      </rrv-row>
      <rrv-row>
        <rrv-col :span="8">
          <div class="flex-content">span:8</div>
        </rrv-col>
        <rrv-col :span="8">
          <div class="flex-content flex-content-light">span:8</div>
        </rrv-col>
        <rrv-col :span="8">
          <div class="flex-content">span:8</div>
        </rrv-col>
      </rrv-row>
      <rrv-row>
        <rrv-col :span="6">
          <div class="flex-content">span:6</div>
        </rrv-col>
        <rrv-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </rrv-col>
        <rrv-col :span="6">
          <div class="flex-content">span:6</div>
        </rrv-col>
        <rrv-col :span="6">
          <div class="flex-content">span:6</div>
        </rrv-col>
      </rrv-row>
    </div>
    <h2>分栏间隔</h2>
    <div class="box-item">
      <rrv-row :gutter="10">
        <rrv-col :span="8">
          <div class="flex-content">span:8</div>
        </rrv-col>
        <rrv-col :span="8">
          <div class="flex-content flex-content-light">span:8</div>
        </rrv-col>
        <rrv-col :span="8">
          <div class="flex-content">span:8</div>
        </rrv-col>
      </rrv-row>
    </div>
    <h2>Flex布局</h2>
    <div class="box-item">
      <rrv-row type="flex" wrap="nowrap">
        <rrv-col :span="6">
          <div class="flex-content">span:6</div>
        </rrv-col>
        <rrv-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </rrv-col>
        <rrv-col :span="6">
          <div class="flex-content">span:6</div>
        </rrv-col>
      </rrv-row>
      <rrv-row type="flex" justify="center">
        <rrv-col :span="6">
          <div class="flex-content">span:6</div>
        </rrv-col>
        <rrv-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </rrv-col>
        <rrv-col :span="6">
          <div class="flex-content">span:6</div>
        </rrv-col>
      </rrv-row>
      <rrv-row type="flex" justify="end">
        <rrv-col :span="6">
          <div class="flex-content">span:6</div>
        </rrv-col>
        <rrv-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </rrv-col>
        <rrv-col :span="6">
          <div class="flex-content">span:6</div>
        </rrv-col>
      </rrv-row>
      <rrv-row type="flex" justify="space-between">
        <rrv-col :span="6">
          <div class="flex-content">span:6</div>
        </rrv-col>
        <rrv-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </rrv-col>
        <rrv-col :span="6">
          <div class="flex-content">span:6</div>
        </rrv-col>
      </rrv-row>
      <rrv-row type="flex" justify="space-around">
        <rrv-col :span="6">
          <div class="flex-content">span:6</div>
        </rrv-col>
        <rrv-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </rrv-col>
        <rrv-col :span="6">
          <div class="flex-content">span:6</div>
        </rrv-col>
      </rrv-row>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('layout');
import Row from '@/packages/row/index.vue';
import Col from '@/packages/col/index.vue';
export default createDemo({
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  }
});
</script>

<style lang="scss" scoped>
.box-item {
  background: #fff;
  margin-bottom: 20px;
  padding: 20px 0;
}
.demo .rrv-row {
  overflow: hidden;
  &:not(:last-child) .rrv-col {
    margin-bottom: 15px;
  }
}
.flex-content {
  line-height: 40px;
  color: $title-color;
  text-align: center;
  border-radius: 6px;
  background: $primary-color;
  &.flex-content-light {
    background: $primary-color-end;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
