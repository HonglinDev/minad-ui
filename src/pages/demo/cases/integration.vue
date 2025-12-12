<template>
  <view class="min-h-screen bg-gray-100 p-4 pb-safe">
    <md-card title="操作指南" class="mb-4">
      <view class="text-sm text-gray-700 leading-6">
        <text>1. 填写表单并点击提交，查看数据收集与展示。</text>
        <text>2. 切换标签页与导航栏交互，体验组件组合。</text>
        <text>3. 使用单元格与图标组合展示信息。</text>
      </view>
      <view class="mt-2 text-xs text-gray-500">
        预期结果：多个组件组合时数据流与状态管理正常。
      </view>
    </md-card>

    <!-- 组合：Navbar + Tabs -->
    <md-card title="导航与选项" class="mb-4">
      <md-navbar title="集成演示" />
      <md-tabs v-model="activeTab">
        <md-tabs-item name="info" label="信息" />
        <md-tabs-item name="form" label="表单" />
        <md-tabs-item name="result" label="结果" />
      </md-tabs>
    </md-card>

    <!-- 表单：Form + FormItem + Input + Switch/Radio/Checkbox -->
    <md-card title="业务表单" class="mb-4">
      <md-form :model-value="form" :rules="rules" @submit="handleSubmit">
        <md-form-item label="姓名" prop="name" :trigger="['blur', 'change']">
          <md-input v-model="form.name" placeholder="请输入姓名" />
        </md-form-item>
        <md-form-item label="年龄" prop="age" :trigger="['change']">
          <md-input v-model="form.age" type="number" placeholder="请输入年龄" />
        </md-form-item>
        <md-form-item label="开关" prop="enabled">
          <md-switch v-model="form.enabled" />
        </md-form-item>
        <md-form-item label="性别">
          <md-radio-group v-model="form.gender">
            <md-radio label="male">
              男
            </md-radio>
            <md-radio label="female">
              女
            </md-radio>
          </md-radio-group>
        </md-form-item>
        <md-form-item label="兴趣">
          <md-checkbox-group v-model="form.hobbies">
            <md-checkbox label="coding">
              编码
            </md-checkbox>
            <md-checkbox label="music">
              音乐
            </md-checkbox>
          </md-checkbox-group>
        </md-form-item>
        <md-button type="primary" @click="submit()">
          提交
        </md-button>
      </md-form>
    </md-card>

    <!-- 展示：Cell + Icon + Tag -->
    <md-card title="信息展示" class="mb-4">
      <md-cell title="用户" :value="form.name || '未填写'" icon="user" />
      <md-cell title="年龄" :value="String(form.age || '未填写')" icon="date" />
      <md-cell title="状态" :value="form.enabled ? '启用' : '停用'" icon="success" />
      <view class="mt-2 flex gap-2">
        <md-tag type="primary">
          {{ form.gender || '未知' }}
        </md-tag>
        <md-tag type="success">
          {{ form.hobbies.join(', ') || '无' }}
        </md-tag>
      </view>
    </md-card>

    <!-- 结果弹窗：Dialog -->
    <md-card title="结果弹窗" class="mb-4">
      <md-button type="primary" @click="dialogVisible = true">
        查看结果
      </md-button>
      <md-dialog v-model="dialogVisible" title="提交结果" :show-cancel-button="true">
        <view class="p-4">
          <text>姓名：{{ form.name || '-' }}</text>
          <text>年龄：{{ form.age || '-' }}</text>
          <text>性别：{{ form.gender || '-' }}</text>
          <text>兴趣：{{ form.hobbies.join(', ') || '-' }}</text>
        </view>
      </md-dialog>
    </md-card>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

definePage({
  style: {
    navigationBarTitleText: '演示案例 · 集成场景',
  },
})

const activeTab = ref('info')
const dialogVisible = ref(false)

const form = reactive({
  name: '力宏',
  age: '' as number | string,
  enabled: true,
  gender: '',
  hobbies: [] as string[],
})

const rules = {
  name: [{ required: true, message: '请输入姓名' }],
  age: [{ type: 'number', min: 1, max: 120, message: '请输入有效年龄' }],
}

function submit() {
  // 通过触发 MdForm 的 submit 事件进行校验
  uni.$emit('md-form-submit')
}

function handleSubmit(model: any) {
  uni.showToast({ title: '已提交', icon: 'none' })
}
</script>

<style scoped></style>
