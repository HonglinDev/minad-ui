<template>
  <view class="md-form-item">
    <view v-if="label" class="md-form-item__label" :style="{ width: props.labelWidth }">
      <text v-if="isRequired" class="md-form-item__required">*</text>
      {{ label }}
    </view>
    <view class="md-form-item__content">
      <slot></slot>
      <view v-if="errorMessage" class="md-form-item__error">
        {{ errorMessage }}
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref, watch, provide, computed } from 'vue'
import { useI18n } from '../../i18n/i18n'
import { dayjs } from '../../utils'
import type { MdForm, FormItemProps, FormItemEmits } from './type'

const props = defineProps<FormItemProps>()

const emit = defineEmits<FormItemEmits>()

// Use i18n
const { t } = useI18n()

const mdForm = inject<MdForm>('mdForm')
const errorMessage = ref('')
const validateState = ref<'success' | 'error' | ''>('')

if (!mdForm) {
  console.error('MdFormItem must be used within MdForm')
}

const getEffectiveRules = (): Array<any> => {
  const formRules = mdForm?.formState.rules[props.prop] || []
  const itemRules = props.rules || []
  return (itemRules.length ? itemRules : formRules) || []
}

const isRequired = computed(() => {
  if (props.required) return true
  const rules = getEffectiveRules()
  return rules.some(r => r && r.required)
})

const validate = async (): Promise<boolean> => {
  if (!mdForm || !props.prop) return true

  const rules = getEffectiveRules()
  if (!rules || rules.length === 0) return true

  const value = mdForm.formState.model[props.prop]
  let valid = true
  let message = ''

  for (const rule of rules) {
    // Required validation
    if (rule.required) {
      if (!value || value === '') {
        valid = false
        message = rule.message || t('form.required')
        break
      }
    }

    // Skip further validation if value is empty and not required
    if (!value || value === '') continue

    // Type validation
    if (rule.type) {
      switch (rule.type) {
        case 'date':
          if (!dayjs(value).isValid()) {
            valid = false
            message = rule.message || t('form.invalidDate')
            break
          }
          break
        case 'number':
          if (typeof value !== 'number' && isNaN(Number(value))) {
            valid = false
            message = rule.message || t('form.invalidNumber')
            break
          }
          break
        case 'string':
          if (typeof value !== 'string') {
            valid = false
            message = rule.message || t('form.invalidString')
            break
          }
          break
      }
      if (!valid) break
    }

    // Date validation
    if (rule.date && dayjs(value).isValid()) {
      const dateValue = dayjs(value)

      // Date format validation
      if (rule.date.format) {
        if (!dayjs(value, rule.date.format, true).isValid()) {
          valid = false
          message = rule.message || t('form.dateFormat', { format: rule.date.format })
          break
        }
      }

      // Date before validation
      if (rule.date.before) {
        const beforeDate = dayjs(rule.date.before)
        if (!beforeDate.isValid()) {
          valid = false
          message = rule.message || t('form.invalidDate')
          break
        }
        if (dateValue.isAfter(beforeDate) || dateValue.isSame(beforeDate, 'day')) {
          valid = false
          message = rule.message || t('form.dateBefore', { date: beforeDate.format('YYYY-MM-DD') })
          break
        }
      }

      // Date after validation
      if (rule.date.after) {
        const afterDate = dayjs(rule.date.after)
        if (!afterDate.isValid()) {
          valid = false
          message = rule.message || t('form.invalidDate')
          break
        }
        if (dateValue.isBefore(afterDate) || dateValue.isSame(afterDate, 'day')) {
          valid = false
          message = rule.message || t('form.dateAfter', { date: afterDate.format('YYYY-MM-DD') })
          break
        }
      }
    }

    // String length validation
    if (typeof value === 'string') {
      // Min length validation
      if (rule.min !== undefined && value.length < rule.min) {
        valid = false
        message = rule.message || t('form.minLength', { min: rule.min })
        break
      }
      // Max length validation
      if (rule.max !== undefined && value.length > rule.max) {
        valid = false
        message = rule.message || t('form.maxLength', { max: rule.max })
        break
      }
    }

    // Number range validation
    if (typeof value === 'number' || !isNaN(Number(value))) {
      const numValue = Number(value)
      // Min value validation
      if (rule.min !== undefined && numValue < rule.min) {
        valid = false
        message = rule.message || t('form.minValue', { min: rule.min })
        break
      }
      // Max value validation
      if (rule.max !== undefined && numValue > rule.max) {
        valid = false
        message = rule.message || t('form.maxValue', { max: rule.max })
        break
      }
    }
  }

  validateState.value = valid ? 'success' : 'error'
  errorMessage.value = valid ? '' : message

  emit('validate', valid, message)
  return valid
}

const clearValidate = () => {
  validateState.value = ''
  errorMessage.value = ''
}

const ruleTriggers = computed(() => {
  const set = new Set<string>()
  const rules = getEffectiveRules()
  rules.forEach(r => {
    const t = r?.trigger
    if (!t) return
    if (Array.isArray(t)) t.forEach(x => set.add(x))
    else set.add(t)
  })
  return Array.from(set)
})

const handleBlur = () => {
  if (ruleTriggers.value.includes('blur')) {
    validate()
  }
}

const handleChange = () => {
  if (ruleTriggers.value.includes('change')) {
    validate()
  }
}

onMounted(() => {
  if (mdForm) {
    mdForm.registerFormItem({
      prop: props.prop,
      validate,
      clearValidate
    })
  }
})

onUnmounted(() => {
  if (mdForm) {
    mdForm.unregisterFormItem({
      prop: props.prop,
      validate,
      clearValidate
    })
  }
})

provide('mdFormItem', {
  prop: props.prop,
  validateState,
  errorMessage,
  handleBlur,
  handleChange
})

defineExpose({
  validate,
  clearValidate
})
</script>

<style scoped>
.md-form-item {
  display: flex;
  margin-bottom: 16px;
  align-items: center;
}

.md-form-item__label {
  width: 80px;
  font-size: 14px;
  color: #303133;
  margin-right: 12px;
}

.md-form-item__required {
  color: #f56c6c;
  margin-right: 4px;
}

.md-form-item__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

.md-form-item__error {
  font-size: 12px;
  color: #f56c6c;
  margin-top: 2px;
  position: absolute;
  top: 100%;
  left: 0;
}
</style>
