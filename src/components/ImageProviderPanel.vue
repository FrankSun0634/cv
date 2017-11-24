<template >
	<div class="imageProviderPanel" :style="styles">
		<RadioGroup v-model="vertical" vertical @on-change="checkChange">
	        <Radio label="Bing" class="el-radio-class">
	            <span>Bing Maps Aerial</span>
	        </Radio>
	        <Radio label="Google" class="el-radio-class">
	            <span>Google Maps 3D</span>
	        </Radio>
	        <Radio label="ESRI" class="el-radio-class">
	            <span>ESRI World Street Map</span>
	        </Radio>
	        <Radio label="OSM" class="el-radio-class">
	            <span>Open Street Map</span>
	        </Radio>
	    </RadioGroup>
	
	</div>
</template>

<script>
	import eventBus from "../assets/EventBus"
	export default{
		data(){
			return {
				item: 0, 
				isShow:false,
				vertical: "Bing",
				styles:{
					// left: '-100px'
					left: '-300px',
					color: 'white'
				}
			}
		},
		mounted(){
			let self = this
			// let id=-1
			eventBus.$on("displayPanel", function(obj){
				self.item = obj.msg
				// self.isShow = obj.isShow
				showPanel(obj.isShow)
			})

			function showPanel(_isShow){
				if(_isShow){
					setTimeout(animator, 20, {"left": 20, "marginLeft": 5})
				}else{
					setTimeout(animator, 20, {"left": -20, "marginLeft": -300})
				}
			}

			function animator(option){
				let marginLeft = option.marginLeft
				let leftStr = self.styles.left
				let left = leftStr.substring(0, leftStr.length-2);
				left = parseInt(left)
				left += option.left
				self.styles.left = left+"px"
				if((marginLeft>0 && left>marginLeft) || (marginLeft<0 && left<marginLeft)){
					self.styles.left = marginLeft+"px"
				}else{
					setTimeout(animator, 20, option)
				}
			}
		},
		methods: {
			checkChange(value){
				let viewer = this.viewer
				let baseUrl = 'http://www.360weapon.com/'

				switch(value){
					case "Bing":
						BingMapProvider();
						break;
					case "Google":
						GoogleMapProvider();
						break;
					case "ESRI":
						ArcGisProvider();
						break;
					case "OSM":
						OSMProvider();
						break;
				}
				

                function BingMapProvider(){
                	let bingMap = new Cesium.BingMapsImageryProvider({
	                    url : 'https://dev.virtualearth.net',
	                    mapStyle : Cesium.BingMapsStyle.AERIAL
	                });
	                changeProvider(bingMap)
                }

				function ArcGisProvider(){
					let esri = new Cesium.ArcGisMapServerImageryProvider({
					    url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
					});
					changeProvider(esri)
				}

				function OSMProvider(){
					let osm = new Cesium.createOpenStreetMapImageryProvider({
			            url : 'https://a.tile.openstreetmap.org/'
			        })
					changeProvider(osm)
				}

				function GoogleMapProvider(){
					let googlemap = new Cesium.UrlTemplateImageryProvider({
						                    url: baseUrl + 'wmts/geearth/{z}/{x}/{y}.jpg',
						                    // pickFeaturesUrl: baseUrl + 'wmts/geearth/feature/{z}/{x}/{y}/{j}/{i}.json',
						                    // getFeatureInfoFormats: [new Cesium.GetFeatureInfoFormat('json', 'application/json', function (data) {
						                    //     return Cesium.when(data)
						                    // })],
						                    tilingScheme: new Cesium.GeographicTilingScheme(),
						                    maximumLevel: 19,
						                    credit: 'Google Earth'
						                })
					changeProvider(googlemap)
				}

				function changeProvider(map){
					let layer = viewer.imageryLayers.get(0)
	                if(layer == null){
	                	alert("Map is null");
	                }
					viewer.imageryLayers.remove(layer);
					let len = viewer.imageryLayers.length
					viewer.imageryLayers.addImageryProvider(map);
				}

				
			}
		}
	}
</script>
<style>
	.imageProviderPanel{
		position: absolute;
		width: 300px;
		height: 130px;
		top: 100px;
		background-color: gray;
		color: black;
		z-index: 999;
		border-radius: 5px;
	}
	.el-radio-class{
		color:white;
		margin-left:15px;
	}
</style>