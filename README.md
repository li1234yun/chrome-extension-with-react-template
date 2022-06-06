# Nav Extension 开发

## 浏览器插件开发

插件包含下面几部分组成：

- manifest.json 插件配置清单
- background.js 后台脚本
- popup.html 弹窗页面
- options.html 配置页面

## 项目技术选型

- TypeScript
- React
- TailwindCSS
- Webpack
- Babel

为了方便代码提示（21 世纪），此项目使用了 Typescript 进行代码提示和编译。
另使用 React 构建插件页面，使用 TailwindCSS 进行样式管理。
通过 webpack 打包生成插件不同的页面。

## 开发环境准备

### 依赖

- 项目依赖
  - Typescript
  - react,react-dom
  - TailwindCSS
- 开发依赖
  - webpack
    - webpack,webpack-cli 编译文件
    - html-webpack-plugin 自动注入编译文件至 html
    - clean-webpack-plugin 清理编译依赖

### Typescript

- 禁止 typescript 编译输出文件
  - 开启`noEmit`配置或者使用`--noEmit`命令行参数

### Webpack 插件

- [babel-loader](Babel webpack 插件)
- [ts-loader](https://webpack.js.org/guides/typescript/)
  - 用于 webpack 编译 TypeScript，使用 tsc 命令和 tsconfig.json 配置文件
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#options)
  - 自动在 html 页面引入编译后的文件，如：js bundle/css 等
  - 如果需要使用指定的 html 生成，需要指定配置`template`使用特定的 index.html 文件
  - 使用`chunks`配置，指定不同 html 引入的 chunks 文件
- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)
  - 清理 webpack 打包目录 dist 下的文件
  - 设置`dry`显示清理动作，默认为 false
- [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/#getting-started)
  - 打包时复制文件到指定目录
  - Flat 复制和 Context 复制控制复制的表现，默认是保持复制目录结构
- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
  - 提取 style 至独立文件

### Babel 设置

- babel 依赖
  - @babel/core @babel/cli
  - @babel/preset-env 预设环境
  - @babel/preset-typescript typescript 预设
  - @babel/preset-react react 预设
    - 修改 tsconfig.json `jsx => react`
  - [babel-loader webpack 打包](https://webpack.docschina.org/loaders/babel-loader/)

### TailwindCSS 初始化

#### 文档

[style loader](https://webpack.docschina.org/loaders/style-loader/)
| [css loader](https://webpack.docschina.org/loaders/css-loader/)
| [postcss loader](https://webpack.docschina.org/loaders/postcss-loader/)
| [sass loader](https://webpack.docschina.org/loaders/sass-loader/)

- 支持使用 scss 编写自定义样式
- 支持 postcss 裁剪样式
- 各个 loader 配置使用独立配置文件，如：postcss 配置文件为：`postcss.config.js`

[初始化文档](https://tailwindcss.com/docs/installation/using-postcss)

```mermaid
graph TD
  F[Sass/Scss/css样式文件]
  LA[sass loader]
  LC[css loader]
  LS[style loader]
  LP[postcss loader]

  F --> LA --编译sass/scss为css文件--> LP --裁剪css--> LC --解决css导入问题--> LS --将css插入DOM，可设置插入的方式--> DOM
```

> 要使 css 处理流程生效，需要在 index.[tj]s 代码 `import index.css` 文件才能生效

### Webpack Server

[官方文档](https://webpack.js.org/configuration/dev-server/#serveindex)
[webpack server 脚手架参数](https://github.com/webpack/webpack-cli/blob/master/SERVE-OPTIONS-v4.md)

运行开发服务，提供实时预览。

[简化编译输出](https://webpack.js.org/configuration/stats/#stats)

## 说明

- typescript 使用 babel

  - [官方说明](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html) - `tsconfig.json`特定设置的开启

  ```json
    "compilerOptions": {
    // Ensure that .d.ts files are created by tsc, but not .js files
    "declaration": true,
    "emitDeclarationOnly": true,
    // Ensure that Babel can safely transpile files in the TypeScript project
    "isolatedModules": true
    }
  ```

- [官方新手教程](https://github.com/Microsoft/TypeScript-Babel-Starter)

  - 设置开发环境

- [完整流程教程](https://iwenson.com/react-with-tailwindcss-from-scratch/)
