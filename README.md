# Mars3D最简项目模版 - Vue版（CDN方式引入）
    Mars3D平台，在`Vue技术栈下`的最简的应用项目模版，基于vueCli 4.x 
   

 > 其他技术栈，请参考： [https://github.com/marsgis/mars3d](https://github.com/marsgis/mars3d)
 

## 更新SDK
当前仓库的`public\lib`下面不是最新类库，请通过[http://mars3d.cn/download](http://mars3d.cn/download)下载最新SDK覆盖至`public\lib`

  
## 运行命令
 
### 首次运行前安装依赖
 `npm install` 或 `cnpm install`
 
### http运行项目
 `npm run serve`  运行后访问：`http://localhost:3005/` 

### 打包编译项目
 运行`npm run build`来构建项目。 

## 运行效果 
 [在线Demo](http://mars3d.cn/project/vue-template/)  

 ![image](http://mars3d.cn/project/vue-template/screenshot.jpg)
 

  
## 如何集成到自己已有的项目中
1. ### 下载最新Cesium库
 通过[http://mars3d.cn/download](http://mars3d.cn/download)下载最新SDK
 
2. ### 拷贝文件
 > 场景配置文件：`public\config\config.json` 

 > 组件定义文件：`src\components\mars3d\Map.vue`
 
3. ### 创建地球 
 参考 `src\views\Index.vue`文件引入Map组件和构造创建地球，主要关注下下面代码处
```js
<Map :url="configUrl" @onload="onMapload" />

import Map from '../components/mars3d/Map.vue'
```

4. ### 如果您希望用npm方式更优雅使用mars3d，可以切换至下面模版进行使用
   最简项目(NPM版)[https://github.com/marsgis/mars3d-vue-template](https://github.com/marsgis/mars3d-vue-template)    `npm引入Cesium和mars3d`


## Mars3D 是什么 
>  `Mars3D平台` 是[火星科技](http://marsgis.cn/)研发的一款基于 WebGL 技术实现的三维客户端开发平台，基于[Cesium](https://cesium.com/cesiumjs/)优化提升与B/S架构设计，支持多行业扩展的轻量级高效能GIS开发平台，能够免安装、无插件地在浏览器中高效运行，并可快速接入与使用多种GIS数据和三维模型，呈现三维空间的可视化，完成平台在不同行业的灵活应用。

 > Mars3D平台可用于构建无插件、跨操作系统、 跨浏览器的三维 GIS 应用程序。平台使用 WebGL 来进行硬件加速图形化，跨平台、跨浏览器来实现真正的动态大数据三维可视化。通过 Mars3D产品可快速实现浏览器和移动端上美观、流畅的三维地图呈现与空间分析。

### 相关网站 
- Mars3D官网：[http://mars3d.cn](http://mars3d.cn)  

- GitHub导航列表：[https://github.com/marsgis/mars3d](https://github.com/marsgis/mars3d)


## 版权说明
1. 任何`个人或组织`可以在遵守Mars3D相关要求下`免费无限制`使用。
2. 如有`个性化需求`或`商业应用`，请联系[火星科技](http://mars3d.cn)购买。