/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-05 16:23:39
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-12 14:49:51
 * @FilePath: \minad-ui\src\uni_modules\minad-ui\components\md-icon\type.ts
 * @Description: 
 * 
 */
/**
 * 组件参数：MdIcon Props
 * 用途：配置图标库、名称与样式行为，适配跨平台使用。
 */
export interface IconProps {
  /**
   * 图标名称
   * 用法；Remix 支持完整类名（以 'ri-' 开头），
   *       或 传入简名（如 'home-line'）。
   */
  name?: string
  /**
   * 图标大小
   * 类型：number | string
   * 说明：number 自动加单位，string 原样使用。
   */
  size?: number | string
  /**
   * 图标颜色
   * 类型：string
   */
  color?: string
  /**
   * 旋转角度
   * 类型：number（单位：度）
   */
  rotate?: number
  /**
   * 是否旋转动画
   * 类型：boolean
   * 说明：开启后应用持续旋转动画。
   */
  spin?: boolean
  /**
   * 是否为加载状态
   * 类型：boolean
   * 说明：显示内置加载占位样式。
   */
  loading?: boolean
  /**
   * 自定义样式
   * 类型：Record<string, any>
   * 说明：合并到行内样式中，用于传入额外 CSS。
   */
  customStyle?: Record<string, any>
}
