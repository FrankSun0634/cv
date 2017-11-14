<template>
	<div>
		<Button type="info" class="switchBtn" @click="btnClick">切换视角</Button>
		<Button type="info" class="vectorBtn" @click="vectorClick">加载矢量</Button>
		<Button type="info" class="deleteBtn" @click="deleteClick">删除矢量</Button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return {
				ds: ""
			}
		},
		methods: {
			btnClick(){
				let viewer = this.viewer
				let camera = viewer.camera
				let center = Cesium.Cartesian3.fromDegrees(-98.0, 40.0)
				camera.twistLeft(1.57)
			},

			vectorClick(){
				let viewer = this.viewer
				self.ds = Cesium.GeoJsonDataSource.load('http://127.0.0.1/jsons/china.topojson', {
				    stroke: Cesium.Color.BLACK,
				    fill: Cesium.Color.RED,
				    strokeWidth: 3,
				    markerSymbol: '?'
			    })
			    viewer.dataSources.add(ds);

			    // axios.get('http://127.0.0.1/jsondata/china.topojson').then((res)=>{
			    // 	let result = res.data
			    // 	console.log(result)
			    // })

			    // viewer.flyTo(ds);
			},

			deleteClick(){
				if(null != self.ds && "" != self.ds){
					let viewer = this.viewer
					self.ds.then(function(value){
						viewer.dataSources.remove(value)
					})
					
					// viewer.dataSources.removeAll();
					// window.requestAnimationFrame(function(){
					// 	viewer.camera.zoomIn(10000)
					// })
					
					
				}

				// this.zoomIn()
				this.roll()
			},

			zoomIn(){
				let viewer = this.viewer
				let zoomIn = this.zoomIn
				let amount = viewer.camera.positionCartographic.height * 0.03
				viewer.camera.zoomIn(amount)
				window.requestAnimationFrame(function(){
					zoomIn()
				})
			},

			roll(){
				let viewer = this.viewer
				let roll = viewer.camera.direction
				viewer.camera.rotate(roll, 1)
				console.log(roll)
			}

		}
	}
</script>

<style>
	.switchBtn{
		position: absolute;
		z-index: 9999;
	    right:5px;
	    top:50px;
	}

	.vectorBtn{
		position: absolute;
		z-index: 9999;
	    right:5px;
	    top:90px;
	}

	.deleteBtn{
		position: absolute;
		z-index: 9999;
	    right:5px;
	    top:130px;
	}
</style>