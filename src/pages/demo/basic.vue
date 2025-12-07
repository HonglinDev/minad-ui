<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-07 17:07:48
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-07 17:34:44
 * @FilePath: \minad-ui\src\pages\demo\basic.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->

<template>
  <view class="min-h-screen bg-gray-100 p-4 pb-safe">
    <md-card title="Button 按钮" class="mb-4">
      <view class="flex flex-wrap gap-2">
        <md-button type="primary">
          主要按钮
        </md-button>
        <md-button type="success">
          成功按钮
        </md-button>
        <md-button type="warning">
          警告按钮
        </md-button>
        <md-button type="danger">
          危险按钮
        </md-button>
        <md-button plain>
          朴素按钮
        </md-button>
        <md-button disabled>
          禁用按钮
        </md-button>
      </view>
    </md-card>

    <md-card title="Icon 图标" class="mb-4">
      <view class="flex gap-4 text-2xl text-gray-600">
        <md-icon name="menu" />
        <md-icon name="user" color="#409eff" />
        <md-icon name="star-on" color="#e6a23c" />
        <md-icon name="setting" />
      </view>
    </md-card>

    <md-card title="所有图标 (点击复制)" class="mb-4">
      <view class="mb-2 text-sm text-gray-700 font-bold">
        基础图标
      </view>
      <view class="grid grid-cols-4 mb-6 gap-4">
        <view
          v-for="name in mdIcons"
          :key="name"
          class="flex flex-col items-center justify-center rounded bg-gray-50 p-2 active:bg-gray-200"
          @click="copyIconName(name)"
        >
          <md-icon :name="name" size="24" class="mb-2 text-gray-600" />
          <text class="w-full truncate break-all text-center text-xs text-gray-400">{{ name }}</text>
        </view>
      </view>

      <view class="mb-2 text-sm text-gray-700 font-bold">
        Element 图标
      </view>
      <view class="grid grid-cols-4 gap-4">
        <view
          v-for="name in elIcons"
          :key="name"
          class="flex flex-col items-center justify-center rounded bg-gray-50 p-2 active:bg-gray-200"
          @click="copyIconName(name)"
        >
          <md-icon :name="name" size="24" class="mb-2 text-gray-600" />
          <text class="w-full truncate break-all text-center text-xs text-gray-400">{{ name.replace('el-icon-', '') }}</text>
        </view>
      </view>
    </md-card>

    <md-card title="Cell 单元格" class="mb-4" :padding="0">
      <md-cell title="单元格" value="内容" is-link />
      <md-cell title="带图标" icon="menu" value="内容" />
      <md-cell title="带描述" label="描述信息" value="内容" />
    </md-card>
  </view>
</template>

<script lang="ts" setup>
import { elIcons, mdIcons } from './icons'

definePage({
  style: {
    navigationBarTitleText: '基础组件',
  },
})

function copyIconName(name: string) {
  uni.setClipboardData({
    data: name,
    success: () => {
      uni.showToast({
        title: '已复制',
        icon: 'none',
      })
    },
  })
}
</script>

<style lang="scss" scoped>
// 样式
</style>
