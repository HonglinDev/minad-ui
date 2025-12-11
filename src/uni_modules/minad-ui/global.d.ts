import type { DefineComponent } from 'vue'

import type { IconProps } from './components/md-icon/type'
import type { ButtonProps, ButtonEmits } from './components/md-button/type'
import type { CardProps, CardEmits } from './components/md-card/type'
import type { CellProps } from './components/md-cell/type'
import type { CheckboxProps } from './components/md-checkbox/type'
import type { ColProps } from './components/md-col/type'
import type { CollapseProps } from './components/md-collapse/type'
import type { CollapseItemProps } from './components/md-collapse-item/type'
import type { ConfigProviderProps } from './components/md-config-provider/type'
import type { DialogProps, DialogEmits } from './components/md-dialog/type'
import type { DividerProps } from './components/md-divider/type'
import type { EmptyProps } from './components/md-empty/type'
import type { FormProps } from './components/md-form/type'
import type { FormItemProps } from './components/md-form-item/type'
import type { ImageProps } from './components/md-image/type'
import type { ImagePreviewProps } from './components/md-image-preview/type'
import type { InputProps, InputEmits } from './components/md-input/type'
import type { LinkProps } from './components/md-link/type'
import type { NavbarProps, NavbarEmits } from './components/md-navbar/type'
import type { NoticeBarProps, NoticeBarEmits } from './components/md-notice-bar/type'
import type { NotifyProps, NotifyEmits } from './components/md-notify/type'
import type { PickerProps, PickerEmits } from './components/md-picker/type'
import type { PickerDateProps, PickerDateEmits } from './components/md-picker-date/type'
import type { PopupProps, PopupEmits } from './components/md-popup/type'
import type { RadioProps } from './components/md-radio/type'
import type { RateProps } from './components/md-rate/type'
import type { RowProps } from './components/md-row/type'
import type { SkeletonProps } from './components/md-skeleton/type'
import type { SwiperProps } from './components/md-swiper/type'
import type { SwitchProps } from './components/md-switch/type'
import type { TabbarProps } from './components/md-tabbar/type'
import type { TabbarItemProps } from './components/md-tabbar-item/type'
import type { TableProps } from './components/md-table/type'
import type { TableColumnProps } from './components/md-table-column/type'
import type { TabsProps } from './components/md-tabs/type'
import type { TabsItemProps } from './components/md-tabs-item/type'
import type { TagProps, TagEmits } from './components/md-tag/type'
import type { TextProps } from './components/md-text/type'
import type { UploadProps, UploadEmits } from './components/md-upload/type'
import type { VerifySliderProps, VerifySliderEmits } from './components/md-verify-slider/type'
import type { WatermarkProps } from './components/md-watermark/type'

declare module './components/md-icon/md-icon.vue' {
  const component: DefineComponent<IconProps, {}, any, any, any, any, any, {}>
  export default component
  export type { IconProps }
}

declare module './components/md-button/md-button.vue' {
  const component: DefineComponent<ButtonProps, {}, any, any, any, any, any, ButtonEmits>
  export default component
  export type { ButtonProps, ButtonEmits }
}

declare module './components/md-card/md-card.vue' {
  export interface MdCardSlots { header?: any; default?: any; footer?: any }
  const component: DefineComponent<CardProps, {}, any, any, any, any, any, CardEmits>
  export default component
  export type { CardProps, CardEmits }
}

declare module './components/md-cell/md-cell.vue' {
  const component: DefineComponent<CellProps>
  export default component
  export type { CellProps }
}

declare module './components/md-checkbox/md-checkbox.vue' {
  const component: DefineComponent<CheckboxProps>
  export default component
  export type { CheckboxProps }
}

declare module './components/md-checkbox-group/md-checkbox-group.vue' {
  const component: DefineComponent<CheckboxProps>
  export default component
  export type { CheckboxEmits, CheckboxGroupProps, CheckboxGroupEmits }
}

declare module './components/md-col/md-col.vue' {
  const component: DefineComponent<ColProps>
  export default component
  export type { ColProps }
}

declare module './components/md-collapse/md-collapse.vue' {
  const component: DefineComponent<CollapseProps>
  export default component
  export type { CollapseProps }
}

declare module './components/md-collapse-item/md-collapse-item.vue' {
  const component: DefineComponent<CollapseItemProps>
  export default component
  export type { CollapseItemProps }
}

declare module './components/md-config-provider/md-config-provider.vue' {
  const component: DefineComponent<ConfigProviderProps>
  export default component
  export type { ConfigProviderProps }
}

declare module './components/md-dialog/md-dialog.vue' {
  const component: DefineComponent<DialogProps, {}, any, any, any, any, any, DialogEmits>
  export default component
  export type { DialogProps, DialogEmits }
}

