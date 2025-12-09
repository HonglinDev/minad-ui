/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-05 16:23:39
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-08 14:21:24
 * @FilePath: \minad-ui\src\uni_modules\minad-ui\components\md-icon\type.ts
 * @Description: 
 * 
 */
export interface IconProps {
  /**
   * 图标名称（使用 iconfont Font class，如 icon-<name>）
   */
  name?: string
  /**
   * 类名前缀（默认 icon）
   */
  prefix?: string
  /**
   * 图标大小
   */
  size?: number | string
  /**
   * 图标颜色
   */
  color?: string
  /**
   * 旋转角度
   */
  rotate?: number
  /**
   * 是否旋转动画
   */
  spin?: boolean
  /**
   * 是否为加载状态
   */
  loading?: boolean
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>
}
