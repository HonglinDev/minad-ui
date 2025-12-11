<template>
  <view class="md-form">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import { provide, reactive, ref } from 'vue'
import type { FormItem, FormRules, FormState, FormProps, FormEmits } from './type'

const props = defineProps<FormProps>()

const emit = defineEmits<FormEmits>()

const formState = reactive<FormState>({
  model: props.modelValue,
  rules: props.rules || {},
  formItems: []
})

const registerFormItem = (formItem: FormItem) => {
  formState.formItems.push(formItem)
}

const unregisterFormItem = (formItem: FormItem) => {
  const index = formState.formItems.findIndex(item => item.prop === formItem.prop)
  if (index !== -1) {
    formState.formItems.splice(index, 1)
  }
}

const validate = async (propOrCb?: string | ((isValid: boolean, fields?: any) => void)): Promise<boolean> => {
  let isValid = true
  if (typeof propOrCb === 'string') {
    const formItem = formState.formItems.find(item => item.prop === propOrCb)
    if (formItem) {
      isValid = await formItem.validate()
    }
    else {
      isValid = true
    }
  } else {
    const results = await Promise.all(formState.formItems.map(item => item.validate()))
    isValid = results.every(r => r)
  }

  if (typeof propOrCb === 'function') {
    try {
      await Promise.resolve(propOrCb(isValid))
    } catch {}
  }
  return isValid
}

const clearValidate = (prop?: string) => {
  if (prop) {
    const formItem = formState.formItems.find(item => item.prop === prop)
    if (formItem) {
      formItem.clearValidate()
    }
  } else {
    formState.formItems.forEach(item => item.clearValidate())
  }
}

const handleSubmit = () => {
  validate().then(valid => {
    if (valid) {
      emit('submit', formState.model)
    }
  })
}

provide('mdForm', {
  formState,
  registerFormItem,
  unregisterFormItem,
  validate,
  clearValidate
})

defineExpose({
  validate,
  clearValidate,
  handleSubmit
})
</script>

<style scoped>
.md-form {
  width: 100%;
}
</style>
