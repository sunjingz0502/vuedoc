# 面试问题

## 常规问题

1. 上一家公司在哪
2. 上一家公司前后端人员多少
3. 前端做了多久
4. 前端在哪学的
5. git 用过吗
6. 英语四六级是否通过

## css 相关问题

1. 如何用 css 写自定义动画

   ```css
   @keyframes animationName {
     from {
     }
     to {
     }
   }
   animation: animation-name animation-duration animation-timing-function
     animation-delay animation-iteration-count...;
   ```

2. css 实现三角形

   ```css
   #d1 {
     width: 0;
     height: 0;
     border-width: 50px;
     border-bottom-width: 150px;
     border-style: solid;
     border-color: transparent transparent red transparent;
     border-color: blue green red black;
   }
   ```

## js 相关问题

1. `canvas`有没有用过

2. `jQuery`用过吗

3. `nodejs`写过吗

4. `async await` 用过吗

5. 有没有写过`promise`函数

6. 闭包是什么

   :::tip 答案

   闭包的概念就是：只有权利访问另一个函数作用域中的变量，一般就是函数包裹着函数。

   :::

7. require 与 import 的区别和使用(CommonJS 规范和 es6 规范)

   :::tip 答案

   1、import 是 ES6 中的语法标准也是用来加载模块文件的，import 函数可以读取并执行一个 JavaScript 文件，然后返回该模块的 export 命令指定输出的代码。export 与 export default 均可用于导出常量、函数、文件、模块，export 可以有多个，export default 只能有一个。

   2、require 定义模块：module 变量代表当前模块，它的 exports 属性是对外的接口。通过 exports 可以将模块从模块中导出，其他文件加载该模块实际上就是读取 module.exports 变量，他们可以是变量、函数、对象等。在 node 中如果用 exports 进行导出的话系统会系统帮您转成 module.exports 的，只是导出需要定义导出名。

   :::

8. echarts 用过吗

## vue 相关问题

1. vue 生命周期

   :::tip 答案

   1. 创建前：beforeCreate
   2. 创建后：created
   3. 挂载前：beforeMount
   4. 挂载后：mounted
   5. 更新前：beforeUpdate
   6. 更新后：updated
   7. 销毁前：beforeDestroy
   8. 销毁后：destroyed

   :::

2. v-if 和 v-show 有什么区别？

   :::tip 答案

   v-show 仅仅控制元素的显示方式，将 display 属性在 block 和 none 来回切换；而 v-if 会控制这个 DOM 节点的存在与否。当我们需要经常切换某个元素的显示/隐藏时，使用 v-show 会更加节省性能上的开销；当只需要一次显示或隐藏时，使用 v-if 更加合理。

   :::

3. keep-alive 作用和特有的生命周期

   :::tip 答案

   **keep-alive 是 Vue 提供给我们一个内置组件，会缓存不活动的组件实例，而不是销毁它们， 作为标签使用 包裹在需要缓存的组件外**

   在组件切换过程中 把切换出去的组件保留在内存中，防止重复渲染 DOM，减少加载时间及性能消耗，提高用户体验性

   有两个参数：

   include - 包裹的组件名会被缓存

   exclude 包裹的组件名都不会被缓存

   生命周期：`activated`和`deactivated`

   :::

4. Vue 组件间通信有哪些方式

   :::tip 答案

   **（1）`props / $emit` 适用 父子组件通信**

   这种方法是 Vue 组件的基础，相信大部分同学耳闻能详，所以此处就不举例展开介绍。

   **（2）`ref` 与 `$parent / $children` 适用 父子组件通信**

   - `ref`：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
   - `$parent` / `$children`：访问父 / 子实例

   **（3）`EventBus （$emit / $on）` 适用于 父子、隔代、兄弟组件通信**

   这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。

   **（4）`$attrs`/`$listeners` 适用于 隔代组件通信**

   - `$attrs`：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 ( class 和 style 除外 )。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外 )，并且可以通过 `v-bind="$attrs"` 传入内部组件。通常配合 inheritAttrs 选项一起使用。
   - `$listeners`：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件

   **（5）`provide / inject` 适用于 隔代组件通信**

   祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。 provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。

   **（6）Vuex 适用于 父子、隔代、兄弟组件通信**

   Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。

   - Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
   - 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。

   :::

5. vuex 中 mutations 和 actions 的区别

   :::tip 答案

   mutaitons : 同步操作
   actions : 可以包含任意异步操作

   :::

6. vue3 了解过吗？

7. 路由守卫用过吗？

8. 混入 `mixin`

9. 过滤器`filter`

10. 自定义指令 `directive`

11. 插槽 slot，具名插槽

12. Vue-router 共有几种模式？

    :::tip 答案

    1、hash ——即地址栏 URL 中的#符号，它的特点在 于：hash 虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影 响，因此改变 hash 不会重新加载页面。

    2、history ——利用了 HTML5 History api 在浏览器中没有# 有浏览器兼容问题

    history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 地址后加上/items/id。后端如果缺少对 /items/id 的路由处理，将返回 404 错误。

    :::

13. watch 深度监听一个对象中的某个属性的变化

14. 动态组件用过吗

    :::tip 答案

    使用 component 标签，然后使用 is =“组件名”，它会自动去找匹配的组件名，如果有，则显示

    :::

15. 事件修饰符

    :::tip 答案

    .stop 阻止事件继续传播

    .prevent 阻止标签默认行为

    :::

16. 有没有做过 vue 打包优化

17. devDependencies 和 dependencies 的区别

    :::tip 答案

    （1）devDependencies
    用于本地开发，打包时生产环境不会打包这些依赖
    （2）dependencies
    开发环境能用，生产环境也能用。生产环境会被打包

    :::

## uniapp 相关

1. 有没有使用过 uniapp
2. uniapp 开发过小程序和 app 吗
3. uniapp 用过什么 ui 库
4. 有没有自己打包过 app
5. 有没有上架过 app
