<template>
	<Tag  class="el-tag-cesium">{{num}}</Tag>
</template>

<script>
	export default{
		data(){
			return {
				num: ""
			}
		},
		beforeMount(){
			let self = this
			let viewer = self.viewer
			let alt = 0.0
	        setInterval(writeLonLat,20)
	        function writeLonLat() {
	            self.num = computeLonLat();
	        }

	        function computeLonLat(){
	        	let x = self.mousePos.x
	        	let y = self.mousePos.y

	        	let pick = new Cesium.Cartesian2(x, y)
	        	let cartesian = self.viewer.scene.globe.pick(viewer.camera.getPickRay(pick), viewer.scene)
	        	if(cartesian !== undefined){
	        		let cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian)
	        		let lon = ((cartographic.longitude * 180) / Cesium.Math.PI)
	        		let lat = ((cartographic.latitude * 180) / Cesium.Math.PI)
	        		// let alt = (viewer.scene.globe.getHeight(cartographic)).toFixed(3)
	        		getAltitude(lon, lat)
	        		
	        		return "Lon: " + lon.toFixed(3) + "; Lat: " + lat.toFixed(3) + "; Altitude: " + alt.toFixed(3) + "test github"
	        	}
	        }

	        function getAltitude(lon,lat){
	        	let positions = [
				    Cesium.Cartographic.fromDegrees(lon, lat)
				];
				let currentLevel = viewer.scene.globe._surface._debug.maxDepth
	        	Cesium.sampleTerrain(viewer.terrainProvider, currentLevel, positions)
				.then(function(samples) {
				    alt = samples[0].height
				});
	        }

	        writeLonLat();
		}
	}
</script>
	

<style >
.el-tag-cesium {
	position: absolute;
    z-index: 9999;
    left:10px;
    bottom:5px;
    background: transparent;
    border: 0px;
    color:white;
}
</style>