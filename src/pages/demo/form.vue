<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-07 17:08:09
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-07 17:08:11
 * @FilePath: \minad-ui\src\pages\demo\form.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->

<template>
  <view class="min-h-screen bg-gray-100 p-4 pb-safe">
    <md-card title="Form 表单组件" class="mb-4">
      <md-form-item label="输入框">
        <md-input v-model="inputValue" placeholder="请输入内容" />
      </md-form-item>

      <md-form-item label="开关">
        <md-switch v-model="switchValue" />
      </md-form-item>

      <md-form-item label="单选框">
        <md-radio-group v-model="radioValue">
          <md-radio label="1">
            选项1
          </md-radio>
          <md-radio label="2">
            选项2
          </md-radio>
        </md-radio-group>
      </md-form-item>

      <md-form-item label="复选框">
        <md-checkbox-group v-model="checkboxValue">
          <md-checkbox label="1">
            选项1
          </md-checkbox>
          <md-checkbox label="2">
            选项2
          </md-checkbox>
        </md-checkbox-group>
      </md-form-item>
    </md-card>
  </view>
</template>

<script lang="ts" setup>
definePage({
  style: {
    navigationBarTitleText: '数据输入',
  },
})
const inputValue = ref('')
const switchValue = ref(false)
const radioValue = ref('1')
const checkboxValue = ref(['1'])
</script>
