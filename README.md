# 百斯特公司官网

基于Vue 3 + TypeScript + Vite构建的公司官网项目。

## 项目特点

- 响应式设计，适配各种屏幕尺寸
- 基于Vue 3 Composition API开发
- 使用TypeScript提供类型安全
- 使用Element Plus组件库
- 使用SCSS预处理器
- 使用Vue Router进行路由管理
- 使用Pinia进行状态管理

## 项目结构

```
src/
├── assets/          # 静态资源
├── components/      # 公共组件
│   ├── BaseBanner.vue
│   ├── ProductCard.vue
│   └── NewsTimeline.vue
├── views/           # 页面组件
│   ├── HomePage.vue
│   ├── AboutPage.vue
│   └── ProductsPage.vue
├── styles/          # 全局样式
│   ├── variables.scss
│   └── mixins.scss
├── types/           # TypeScript类型
│   └── components.d.ts
└── App.vue
```

## 安装与运行

```bash
# 安装依赖
npm install

# 开发模式运行
npm run dev

# 构建生产版本
npm run build
```

## 技术栈

- Vue 3
- TypeScript
- Vite
- Element Plus
- Vue Router
- Pinia
- SCSS
