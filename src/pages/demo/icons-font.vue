<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-08 14:21:33
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-12 14:53:57
 * @FilePath: \minad-ui\src\pages\demo\icons-font.vue
 * @Description: 
 * 
-->
<template>
  <view class="min-h-screen bg-gray-100 p-4 pb-safe">
    <md-card title="尺寸与颜色" class="mb-4">
      <view class="flex items-center gap-4">
        <md-icon name="ri-arrow-up-circle-fill" size="16" />
        <md-icon name="skip-up-line" size="22" />
        <md-icon name="arrow-up-double-line" size="16" color="#007aff" />
        <md-icon name="home-line" size="22" color="#dd524d" />
      </view>
    </md-card>

    <md-card title="旋转与加载" class="mb-4">
      <view class="flex items-center gap-6">
        <md-icon name="reset-left-line" size="22" spin />
        <md-icon :loading="true" size="22" />
      </view>
    </md-card>
  </view>
</template>

<script lang="ts" setup>
definePage({
  style: {
    navigationBarTitleText: 'Iconfont 演示',
  },
})

</script>

<style lang="scss" scoped>
.icon-cell {
  position: relative;
  height: 84px;
  padding: 10px 8px 18px;
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.icon-cell:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  border-color: #ddd;
}

.icon-cell.is-copied {
  border-color: #4cd964;
  box-shadow: 0 0 0 2px rgba(76, 217, 100, 0.14) inset;
}

.name {
  margin-top: 4px;
  font-size: 12px;
  color: #666;
}

.hint {
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  color: #999;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}

.icon-cell:hover .hint {
  opacity: 1;
}

.copied {
  position: absolute;
  top: 6px;
  right: 8px;
  font-size: 10px;
  color: #4cd964;
}
</style>
