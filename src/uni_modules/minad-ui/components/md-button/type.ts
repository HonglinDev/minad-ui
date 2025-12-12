/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-05 16:23:39
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-12 18:00:00
 * @FilePath: \minad-ui\src\uni_modules\minad-ui\components\md-button\type.ts
 * @Description: 
 * 
 */
export interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'large' | 'medium' | 'small'
  disabled?: boolean
  loading?: boolean
}

export interface ButtonEmits {
  (e: 'click', event: MouseEvent): void
}
