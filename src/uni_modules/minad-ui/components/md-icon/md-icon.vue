<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-25 18:00:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-12 14:58:11
 * @FilePath: \minad-ui\src\uni_modules\minad-ui\components\md-icon\md-icon.vue
 * @Description: 图标组件
 *
-->
<template>
  <view class="md-icon" :style="inlineStyle">
    <template v-if="loading">
      <view class="md-icon__loading" />
    </template>
    <template v-else>
      <text :class="[iconClass, { 'md-icon--spin': spin }]" />
    </template>
  </view>
</template>
<script lang="ts">
export default {
  name: 'MdIcon'
}
</script>
<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { addUnit } from '../../utils'
import type { IconProps } from './type'

/**
 * 组件名称：MdIcon 图标组件
 * 功能描述：统一封装图标使用，兼容本地 iconfont 与 RemixIcon，支持旋转、加载动画、颜色与尺寸的样式控制。
 * 设计目的：为跨平台场景提供一致的图标渲染；不自动注入 RemixIcon 样式，请在项目中统一引入其 CSS。
 */
const props = defineProps<IconProps>()


/**
 * 关键逻辑：生成最终图标类名
 * 步骤说明：
 * 1. 当为 Remix 模式时，优先使用传入完整类名（以 ri- 开头），否则按 ri-<name> 拼接；
 * @returns {string} 返回可用于 text 节点的类名
 */
const iconClass = computed(() => {
  const raw = props.name || ''
  if (/^ri-/.test(raw)) return raw
  return raw ? `ri-${raw}` : ''
})


/**
 * 关键逻辑：计算字体大小
 * 说明：支持 number（自动加单位）与 string（原样使用）
 * @returns {string | undefined} 返回可用的字体大小
 */
const fontSize = computed(() => {
  if (typeof props.size === 'number' || /^\d+$/.test(String(props.size))) {
    return addUnit(props.size)
  }
  return props.size as string | undefined
})

/**
 * 关键逻辑：组合行内样式
 * 包含：颜色、大小、旋转角度与自定义样式合并
 * @returns {Record<string, any>} 返回行内样式对象
 */
const inlineStyle = computed(() => ({
  color: props.color,
  fontSize: fontSize.value,
  transform: props.rotate ? `rotate(${props.rotate}deg)` : undefined,
  ...(props.customStyle || {})
}))

/**
 * 组件生命周期：挂载时
 */
onMounted(() => {})
</script>

<style lang="scss" scoped>
@import '../../styles/index';

.md-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  vertical-align: middle;
  color: $md-color-text;
  font-size: $md-size-medium;
}

.md-icon--spin {
  animation: rotate 1s linear infinite;
}

.md-icon__loading {
  width: 1em;
  height: 1em;
  border: 2px solid rgba($md-color-text, 0.2);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: rotate 0.8s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>