<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-08 09:10:49
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-09 15:51:09
 * @FilePath: \minad-ui\src\pages\demo\form.vue
 * @Description: 
 * 
-->
<template>
  <view class="min-h-screen bg-gray-100 p-4 pb-safe">
    <md-card title="Form 表单组件" class="mb-4">
      <md-form v-model="ruleForm" label-width="auto">
        <md-form-item label="输入框" prop="inputValue" :rules="[{ required: true, message: '请选择编码', trigger: 'blur' }]">
          <md-input v-model="ruleForm.inputValue" placeholder="请输入内容" />
        </md-form-item>

        <md-form-item label="开关" prop="switchValue">
          <md-switch v-model="ruleForm.switchValue" />
        </md-form-item>

        <md-form-item label="单选框" prop="radioValue">
          <md-radio-group v-model="ruleForm.radioValue">
            <md-radio label="1">选项1</md-radio>
            <md-radio label="2">选项2</md-radio>
          </md-radio-group>
        </md-form-item>

        <md-form-item label="复选框" prop="checkboxValue">
          <md-checkbox-group v-model="ruleForm.checkboxValue">
            <md-checkbox label="1">选项1</md-checkbox>
            <md-checkbox label="2">选项2</md-checkbox>
          </md-checkbox-group>
        </md-form-item>
      </md-form>
    </md-card>
  </view>
</template>

<script lang="ts" setup>
definePage({
  style: {
    navigationBarTitleText: '数据输入',
  },
})

// 使用 reactive 定义表单数据即可，无需再定义额外 ref
const ruleForm = reactive({
  inputValue: '',
  switchValue: false,
  radioValue: '1',
  checkboxValue: ['1'],
})
</script>