declare module './components/md-divider/md-divider.vue' {
  const component: DefineComponent<DividerProps>
  export default component
  export type { DividerProps }
}

declare module './components/md-empty/md-empty.vue' {
  const component: DefineComponent<EmptyProps>
  export default component
  export type { EmptyProps }
}

declare module './components/md-form/md-form.vue' {
  const component: DefineComponent<FormProps>
  export default component
  export type { FormProps }
}

declare module './components/md-form-item/md-form-item.vue' {
  const component: DefineComponent<FormItemProps>
  export default component
  export type { FormItemProps }
}

declare module './components/md-image/md-image.vue' {
  const component: DefineComponent<ImageProps>
  export default component
  export type { ImageProps }
}

declare module './components/md-image-preview/md-image-preview.vue' {
  const component: DefineComponent<ImagePreviewProps>
  export default component
  export type { ImagePreviewProps }
}

declare module './components/md-input/md-input.vue' {
  const component: DefineComponent<InputProps, {}, any, any, any, any, any, InputEmits>
  export default component
  export type { InputProps, InputEmits }
}

declare module './components/md-link/md-link.vue' {
  const component: DefineComponent<LinkProps>
  export default component
  export type { LinkProps }
}

declare module './components/md-navbar/md-navbar.vue' {
  export interface MdNavbarSlots { left?: any; center?: any; right?: any }
  const component: DefineComponent<NavbarProps, {}, any, any, any, any, any, NavbarEmits>
  export default component
  export type { NavbarProps, NavbarEmits }
}

declare module './components/md-notice-bar/md-notice-bar.vue' {
  const component: DefineComponent<NoticeBarProps, {}, any, any, any, any, any, NoticeBarEmits>
  export default component
  export type { NoticeBarProps, NoticeBarEmits }
}

declare module './components/md-notify/md-notify.vue' {
  const component: DefineComponent<NotifyProps, {}, any, any, any, any, any, NotifyEmits>
  export default component
  export type { NotifyProps, NotifyEmits }
}

declare module './components/md-picker/md-picker.vue' {
  const component: DefineComponent<PickerProps, {}, any, any, any, any, any, PickerEmits>
  export default component
  export type { PickerProps, PickerEmits }
}

declare module './components/md-picker-date/md-picker-date.vue' {
  const component: DefineComponent<PickerDateProps, {}, any, any, any, any, any, PickerDateEmits>
  export default component
  export type { PickerDateProps, PickerDateEmits }
}

declare module './components/md-popup/md-popup.vue' {
  const component: DefineComponent<PopupProps, {}, any, any, any, any, any, PopupEmits>
  export default component
  export type { PopupProps, PopupEmits }
}

declare module './components/md-radio/md-radio.vue' {
  const component: DefineComponent<RadioProps>
  export default component
  export type { RadioProps }
}

declare module './components/md-radio-group/md-radio-group.vue' {
  const component: DefineComponent<RadioProps>
  export default component
}

declare module './components/md-rate/md-rate.vue' {
  const component: DefineComponent<RateProps>
  export default component
  export type { RateProps }
}

declare module './components/md-row/md-row.vue' {
  const component: DefineComponent<RowProps>
  export default component
  export type { RowProps }
}

declare module './components/md-skeleton/md-skeleton.vue' {
  const component: DefineComponent<SkeletonProps>
  export default component
  export type { SkeletonProps }
}

declare module './components/md-swiper/md-swiper.vue' {
  const component: DefineComponent<SwiperProps>
  export default component
  export type { SwiperProps }
}

declare module './components/md-swiper-item/md-swiper-item.vue' {
  const component: DefineComponent<{}>
  export default component
}

declare module './components/md-switch/md-switch.vue' {
  const component: DefineComponent<SwitchProps>
  export default component
  export type { SwitchProps }
}

declare module './components/md-tabbar/md-tabbar.vue' {
  const component: DefineComponent<TabbarProps>
  export default component
  export type { TabbarProps }
}

declare module './components/md-tabbar-item/md-tabbar-item.vue' {
  const component: DefineComponent<TabbarItemProps>
  export default component
  export type { TabbarItemProps }
}

declare module './components/md-table/md-table.vue' {
  const component: DefineComponent<TableProps>
  export default component
  export type { TableProps }
}

declare module './components/md-table-column/md-table-column.vue' {
  const component: DefineComponent<TableColumnProps>
  export default component
  export type { TableColumnProps }
}

declare module './components/md-tabs/md-tabs.vue' {
  const component: DefineComponent<TabsProps>
  export default component
  export type { TabsProps }
}

declare module './components/md-tabs-item/md-tabs-item.vue' {
  const component: DefineComponent<TabsItemProps>
  export default component
  export type { TabsItemProps }
}

