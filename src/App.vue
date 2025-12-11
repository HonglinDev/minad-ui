<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-08 09:10:49
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-10 09:20:38
 * @FilePath: \minad-ui\src\App.vue
 * @Description: 
 * 
-->
<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
import { navigateToInterceptor } from '@/router/interceptor'

onLaunch((options) => {
  console.log('App.vue onLaunch', options)
})
onShow((options) => {
  console.log('App.vue onShow', options)
  // 处理直接进入页面路由的情况：如h5直接输入路由、微信小程序分享后进入等
  // https://github.com/unibest-tech/unibest/issues/192
  if (options?.path) {
    navigateToInterceptor.invoke({ url: `/${options.path}`, query: options.query })
  }
  else {
    navigateToInterceptor.invoke({ url: '/' })
  }
})
onHide(() => {
  console.log('App Hide')
})
</script>
