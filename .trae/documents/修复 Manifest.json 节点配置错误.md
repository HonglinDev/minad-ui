## 问题定位
- 环境变量未定义：`VITE_APP_TITLE`、`VITE_UNI_APPID`、`VITE_WX_APPID`、`VITE_APP_PUBLIC_BASE`、`VITE_FALLBACK_LOCALE` 在 env 目录中缺失，导致 `name/appid/mp-weixin.appid/h5.router.base/locale` 为空值。
- 图标资源不存在：`app-plus.distribute.icons` 指向 `static/app/icons/*.png`，项目内未找到该目录与文件。
- 可疑/冗余字段：`locale`（非标准 manifest 字段）、`app-plus.usingComponents`（小程序字段）可能触发校验错误。

## 修复方案
### 1. 增强 manifest.config.ts 校验与默认值
- 新增校验与安全默认：
  - `name`：默认 `'MinAd UI'`
  - `appid`：若缺失则在非 APP 构建采用占位 `'__UNI__TEMP__'`，APP 构建强制报错（抛出明确提示）。
  - `mp-weixin.appid`：若缺失则移除 `mp-weixin` 节点避免构建报错（保留 H5/APP）。
  - `h5.router.base`：归一化为以 `/` 开头、以 `/` 结尾；缺省为 `'/'`。
- 删除不兼容节点：移除 `locale` 与 `app-plus.usingComponents`。
- 权限整理：保留常用安全权限（如 `ACCESS_NETWORK_STATE`、`ACCESS_WIFI_STATE`、`WAKE_LOCK`、`CAMERA`），移除过时或高风险权限（`READ_LOGS`、`MOUNT_UNMOUNT_FILESYSTEMS`）。

### 2. 处理图标资源
- 选项 A（推荐）：修改 `icons` 指向现有资源（如 `src/static/logo.png`），或精简为默认图标让打包工具使用内置图标。
- 选项 B：在 `src/static/app/icons/` 下新增缺失的 72/96/144/192、1024、iOS 变体图标文件（占位图）。

### 3. 结果验证
- 本地运行构建（H5、小程序、APP）确保不再出现 Manifest 节点错误。
- 输出日志明确提示缺失的必须变量（例如 APP 构建时未设置 `VITE_UNI_APPID`）。

## 具体改动（将由我执行）
- 编辑 `manifest.config.ts`：
  - 封装 `getMode()` 与 `loadEnv` 的值校验函数，提供默认与报错策略。
  - 归一化 `h5.router.base`。
  - 移除 `locale`、`app-plus.usingComponents`。
  - 精简 `app-plus.distribute.android.permissions`。
  - 在 `mp-weixin` 节点上仅在 `VITE_WX_APPID` 存在时输出。
- 资源调整：根据你的选择执行图标路径修正或新增占位图标文件。
- 验证：运行诊断与一次构建，截取关键 Manifest 节点供你复查。

## 需要你确认的点
- 是否采用选项 A（用现有资源或默认图标）还是选项 B（我添加占位图）？
- 提供真实的 `VITE_UNI_APPID` 与 `VITE_WX_APPID`（如果需要 APP/微信构建）。

确认后我将立即实施以上修改并完成构建校验。