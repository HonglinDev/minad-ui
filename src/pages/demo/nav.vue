<template>
  <view class="min-h-screen bg-gray-100">
    <!-- 顶部占位，防止内容被遮挡（因为我们将演示多个导航栏，所以不使用 fixed） -->
    <view class="status-bar-height" :style="{ height: `${statusBarHeight}px` }" />
    <md-navbar
      title="导航组件演示"
      left-icon="arrow-left"
      @left-click="handleBack"
    />

    <view class="p-4 pb-safe">
      <view class="mb-4 text-sm text-gray-500">
        基础用法
      </view>
      <md-card :padding="0" class="mb-6 overflow-hidden">
        <md-navbar
          title="标题"
          left-text="返回"
          left-icon="arrow-left"
          right-text="按钮"
          :bordered="false"
          @left-click="showToast('点击返回')"
          @right-click="showToast('点击按钮')"
        />
      </md-card>

      <view class="mb-4 text-sm text-gray-500">
        自定义颜色
      </view>
      <md-card :padding="0" class="mb-6 overflow-hidden">
        <md-navbar
          title="自定义颜色"
          left-icon="arrow-left"
          background-color="#007aff"
          text-color="#ffffff"
          right-icon="more"
          :bordered="false"
          @left-click="showToast('点击返回')"
          @right-click="showToast('点击更多')"
        />
      </md-card>

      <view class="mb-4 text-sm text-gray-500">
        左右图标
      </view>
      <md-card :padding="0" class="mb-6 overflow-hidden">
        <md-navbar
          title="图标展示"
          left-icon="close"
          right-icon="search"
          :bordered="false"
          @left-click="showToast('点击关闭')"
          @right-click="showToast('点击搜索')"
        />
      </md-card>

      <view class="mb-4 text-sm text-gray-500">
        插槽自定义
      </view>
      <md-card :padding="0" class="mb-6 overflow-hidden">
        <md-navbar :bordered="false">
          <template #left>
            <view class="flex items-center text-gray-600" @click="showToast('点击定位')">
              <md-icon name="location" size="16" />
              <text class="ml-1 text-sm">北京</text>
            </view>
          </template>
          <template #center>
            <view class="w-40 flex items-center rounded-full bg-gray-100 px-4 py-1">
              <md-icon name="search" size="14" class="mr-2 text-gray-400" />
              <text class="text-sm text-gray-400">搜索内容</text>
            </view>
          </template>
          <template #right>
            <md-icon name="scan" size="20" @click="showToast('点击扫码')" />
          </template>
        </md-navbar>
      </md-card>
    </view>
  </view>
</template>

<script lang="ts" setup>
definePage({
  style: {
    navigationBarTitleText: '导航组件',
    navigationStyle: 'custom',
  },
})
const statusBarHeight = ref(0)

onLoad(() => {
  const sysInfo = uni.getSystemInfoSync()
  statusBarHeight.value = sysInfo.statusBarHeight || 0
})

function handleBack() {
  uni.navigateBack()
}

function showToast(title: string) {
  uni.showToast({
    title,
    icon: 'none',
  })
}
</script>

<style lang="scss" scoped>
// 样式
</style>
