/*!
 * Mars3D三维地球平台软件
 * 版本信息：v3.0.31, hash值: 6054983951d2cf814d3b
 * 编译日期：2021-07-20 12:31:37
 * 版权所有：Copyright by 火星科技 http://mars3d.cn
 * 使用单位：免费公开版
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	
  var Cesium = window.Cesium	//通过index.html的head引入
  if(!Cesium){
    Cesium = require("mars3d-cesium")  //使用内置的Cesium
    require('mars3d-cesium/Build/Cesium/Widgets/widgets.css')
  }

  if(typeof exports === 'object'){
     var mars3d = factory(Cesium, require("@turf/turf"));
	 module.exports = mars3d

     window.mars3d = mars3d //插件中使用，非必须
  }
  else{
		root["mars3d"] = factory(Cesium, root["turf"]);
  }
})(window,mars3d_init);