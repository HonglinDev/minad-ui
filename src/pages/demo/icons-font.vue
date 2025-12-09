<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-08 14:21:33
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-09 15:26:14
 * @FilePath: \minad-ui\src\pages\demo\icons-font.vue
 * @Description: 
 * 
-->
<template>
  <view class="min-h-screen bg-gray-100 p-4 pb-safe">
    <md-card title="全部图标" class="mb-4">
      <view class="grid grid-cols-4 gap-4">
        <view v-for="item in allIcons" :key="item" class="icon-cell" :class="{ 'is-copied': lastCopied === item }"
          @click="copyIcon(item)" @touchend="copyIcon(item)">
          <md-icon :name="item" size="24" />
          <text class="name">{{ item }}</text>
          <text class="hint">点击复制</text>
          <text v-if="lastCopied === item" class="copied">已复制</text>
        </view>
      </view>
    </md-card>
    <md-card title="尺寸与颜色" class="mb-4">
      <view class="flex items-center gap-4">
        <md-icon name="filesearch" size="16" />
        <md-icon name="video" size="22" />
        <md-icon name="filesearch" size="16" color="#007aff" />
        <md-icon name="video" size="22" color="#dd524d" />
      </view>
    </md-card>

    <md-card title="旋转与加载" class="mb-4">
      <view class="flex items-center gap-6">
        <md-icon name="reload" size="22" spin />
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

// @ts-ignore
import iconfont from '@/uni_modules/minad-ui/styles/fonts/iconfont.json'


const lastCopied = ref<string | null>(null)

const allIcons = computed<string[]>(() => {
  const glyphs = (iconfont as any)?.glyphs || []
  const names = glyphs.map((g: any) => g.font_class)
  return Array.from(new Set(names)).sort()
})

async function copyIcon(name: string) {
  const snippet = `<md-icon name="${name}" size="22px"></md-icon>`
  try {
    await copyText(snippet)
    lastCopied.value = name
    uni.showToast({ title: '已复制', icon: 'none' })
    setTimeout(() => {
      if (lastCopied.value === name) lastCopied.value = null
    }, 1200)
  }
  catch (e) {
    uni.showToast({ title: '复制失败', icon: 'none' })
  }
}

async function copyText(text: string) {
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }
  if (typeof document !== 'undefined') {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'absolute'
    textarea.style.left = '-9999px'
    document.body.appendChild(textarea)
    textarea.select()
    try {
      document.execCommand('copy')
    }
    finally {
      document.body.removeChild(textarea)
    }
  }
}
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
