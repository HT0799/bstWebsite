# 工具函数

本目录包含项目中使用的公共工具函数。

## scrollToTop

用于平滑滚动页面到顶部。

### 用法

```javascript
import { scrollToTop } from '@/utils';

// 调用方法滚动到顶部
scrollToTop();
```

## BaseLink 组件

为了确保页面跳转后滚动到顶部，请使用 `BaseLink` 组件替代 `router-link`：

```vue
<BaseLink :to="'/about'" class="your-class">查看更多</BaseLink>
```

`BaseLink` 组件支持的 props：

- `to`: 跳转的路径或路由对象（必选）
- `tag`: 渲染的 HTML 标签，默认为 'a'
- `className`: 额外的 CSS 类名 