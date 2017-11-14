<template>
	<div class="ev-layerprovider">
		<div class="ev-layerprovider-thumbnail">
			<img src="../assets/show-layer.png" style="margin-top:8px; margin-left:7px;">
		</div>
		<div class="ev-layerprovider-main">
			<div class="ev-layerprovider-main-header">
				<div style="margin-top:10px; margin-left:10px; float:left;">
					<img src="../assets/layer-icon.png">
				</div>
				<div style="float:right; margin-top:5px; margin-right:10px;">
					<img src="../assets/pack-up.png">
					<span style="font-size:14px;color:rgb(165, 165, 165);">收起图层</span>
				</div>
			</div>
		  	<div class="ev-layerprovider-main-body">
		    	<tree :data="data5" :render="renderContent" multiple class="tree" @on-select-change="selectChange"></tree>
		  	</div>
		</div>
	</div>
</template>

<script>
  export default{
    name: 'LayerProvider',
    data(){
        return {
        	imageLayerName: '',
        	terrainLayerName: '',
        	vectorLayerName: '',
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
                                    title: '地形数据1'
                                },
                                {
                                    title: '地形数据2'
                                }
                            ]
                        },
                        {
                            title: '矢量数据',
                            children: [
                                {
                                    title: '矢量数据1'
                                },
                                {
                                    title: '矢量数据2'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
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
	        			case "矢量数据":
	        				// layerNames[i].expand = _expand
	        				layerNames[i].selected = false
	        				layerNames[i].checked = false
	        				break;
	        		}
	    				
	        	}
	        }

	        function classifyLayerName(layerNames){
	        	imageLayerArr
	        	for(let i=0; i<layerNames.length; i++){
	        		switch(layerNames[i].title){
	        			case "Google Maps 3D":
	        				imageLayerArr.push(layerNames[i])
	        				break
	        			case "Bing Maps Aerial":
	        			case "ESRI World Street Map":
	        			case "Open Street Map":
	        			case "地形数据1":

	        			case "地形数据2":
	        			case "矢量数据1":
	        			case "矢量数据2":
	        		}
	        	}
        	}

        }      
        
    }
  }

</script>

<style>
	.ev-layerprovider{
		position: absolute;
	    z-index: 9999;
	    top: 20px;
	    left: 20px;
	}

	.ev-layerprovider-thumbnail{
		position: relative;
		width: 36px;
		height: 36px;
		border-radius: 3px;
		border: 1px solid rgba(17, 51, 116, 1.0);
		background-color: rgba(15, 47, 106, 0.8);
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
        /*font-family: '微软雅黑';*/
        font-size: 14px;
        margin-left: 3px;
        text-align: left;
    }

    .ivu-tree ul span.ivu-tree-title-selected{
    	color: yellow;
    }

/*    {
    	background-color: red;
    }*/

    .ivu-tree-title-selected,.ivu-tree-title-selected:hover{
    	background-color: red;
    }

    .ivu-icon-image:before{
        font-size: 16px;
    }
</style>