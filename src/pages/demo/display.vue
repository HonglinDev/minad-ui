<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-07 17:08:29
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-07 17:08:31
 * @FilePath: \minad-ui\src\pages\demo\display.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->

<template>
  <view class="min-h-screen bg-gray-100 p-4 pb-safe">
    <md-card title="Tag 标签" class="mb-4">
      <view class="flex gap-2">
        <md-tag type="primary">
          标签
        </md-tag>
        <md-tag type="success">
          标签
        </md-tag>
        <md-tag type="warning">
          标签
        </md-tag>
        <md-tag type="danger">
          标签
        </md-tag>
      </view>
    </md-card>
  </view>
</template>

<script lang="ts" setup>
definePage({
  style: {
    navigationBarTitleText: '数据展示',
  },
})
// 数据展示组件演示逻辑
</script>
