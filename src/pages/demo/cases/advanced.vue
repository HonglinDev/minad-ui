<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-07 20:18:36
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-07 20:19:15
 * @FilePath: \minad-ui\src\pages\demo\cases\advanced.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
 

<template>
  <view class="p-4 bg-gray-100 min-h-screen pb-safe">
    <md-card title="操作指南" class="mb-4">
      <view class="text-gray-700 text-sm leading-6">
        <text>1. 切换按钮 Loading/禁用/尺寸状态，观察行为变化。</text>
        <text>2. 输入框前后缀插槽、尺寸与类型变更。</text>
        <text>3. 图标旋转、变色与大小控制。</text>
        <text>4. 打开对话框并体验确认/取消操作。</text>
      </view>
      <view class="mt-2 text-xs text-gray-500">预期结果：进阶配置下组件的交互与样式正确响应。</view>
    </md-card>

    <!-- Button 进阶配置 -->
    <md-card title="Button · 进阶配置" class="mb-4">
      <view class="flex items-center gap-2 mb-2">
        <md-button type="primary" :loading="btnLoading" @click="toggleLoading">切换 Loading</md-button>
        <md-button type="warning" :disabled="btnDisabled" @click="toggleDisabled">切换禁用</md-button>
        <md-button type="success" size="small">小</md-button>
        <md-button type="danger" size="large">大</md-button>
      </view>
      <text class="text-xs text-gray-500">点击“切换”按钮查看状态变化</text>
    </md-card>

    <!-- Input 进阶配置（前后缀插槽、尺寸） -->
    <md-card title="Input · 进阶配置" class="mb-4">
      <md-form>
        <md-form-item label="搜索">
          <md-input v-model="search" size="large" placeholder="输入关键词">
            <template #prefix>
              <md-icon name="search" />
            </template>
            <template #suffix>
              <md-icon name="close" @click="search=''" />
            </template>
          </md-input>
        </md-form-item>
        <md-form-item label="密码">
          <md-input v-model="password" type="password" size="small" placeholder="输入密码" />
        </md-form-item>
      </md-form>
    </md-card>

    <!-- Icon 进阶配置（旋转/颜色/大小） -->
    <md-card title="Icon · 进阶配置" class="mb-4">
      <view class="flex items-center gap-6">
        <md-icon name="refresh" :spin="true" />
        <md-icon name="setting" color="#409eff" :size="28" />
        <md-icon name="warning" :size="32" :rotate="45" color="#e6a23c" />
      </view>
    </md-card>

    <!-- Dialog 进阶配置（确认/取消） -->
    <md-card title="Dialog · 进阶配置" class="mb-4">
      <md-button type="primary" @click="dialogVisible=true">打开对话框</md-button>
      <md-dialog
        v-model="dialogVisible"
        title="操作确认"
        content="是否确认执行该操作？"
        showConfirmButton
        showCancelButton
        @confirm="onConfirm"
        @cancel="onCancel"
      />
      <view class="mt-2 text-xs text-gray-500">点击按钮体验确认/取消事件</view>
    </md-card>
  </view>
</template>

<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '演示案例 · 高级功能',
  },
})
import { ref } from 'vue'

const btnLoading = ref(false)
const btnDisabled = ref(false)
const search = ref('')
const password = ref('')
const dialogVisible = ref(false)

const toggleLoading = () => { btnLoading.value = !btnLoading.value }
const toggleDisabled = () => { btnDisabled.value = !btnDisabled.value }

const onConfirm = () => {
  uni.showToast({ title: '已确认', icon: 'none' })
}
const onCancel = () => {
  uni.showToast({ title: '已取消', icon: 'none' })
}
</script>

<style scoped></style>
