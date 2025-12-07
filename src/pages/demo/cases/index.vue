<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-07 19:35:36
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-07 20:09:42
 * @FilePath: \minad-ui\src\pages\demo\cases\index.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<!-- 演示案例总览：提供四类演示的入口和说明 -->

<template>
  <view class="min-h-screen bg-gray-100 p-4 pb-safe">
    <md-card title="演示指南" class="mb-4">
      <view class="text-sm text-gray-700 leading-6">
        <text>本页汇总4类演示：基础功能、高级功能、集成场景、边界条件。</text>
        <text>点击下方任一项进入相应演示页面，按卡片中的操作指南进行交互。</text>
      </view>
    </md-card>

    <md-card title="演示分类" class="mb-4">
      <view class="grid grid-cols-2 gap-4">
        <view class="rounded bg-white p-4 active:bg-gray-50" @click="go('/pages/demo/cases/basic')">
          <view class="flex items-center justify-between">
            <text class="text-base font-medium">基础功能演示</text>
            <md-icon name="success" />
          </view>
          <text class="text-xs text-gray-500">组件默认用法与核心功能</text>
        </view>
        <view class="rounded bg-white p-4 active:bg-gray-50" @click="go('/pages/demo/cases/advanced')">
          <view class="flex items-center justify-between">
            <text class="text-base font-medium">高级功能演示</text>
            <md-icon name="setting" />
          </view>
          <text class="text-xs text-gray-500">进阶配置与动态交互</text>
        </view>
        <view class="rounded bg-white p-4 active:bg-gray-50" @click="go('/pages/demo/cases/integration')">
          <view class="flex items-center justify-between">
            <text class="text-base font-medium">集成场景演示</text>
            <md-icon name="menu" />
          </view>
          <text class="text-xs text-gray-500">组合使用与数据流处理</text>
        </view>
        <view class="rounded bg-white p-4 active:bg-gray-50" @click="go('/pages/demo/cases/edge')">
          <view class="flex items-center justify-between">
            <text class="text-base font-medium">边界条件演示</text>
            <md-icon name="warning" />
          </view>
          <text class="text-xs text-gray-500">异常与极端情况的容错表现</text>
        </view>
      </view>
    </md-card>
  </view>
</template>

<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '演示案例总览',
  },
})
function go(url: string) {
  uni.navigateTo({ url })
}
</script>

<style scoped></style>
