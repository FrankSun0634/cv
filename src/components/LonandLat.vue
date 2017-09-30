<template>
	<el-tag class="el-tag-cesium">{{num}}</el-tag>
</template>

<script>
	export default{
		data(){
			return {
				num: 0
			}
		},
		beforeMount(){
			let self = this
			let viewer = self.viewer
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
	        		let lon = ((cartographic.longitude * 180) / Cesium.Math.PI).toFixed(3)
	        		let lat = ((cartographic.latitude * 180) / Cesium.Math.PI).toFixed(3)
	        		let height = (viewer.scene.globe.getHeight(cartographic)).toFixed(3);
	        		return "Lon: " + lon + "; Lat: " + lat + "; Height: " + height
	        	}
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
}
</style>