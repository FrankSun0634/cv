// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';   
import App from './App'
import router from './router'
// import myrouter from './myrouter'

Vue.config.productionTip = false

Vue.use(iView);

// myrouter.out();
let Cesium = window.Cesium;
let viewer = new Cesium.Viewer("cesiumContainer", {
 // imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
 //        url : 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
 //    }),
	  baseLayerPicker: false,
  	animation: false,
  	navigationHelpButton: false,
  	timeline: false,
  	geocoder: false,
  	fullscreenButton: false,
  	vrButton: false,
  	sceneModePicker: false,
  	infoBox: false,
  	scene3DOnly: false,
  	homeButton: false
});

// viewer.scene.globe.imageryLayers.add(esri, 0)
// let terrainProvider = new Cesium.CesiumTerrainProvider({
// 		url : "http://assets.agi.com/stk-terrain/world"
// 	})
// viewer.terrainProvider = terrainProvider;
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(109.78, 28.36, 15000000)
});
Vue.prototype.viewer = viewer;

//鼠标位置
let mousePos = {x:0, y:0};
Vue.prototype.mousePos = mousePos;
let cesiumContainer = document.getElementById("cesiumContainer");
cesiumContainer.onmousemove = function(evt){
	mousePos.x = evt.clientX;
	mousePos.y = evt.clientY;
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
