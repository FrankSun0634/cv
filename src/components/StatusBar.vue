<template>
	<div class="statusbar">
		<span style="display:block;float:right;margin-right:20px;"><span style="color:yellow;">500</span>公里&nbsp;
																<span style="color: yellow; display: inline-block; width: 80px;"> {{ $store.state.mouseLon }} </span> {{ $store.state.mouseLonDir }} &nbsp;
																<span style="color: yellow; display: inline-block; width: 80px;"> {{ $store.state.mouseLat }} </span> {{ $store.state.mouseLatDir }} &nbsp;
																海拔<span style="color:yellow; display: inline-block; width: 50px;"> {{ $store.state.mouseAlt }} </span>米&nbsp;
																视角海拔高度<span style="color:yellow; display: inline-block; width: 50px;"> {{ $store.state.cameraHeight }} </span>公里</span>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default{
		name: "StatusBar",
		data(){
			return {

			}
		},
		created(){
			let self = this
			setInterval(writeLonLat,20)
	        function writeLonLat() {
	            self.computeLonLat();
	        }
		},
		methods: {
			...mapActions([
				'changeMouseLonAndLat',
				'changeMouseAlt',
				'changeCameraHeight'
			]),

	        computeLonLat(){
	        	let self = this
				let viewer = self.viewer

	        	let x = self.mousePos.x
	        	let y = self.mousePos.y

	        	let pick = new Cesium.Cartesian2(x, y)
	        	let cartesian = self.viewer.scene.globe.pick(viewer.camera.getPickRay(pick), viewer.scene)
	        	if(cartesian !== undefined){
	        		let cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian)
	        		let lon = ((cartographic.longitude * 180) / Cesium.Math.PI)
	        		let lat = ((cartographic.latitude * 180) / Cesium.Math.PI)
	        		// let alt = (viewer.scene.globe.getHeight(cartographic)).toFixed(3)
	        		self.alt = this.getAltitude(lon, lat)
	        		let mouseLatDir, mouseLonDir

	        		//计算经度
	        		let d = parseInt(lon)
	        		if(d < 0)
	        			mouseLonDir = '西'
	        		else
	        			mouseLonDir = '东'
	        		let f = parseInt((lon - d) * 60)
	        		let m = parseInt(((lon - d) * 60 - f) * 60)
	        		lon = Math.abs(d) + '°' + Math.abs(f) + '′' + Math.abs(m) + '″'

	        		//计算纬度
	        		d = parseInt(lat)
	        		if(d < 0)
	        			mouseLatDir = '南'
	        		else
	        			mouseLatDir = '北'
	        		f = parseInt((lat - d) * 60)
	        		m = parseInt(((lat - d) * 60 - f) * 60)
	        		lat = Math.abs(d) + '°' + Math.abs(f) + '′' + Math.abs(m) + '″'


	        		
	        		this.changeMouseLonAndLat({'lon': lon, 'lat': lat, 'mouseLonDir': mouseLonDir, 'mouseLatDir': mouseLatDir})
	        	}

	        	let cameraHeight = Math.ceil(viewer.camera.positionCartographic.height)
	        	cameraHeight = (cameraHeight / 1000).toFixed(1)
	        	this.changeCameraHeight(cameraHeight)

	        },

	        getAltitude(lon,lat){
	        	let self = this
	        	let positions = [
				    Cesium.Cartographic.fromDegrees(lon, lat)
				];
				let currentLevel = this.viewer.scene.globe._surface._debug.maxDepth
	        	Cesium.sampleTerrain(this.viewer.terrainProvider, currentLevel, positions)
				.then(function(samples) {
				    // self.alt = samples[0].height
				    self.changeMouseAlt(samples[0].height.toFixed(1))
				    // console.log(samples[0].height)
				});
	        }
		}
	}

</script>

<style>
	.statusbar{
		position: absolute;
		width: 957px;
		height: 32px;
		bottom: 0px;
		right: 0px;
		z-index: 9999;
		font-size: 14px;
		font-family: '宋体';
		color: white;
		line-height: 32px;
		background:-webkit-linear-gradient(left, rgba(20, 62, 141, 0), rgba(20, 62, 141, 0.8));
	}
</style>