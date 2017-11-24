<template>
	<div class="ev-layerprovider" v-show="$store.state.layerPanelDispaly">
		<div class="ev-layerprovider-main">
			<div class="ev-layerprovider-main-header">
				<div style="margin-top:10px; margin-left:10px; float:left;">
					<img src="../assets/layer-icon.png">
				</div>
				<div style="float:right; margin-top:5px; margin-right:10px;">
					<img src="../assets/pack-up.png">
					<span class="hiddenImageLayer" v-on:click="hiddenImageLayer">收起图层</span>
				</div>
			</div>
		  	<div class="ev-layerprovider-main-body">
		    	<tree :data="data5" :render="renderContent" multiple class="tree" @on-select-change="selectChange"></tree>
		  	</div>
		</div>
	</div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    name: 'LayerProvider',
    data(){
        return {
        	imageLayerName: 'Bing Maps Aerial',
        	terrainLayerName: '',
        	vectorLayerName: '',
            qhd1: null, //秦皇岛1倾斜摄影数据
            qhd2: null, //秦皇岛2倾斜摄影数据
            qhd3: null, //秦皇岛2倾斜摄影数据
            ds: "", //中国矢量数据数据源
            data5: [
                {
                    title: '图层',
                    expand: true,
                    render: (h, { root, node, data }) => {
                        return h('span', {
                            style: {
                                display: 'inline-block',
                                width: '100%'
                            }
                        }, [
                            h('span', [
                              
                                h('span', data.title)
                            ]),
                            h('span', {
                                style: {
                                    display: 'inline-block',
                                    float: 'left',
                                    marginRight: '32px'
                                }
                            })
                        ]);
                    },
                    children: [
                        {
                            title: '影像数据',
                            children: [
                                {
                                    title: 'Google Maps 3D',
                                    expand: true
                                },
                                {
                                    title: 'Bing Maps Aerial',
                                    
                                    expand: true
                                },
                                {
                                    title: 'ESRI World Street Map',
                                    expand: true
                                },
                                {
                                    title: 'Open Street Map',
                                    expand: true
                                }
                            ]
                        },
                        {
                            title: '地形数据',
                            disableCheckbox: true,
                            children: [
                                {
                                    title: 'AGI STK Terrain'
                                }
                            ]
                        },
                        {
                            title: '倾斜数据',
                            children: [
                                {
                                    title: '秦皇岛'
                                }
                            ]
                        },
                        {
                            title: '矢量数据',
                            children: [
                                {
                                    title: '中国'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    computed: mapGetters([
  
    ]),
    methods:{
        renderContent (h, { root, node, data }) {
            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                }
            }, [
                h('span', [
                    
                    h('span', data.title)
                ])
            ]);
        },

        selectChange(value){
            let self = this
            let viewer = this.viewer

        	checkLayerName(value)
            
        	if(value.length == 1){
        		self.imageLayerName = value[0].title;
        	}

        	let imageLayerArr = []
        	let tmpName = ''
        	if(self.imageLayerName != '' && value.length>1){
        		for(var i=0; i<value.length; i++){
        			if(value[i].title == self.imageLayerName)
        				value[i].selected = false;
        			else
        				tmpName = value[i].title
        		}
        		self.imageLayerName = tmpName
                
        	}
            classifyLayerName(self.imageLayerName)
            // value[0].title = value[0].title+"(显示)"

        	function checkLayerName(layerNames){
	        	for(var i=0; i<layerNames.length; i++){
	        		// let _expand = !layerNames[i].expand
	        		switch(layerNames[i].title){
	        			case "影像数据":
	        				// layerNames[i].expand = _expand
	        				layerNames[i].selected = false
	        				layerNames[i].checked = false
	        				break;
	        			case "地形数据":
	        				// layerNames[i].expand = _expand
	        				layerNames[i].selected = false
	        				layerNames[i].checked = false
	        				break;
                        case "倾斜数据":
                            // layerNames[i].expand = _expand
                            layerNames[i].selected = false
                            layerNames[i].checked = false
                            break;
	        			case "矢量数据":
	        				// layerNames[i].expand = _expand
	        				layerNames[i].selected = false
	        				layerNames[i].checked = false
	        				break;
	        		}
	    				
	        	}
	        }

	        function classifyLayerName(layerName){
        		switch(layerName){
        			case "Google Maps 3D":
        				GoogleMapProvider()
        				break
        			case "Bing Maps Aerial":
                        BingMapProvider()
                        break
        			case "ESRI World Street Map":
                        ArcGisProvider()
                        break
        			case "Open Street Map":
                        OSMProvider()
                        break
        			case "AGI STK Terrain":
                        loadSTKTerrain()
                        break
                    case "秦皇岛":
                        loadQHD3DTiles()
                        break
        			case "地形数据2":
        			case "中国":
                        displayVector()
                        break
        			case "矢量数据2":
        		}
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

            function loadSTKTerrain(){
                if(viewer.terrainProvider instanceof Cesium.EllipsoidTerrainProvider){
                    let terrainProvider = new Cesium.CesiumTerrainProvider({
                        url : "http://assets.agi.com/stk-terrain/world"
                    })

                    viewer.terrainProvider = terrainProvider
                }
            }

            function unLoadSTKTerrain(){
                let viewer = this.viewer
                viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
            }

            function loadQHD3DTiles(){
                if(self.qhd1 == null && self.qhd2 == null && self.qhd3 == null){
                    self.qhd1 = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
                        url: 'http://127.0.0.1/qhd/qhd1/qhd1mcesium3d.json'
                    }))
                    self.qhd2 = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
                        url: 'http://127.0.0.1/qhd/qhd2/qhd2mcesium3d.json'
                    }))
                    self.qhd3 = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
                        url: 'http://127.0.0.1/qhd/qhd3/qhd3mcesium3d.json'
                    }))
                }

                self.qhd3.readyPromise.then(function() {
                    let boundingSphere = self.qhd3.boundingSphere;
                    viewer.camera.viewBoundingSphere(boundingSphere, new Cesium.HeadingPitchRange(0.5, -0.2, boundingSphere.radius * 4.0));
                    viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
                }).otherwise(function(error) {
                    throw(error);
                });
            }

            function displayVector(){
                if(null != self.ds && "" != self.ds){
                    deleteVector()
                }else{
                    addVector()
                }
            }

            function addVector(){
                self.ds = Cesium.GeoJsonDataSource.load('http://127.0.0.1/jsondata/china.topojson', {
                    stroke: Cesium.Color.BLACK,
                    fill: Cesium.Color.RED,
                    strokeWidth: 3,
                    markerSymbol: '?'
                })
                viewer.dataSources.add(self.ds);
            }

            function deleteVector(){
                if(null != self.ds && "" != self.ds){
                    self.ds.then(function(value){
                        viewer.dataSources.remove(value)
                        self.ds = ""
                    })                    
                }
            }

        },
        hiddenImageLayer(){
            this.$store.state.layerPanelDispaly = false
        }
    }
  }