declare module './components/md-tag/md-tag.vue' {
  const component: DefineComponent<TagProps, {}, any, any, any, any, any, TagEmits>
  export default component
  export type { TagProps, TagEmits }
}

declare module './components/md-text/md-text.vue' {
  const component: DefineComponent<TextProps>
  export default component
  export type { TextProps }
}

declare module './components/md-upload/md-upload.vue' {
  const component: DefineComponent<UploadProps, {}, any, any, any, any, any, UploadEmits>
  export default component
  export type { UploadProps, UploadEmits }
}

declare module './components/md-verify-slider/md-verify-slider.vue' {
  export interface MdVerifySliderExpose { reset(): void }
  const component: DefineComponent<VerifySliderProps, {}, any, any, any, any, any, VerifySliderEmits>
  export default component
  export type { VerifySliderProps, VerifySliderEmits, MdVerifySliderExpose }
}

declare module './components/md-watermark/md-watermark.vue' {
  const component: DefineComponent<WatermarkProps>
  export default component
  export type { WatermarkProps }
}

declare module 'vue' {
  export interface GlobalComponents {
    MdIcon: typeof import('./components/md-icon/md-icon.vue').default
    MdButton: typeof import('./components/md-button/md-button.vue').default
    MdCard: typeof import('./components/md-card/md-card.vue').default
    MdCell: typeof import('./components/md-cell/md-cell.vue').default
    MdCheckboxGroup: typeof import('./components/md-checkbox-group/md-checkbox-group.vue').default
    MdCheckbox: typeof import('./components/md-checkbox/md-checkbox.vue').default
    MdCol: typeof import('./components/md-col/md-col.vue').default
    MdCollapse: typeof import('./components/md-collapse/md-collapse.vue').default
    MdCollapseItem: typeof import('./components/md-collapse-item/md-collapse-item.vue').default
    MdConfigProvider: typeof import('./components/md-config-provider/md-config-provider.vue').default
    MdDialog: typeof import('./components/md-dialog/md-dialog.vue').default
    MdDivider: typeof import('./components/md-divider/md-divider.vue').default
    MdEmpty: typeof import('./components/md-empty/md-empty.vue').default
    MdForm: typeof import('./components/md-form/md-form.vue').default
    MdFormItem: typeof import('./components/md-form-item/md-form-item.vue').default
    MdImage: typeof import('./components/md-image/md-image.vue').default
    MdImagePreview: typeof import('./components/md-image-preview/md-image-preview.vue').default
    MdInput: typeof import('./components/md-input/md-input.vue').default
    MdLink: typeof import('./components/md-link/md-link.vue').default
    MdNavbar: typeof import('./components/md-navbar/md-navbar.vue').default
    MdNoticeBar: typeof import('./components/md-notice-bar/md-notice-bar.vue').default
    MdNotify: typeof import('./components/md-notify/md-notify.vue').default
    MdPicker: typeof import('./components/md-picker/md-picker.vue').default
    MdPickerDate: typeof import('./components/md-picker-date/md-picker-date.vue').default
    MdPopup: typeof import('./components/md-popup/md-popup.vue').default
    MdRadioGroup: typeof import('./components/md-radio-group/md-radio-group.vue').default
    MdRadio: typeof import('./components/md-radio/md-radio.vue').default
    MdRate: typeof import('./components/md-rate/md-rate.vue').default
    MdRow: typeof import('./components/md-row/md-row.vue').default
    MdSkeleton: typeof import('./components/md-skeleton/md-skeleton.vue').default
    MdSwiper: typeof import('./components/md-swiper/md-swiper.vue').default
    MdSwiperItem: typeof import('./components/md-swiper-item/md-swiper-item.vue').default
    MdSwitch: typeof import('./components/md-switch/md-switch.vue').default
    MdTabbar: typeof import('./components/md-tabbar/md-tabbar.vue').default
    MdTabbarItem: typeof import('./components/md-tabbar-item/md-tabbar-item.vue').default
    MdTable: typeof import('./components/md-table/md-table.vue').default
    MdTableColumn: typeof import('./components/md-table-column/md-table-column.vue').default
    MdTabs: typeof import('./components/md-tabs/md-tabs.vue').default
    MdTabsItem: typeof import('./components/md-tabs-item/md-tabs-item.vue').default
    MdTag: typeof import('./components/md-tag/md-tag.vue').default
    MdText: typeof import('./components/md-text/md-text.vue').default
    MdUpload: typeof import('./components/md-upload/md-upload.vue').default
    MdVerifySlider: typeof import('./components/md-verify-slider/md-verify-slider.vue').default
    MdWatermark: typeof import('./components/md-watermark/md-watermark.vue').default
  }
}

