/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-05 16:12:03
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-12 15:08:12
 * @FilePath: \minad-ui\src\main.ts
 * @Description: 
 * 
 */
import { createSSRApp } from 'vue'
import App from './App.vue'
import { requestInterceptor } from './http/interceptor'
import { routeInterceptor } from './router/interceptor'

import store from './store'
import '@/style/index.scss'
import 'virtual:uno.css'
import 'remixicon/fonts/remixicon.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(routeInterceptor)
  app.use(requestInterceptor)

  return {
    app,
  }
}
