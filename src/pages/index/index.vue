<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-05 16:12:03
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-07 17:08:49
 * @FilePath: \minad-ui\src\pages\index\index.vue
 * @Description: minad-ui 组件库分类列表
 *
-->
<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
definePage({
  type: 'home',
  style: {
    navigationStyle: 'default',
    navigationBarTitleText: 'minad-ui',
    backgroundColor: '#F8F8F8',
  },
})

const categories = [
  {
    title: '基础',
    icon: 'document', // 映射到 md-icon name
    path: '/pages/demo/basic',
  },
  {
    title: '导航',
    icon: 'more', // ellipsis
    path: '/pages/demo/nav',
  },
  {
    title: '数据输入',
    icon: 'menu', // hamburger
    path: '/pages/demo/form',
  },
  {
    title: '反馈',
    icon: 'success', // checkmark
    path: '/pages/demo/feedback',
  },
  {
    title: '数据展示',
    icon: 'view', // eye/preview
    path: '/pages/demo/display',
  },
  {
    title: '演示案例',
    icon: 'success',
    path: '/pages/demo/cases/index',
  },
]

function handleNavigate(path: string) {
  uni.navigateTo({
    url: path,
  })
}
</script>

<template>
  <view class="min-h-screen bg-gray-100 px-4 py-4 pb-safe">
    <view class="flex flex-col gap-4">
      <view
        v-for="(item, index) in categories"
        :key="index"
        class="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm transition-colors active:bg-gray-50"
        @click="handleNavigate(item.path)"
      >
        <text class="text-base text-gray-800 font-medium">{{ item.title }}</text>
        <md-icon :name="item.icon" class="text-xl text-gray-400" />
      </view>
    </view>
  </view>
</template>

<style scoped>
/* 也可以使用 UnoCSS，这里为了确保样式正确性简单写一点 */
</style>
