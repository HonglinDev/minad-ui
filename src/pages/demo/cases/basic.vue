<template>
  <view class="min-h-screen bg-gray-100 p-4 pb-safe">
    <!-- 交互操作指南 -->
    <md-card title="操作指南" class="mb-4">
      <view class="text-sm text-gray-700 leading-6">
        <text>1. 点击不同类型按钮，观察颜色与尺寸变化。</text>
        <text>2. 在输入框中输入文本，查看占位符与聚焦样式。</text>
        <text>3. 查看图标的默认显示与类名用法。</text>
        <text>4. 观察单元格组件的默认布局与右侧箭头。</text>
      </view>
      <view class="mt-2 text-xs text-gray-500">
        预期结果：各组件在默认配置下正确渲染并响应基本交互。
      </view>
    </md-card>

    <!-- Button 基础用法 -->
    <md-card title="Button · 基础用法" class="mb-4">
      <view class="flex flex-wrap gap-2">
        <md-button type="primary">
          主要
        </md-button>
        <md-button type="success">
          成功
        </md-button>
        <md-button type="warning">
          警告
        </md-button>
        <md-button type="danger">
          危险
        </md-button>
        <md-button>默认</md-button>
      </view>
    </md-card>

    <!-- Input 基础用法 -->
    <md-card title="Input · 基础用法" class="mb-4">
      <md-form>
        <md-form-item label="文本">
          <md-input v-model="text" placeholder="请输入文本" />
        </md-form-item>
        <md-form-item label="数字">
          <md-input v-model="num" type="number" placeholder="请输入数字" />
        </md-form-item>
      </md-form>
    </md-card>

    <!-- Icon 基础用法 -->
    <md-card title="Icon · 基础用法" class="mb-4">
      <view class="flex items-center gap-4 text-2xl text-gray-700">
        <md-icon name="user" />
        <md-icon name="success" />
        <md-icon class="md-icon-menu" />
        <view class="md-icon-setting" />
      </view>
    </md-card>

    <!-- Cell 基础用法 -->
    <md-card title="Cell · 基础用法" class="mb-4" :padding="0">
      <md-cell title="标题" value="内容" is-link />
      <md-cell title="带图标" icon="menu" value="更多" is-link />
      <md-cell title="带描述" label="这里是描述" value="详情" />
    </md-card>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePage({
  style: {
    navigationBarTitleText: '演示案例 · 基础功能',
  },
})

const text = ref('')
const num = ref<number | string>('')
</script>

<style scoped></style>
