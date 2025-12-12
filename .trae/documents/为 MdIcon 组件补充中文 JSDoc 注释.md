## 修改范围
- `src/uni_modules/minad-ui/components/md-icon/md-icon.vue`
- `src/uni_modules/minad-ui/components/md-icon/type.ts`

## 注释规范落实
- 组件用途说明：在 `<script setup>` 顶部添加组件级 JSDoc，描述 MdIcon 的设计目的、图标库支持（iconfont / RemixIcon）、平台差异（H5 自动注入 CSS）。
- 参数说明：在 `defineProps<IconProps>()` 处添加 JSDoc，逐项说明 `name`、`library`、`prefix`、`remixCssUrl`、`size`、`color`、`rotate`、`spin`、`loading`、`customStyle` 的类型与用途。
- 方法注释：
  - `ensureRemixCss`：添加 JSDoc，说明功能、参数（无）、返回值（void）、H5 条件注入逻辑与幂等处理。
  - 生命周期 `onMounted`：补充用途与调用关系（触发 CSS 注入）。
- 关键逻辑注释：
  - `isRemix`、`iconClass`、`baseClass`、`fontSize`、`inlineStyle` 等 computed 前添加分步骤说明：
    1) 如何识别 Remix 模式；
    2) 类名生成规则（`ri-<name>` vs `prefix-<name>`）；
    3) 尺寸与旋转的处理；
    4) 避免在注释中包含任何图片或网络图片地址。
- 样式说明：在样式块注释 `md-icon--spin` 动画、`md-icon__loading` 的占位实现与适配意图；不添加任何图片地址。
- `type.ts`：将现有字段说明改为标准 JSDoc（`/** ... */`），对接口与每个属性给出中文说明与类型标注。

## 实施步骤
1. 为 `md-icon.vue` 中组件、props、computed、方法逐项添加 JSDoc，保持中文、简洁准确；不改变现有功能逻辑。
2. 为 `type.ts` 中 `IconProps` 接口与各属性添加 JSDoc，统一术语与类型说明；消除行内注释，改为块注释。
3. 检查注释中不包含任何图片资源或网络图片地址；如需描述默认 CDN，仅用“默认外部样式资源”措辞。
4. 运行类型检查与构建诊断，确保新增注释不影响类型推断与编译。

## 验证
- 编译通过且无新增诊断错误。
- 组件行为不变：原有 iconfont 与 RemixIcon 用法均正常。
- 开发者在 IDE 中悬停查看到完整中文 JSDoc 提示。

## 风险与兼容性
- 仅添加注释，无功能改动；兼容 H5/小程序/APP。
- Vue `<script setup>` 下 JSDoc 放置在声明前，避免破坏编译结构。

## 交付物
- 两个文件的注释化版本，遵循中文 JSDoc 规范。
- 简短变更摘要，列出注释覆盖点与不涉及的业务逻辑。