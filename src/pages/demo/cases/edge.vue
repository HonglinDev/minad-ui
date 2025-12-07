<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-07 19:36:29
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-07 20:11:43
 * @FilePath: \minad-ui\src\pages\demo\cases\edge.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-07 19:36:29
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-07 20:11:14
 * @FilePath: \minad-ui\src\pages\demo\cases\edge.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->

<template>
  <view class="min-h-screen bg-gray-100 p-4 pb-safe">
    <md-card title="操作指南" class="mb-4">
      <view class="text-sm text-gray-700 leading-6">
        <text>1. 尝试在禁用/只读输入框内操作观察行为。</text>
        <text>2. 快速点击按钮测试节流与禁用状态。</text>
        <text>3. 查看空数据、错误状态与极端内容长度表现。</text>
        <text>4. 尝试遮罩不关闭的对话框与超长标题。</text>
      </view>
      <view class="mt-2 text-xs text-gray-500">
        预期结果：组件在异常与极端情况下保持稳定与可用。
      </view>
    </md-card>

    <!-- Input 边界：禁用/只读/超长占位符 -->
    <md-card title="Input · 边界条件" class="mb-4">
      <md-form>
        <md-form-item label="禁用">
          <md-input v-model="disabledText" disabled placeholder="禁用状态不可编辑" />
        </md-form-item>
        <md-form-item label="只读">
          <md-input v-model="readonlyText" readonly placeholder="只读状态不可编辑" />
        </md-form-item>
        <md-form-item label="超长">
          <md-input v-model="longText" placeholder="这是一段非常非常非常非常非常非常非常非常长的占位符文本" />
        </md-form-item>
      </md-form>
    </md-card>

    <!-- Button 边界：快速点击与禁用 -->
    <md-card title="Button · 边界条件" class="mb-4">
      <view class="flex items-center gap-2">
        <md-button type="primary" :loading="clickLoading" @click="rapidClick">
          快速点击
        </md-button>
        <md-button type="danger" :disabled="true">
          禁用按钮
        </md-button>
      </view>
      <view class="mt-2 text-xs text-gray-500">
        快速点击将短暂进入 Loading 以模拟防抖
      </view>
    </md-card>

    <!-- 空状态与错误展示 -->
    <md-card title="Empty/Notify · 边界条件" class="mb-4">
      <md-empty description="暂无数据" />
      <view class="mt-2">
        <md-button type="warning" @click="showError">
          触发错误提醒
        </md-button>
      </view>
    </md-card>

    <!-- Dialog 边界：不可点击遮罩关闭、超长标题 -->
    <md-card title="Dialog · 边界条件" class="mb-4">
      <md-button type="primary" @click="edgeDialogVisible = true">
        打开边界对话框
      </md-button>
      <md-dialog
        v-model="edgeDialogVisible"
        :close-on-click-overlay="false"
        title="这是一段超长的标题以测试在极端情况下对话框的布局与换行表现以及可读性维护"
        content="遮罩不可点击关闭，请点击确认或取消。"
        show-confirm-button
        show-cancel-button
      />
    </md-card>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePage({
  style: {
    navigationBarTitleText: '演示案例 · 边界条件',
  },
})

const disabledText = ref('')
const readonlyText = ref('只读内容')
const longText = ref('')

const clickLoading = ref(false)
function rapidClick() {
  clickLoading.value = true
  setTimeout(() => (clickLoading.value = false), 500)
}

const edgeDialogVisible = ref(false)

function showError() {
  uni.showToast({ title: '发生错误', icon: 'none' })
}
</script>

<style scoped></style>
