<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-25 18:00:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-08 14:21:12
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
      <text :class="['iconfont', iconfontClass, { 'md-icon--spin': spin }]" />
    </template>
  </view>
</template>
<script lang="ts">
export default {
  name: 'MdIcon'
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'
import { addUnit } from '../../utils'
import type { IconProps } from './type'

const props = defineProps<IconProps>()

const aliasMap: Record<string, string> = {
  'arrow-left': 'arrowleft',
  'arrow-right': 'arrowright',
  'arrow-up': 'arrowup',
  'arrow-down': 'arrowdown',
  more: 'ellipsis',
  'star-on': 'star',
  'star-off': 'star',
  'circle-plus': 'plus-circle',
  'circle-minus': 'minus-circle',
  'sort-down': 'sort-descending',
  'sort-up': 'sort-ascending',
  'caret-left': 'left',
  'caret-right': 'right',
  'caret-top': 'up',
  'caret-bottom': 'down'
}

const iconfontClass = computed(() => {
  const raw = props.name || ''
  let name = raw.replace(/^el-icon-/, '').replace(/^md-icon-/, '')
  name = aliasMap[name] || name
  const prefix = props.prefix || 'icon'
  return name ? `${prefix}-${name}` : ''
})

const fontSize = computed(() => {
  if (typeof props.size === 'number' || /^\d+$/.test(String(props.size))) {
    return addUnit(props.size)
  }
  return props.size as string | undefined
})

const inlineStyle = computed(() => ({
  color: props.color,
  fontSize: fontSize.value,
  transform: props.rotate ? `rotate(${props.rotate}deg)` : undefined,
  ...(props.customStyle || {})
}))
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

<style src="../../styles/fonts/iconfont.css"></style>
