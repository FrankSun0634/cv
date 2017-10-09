<template >
	<div class="imageProviderPanel" :style="styles">
		<el-radio-group v-model="radio2" @change="checkChange">
		    <el-radio :label="3" class='el-radio-class'>
		    	Bing Maps Aerial
			</el-radio>
		    <el-radio :label="6" class='el-radio-class'>
		    	ESRI World Street Map
		    </el-radio>
		    <el-radio :label="9" class='el-radio-class'>
		    	Open Street Map
		    </el-radio>
		</el-radio-group>
	</div>
</template>

<script>
	import eventBus from "../assets/EventBus"
	export default{
		data(){
			return {
				item: 0, 
				isShow:false,
				radio2: 3,
				styles:{
					// left: '-100px'
					left: '10px',
					color: 'white'
				}
			}
		},
		mounted(){
			let self = this
			let id=-1
			eventBus.$on("displayPanel", function(obj){
				self.item = obj.msg
				// self.isShow = obj.isShow
				showPanel(obj.isShow)
			})

			function showPanel(_isShow){
				if(id!=-1){
					cancelAnimationFrame(id)
				}
				if(_isShow){
					id = requestAnimationFrame(animator)
				}else{
					id = requestAnimationFrame(hidden)
				}
			}

			function animator(){
				let leftStr = self.styles.left
				let left = leftStr.substring(0, leftStr.length-2);
				left = parseInt(left)
				left += 20
				self.styles.left = left+"px"
				if(left > 5){
					cancelAnimationFrame(id)
					id=-1
					self.styles.left = "5px"
				}else{
					requestAnimationFrame(animator)
				}
			}

			function hidden(){
				let leftStr = self.styles.left
				let left = leftStr.substring(0, leftStr.length-2);
				left = parseInt(left)
				left -= 20
				self.styles.left = left+"px"
				if(left < -300){
					cancelAnimationFrame(id)
					id=-1
					self.styles.left = "-300px"
				}else{
					requestAnimationFrame(hidden)
				}
			}
		},
		methods: {
			checkChange(value){
				let viewer = this.viewer

				switch(value){
					case 3:
						changeProvider3(3);
						break;
					case 6:
						changeProvider6(6);
						break;
					case 9:
						changeProvider9(9);
						break;
				}

				

                function changeProvider3(){
                	let bingMap = new Cesium.BingMapsImageryProvider({
	                    url : 'https://dev.virtualearth.net',
	                    mapStyle : Cesium.BingMapsStyle.AERIAL
	                });
	                let layer = viewer.imageryLayers.get(0)
	                if(layer == null){
	                	alert("BingMap is null");
	                }
					viewer.imageryLayers.remove(layer);
					// viewer.imageryLayers.lowerToBottom(layer)
					let len = viewer.imageryLayers.length
					viewer.imageryLayers.addImageryProvider(bingMap);
                }

				function changeProvider6(){
					let esri = new Cesium.ArcGisMapServerImageryProvider({
					    url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
					});
					let layer = viewer.imageryLayers.get(0)
					viewer.imageryLayers.remove(layer);
					// viewer.imageryLayers.lowerToBottom(layer)
					let len = viewer.imageryLayers.length
					viewer.imageryLayers.addImageryProvider(esri);
				}

				function changeProvider9(){
					let osm = new Cesium.createOpenStreetMapImageryProvider({
			            url : 'https://a.tile.openstreetmap.org/'
			        })
					let layer = viewer.imageryLayers.get(0)
					viewer.imageryLayers.remove(layer);
					// viewer.imageryLayers.lowerToBottom(layer)
					let len = viewer.imageryLayers.length
					viewer.imageryLayers.addImageryProvider(osm);
				}
			}
		}
	}
</script>
<style>
	.imageProviderPanel{
		position: absolute;
		width: 300px;
		height: 100px;
		top: 100px;
		background-color: gray;
		color: black;
		z-index: 999;
		border-radius: 5px;
	}
	.el-radio-class{
		color:white;
		margin-left:15px;
		margin-top:10px;
		display:block;
	}
</style>