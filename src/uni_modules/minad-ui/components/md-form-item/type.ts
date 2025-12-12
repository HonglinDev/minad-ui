export interface FormItem {
  prop: string
  validate: () => Promise<boolean>
  clearValidate: () => void
}

export interface FormRules {
  [key: string]: Array<{
    required?: boolean
    message?: string
    trigger?: 'blur' | 'change'
    min?: number
    max?: number
    type?: 'date' | 'number' | 'string'
    date?: {
      before?: string | Date
      after?: string | Date
      format?: string
    }
  }>
}

export interface FormState {
  model: Record<string, any>
  rules: FormRules
  formItems: FormItem[]
}

export interface MdForm {
  formState: FormState
  registerFormItem: (formItem: FormItem) => void
  unregisterFormItem: (formItem: FormItem) => void
  validate: (propOrCb?: string | ((isValid: boolean, fields?: any) => void)) => Promise<boolean>
  clearValidate: (prop?: string) => void
}

export interface FormItemProps {
  label?: string
  labelWidth?:string
  prop?: string
  required?: boolean
  rules?: Array<{
    required?: boolean
    message?: string
    trigger?: 'blur' | 'change'
    min?: number
    max?: number
    type?: 'date' | 'number' | 'string'
    date?: {
      before?: string | Date
      after?: string | Date
      format?: string
    }
  }>
}

export interface FormItemEmits {
  (e: 'validate', valid: boolean, message: string): void
}