</script>

<style>
	.ev-layerprovider{
		position: absolute;
	    z-index: 9999;
	    top: 56px;
	    left: 20px;
	}

	.ev-layerprovider-main{
		position: relative;
	    width: 310px;
	    height: 250px;
	    margin-top: 10px;
	    background-color: rgba(17, 45, 98, 0.8);
	    border-radius: 6px;
	    border:1px solid rgba(17, 51, 116, 1.0);
	}

	.ev-layerprovider-main-header{
		height: 30px;
		position: relative;
	}

    .hiddenImageLayer{
        font-size:14px;
        color:rgb(165, 165, 165);
        font-family:'宋体';
        display: inline-block;
    }
    
    .hiddenImageLayer:hover{
        cursor: pointer;
    }

	.ev-layerprovider-main-body{
	    height: 215px;
	    width: 100%;
	    position: relative;
	    float: left;
	    /*box-shadow: 0 0 60px #163973;*/
	    border-radius: 5px;
	    overflow-y:auto;
        background-image: linear-gradient(rgba(17, 51, 116, 1.0) 1px,transparent 0),
                          linear-gradient(90deg, rgba(17, 51, 116, 1.0) 1px,transparent 0);
        background-size:10px 10px, 10px 10px;
	}

    /*滚动条样式*/
    .ev-layerprovider-main-body::-webkit-scrollbar {/*滚动条整体样式*/
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 4px;
        position: relative;
        background-color: white;
        border-radius: 2px;
        margin-right: 10px;
    }

    .ev-layerprovider-main-body::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 2px;
        /*-webkit-box-shadow: inset 0 0 5px rgba(60,111,254,0.8);*/
        -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 1.0);
        background: rgba(255, 255, 255, 1.0);
        /*border: 2px solid rgba(0, 16, 65, 0.8);*/
    }

    .ev-layerprovider-main-body::-webkit-scrollbar-track {/*滚动条里面轨道*/
        /*-webkit-box-shadow: inset 0 0 4px rgba(0, 16, 65,1.0);*/
        -webkit-box-shadow: inset 0 0 4px rgba(255, 255, 255,1.0);
        border: 2px solid rgba(0, 16, 65, 0.9);
        /*background: rgba(0,0,0,0.1);*/
    }

  	.ivu-icon-arrow-right-b:before {
	    content: "\F3D3";
	    font-size: 14px;
	    margin-left: 10px;
    }

	.ivu-tree ul{
	    color: white;
	}

    .ivu-tree ul span{
        color: rgb(255, 255, 254);
        font-family: '宋体';
        font-size: 14px;
        margin-left: 3px;
        text-align: left;
    }

    .ivu-tree ul span.ivu-tree-title-selected{
    	color: yellow;
    }


    .ivu-tree-title:hover{
        background-color: rgba(0, 128, 255, 0.6);
    }

    .ivu-tree-title-selected,.ivu-tree-title-selected:hover{
    	background-color: rgba(0, 114, 227, 0.4);
    }

    .ivu-icon-image:before{
        font-size: 16px;
    }
</style>