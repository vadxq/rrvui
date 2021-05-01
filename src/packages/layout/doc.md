# Layout 布局

### 介绍

用于快速进行布局

### 安装

``` javascript
import { createApp } from 'vue';
import { Layout } from 'rrvui';

const app = createApp();
app.use(Layout);
```

## 代码演示

### 基础用法

```html
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
```

### 设置元素间距

```html
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
```
### Flex布局

```html
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
```

## Prop

### row

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| type | 布局方式，可选值为flex | String | -
| gutter | 列元素之间的间距（单位为px） | String、Number | -
| justify | Flex 主轴对齐方式，可选值为 start end center space-around space-between | String | start
| align | Flex 交叉轴对齐方式，可选值为 flex-start center flex-end | String | flex-start
| flex-wrap | Flex是否换行，可选值为 nowrap wrap reverse | String | nowrap

### col

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| span | 列元素宽度（共分为24份，例如设置一行3个，那么span值为8） | String、Number | 24
| offset | 列元素偏移距离 | String、Number | 0
