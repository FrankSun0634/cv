<template>
	<div class="terrainProviderPanel" v-show="showChange">
		<div style="height:30px;">
			<Icon id="closeBtn" @click.native="closeLoadPanel" type="close" size="20px" style="float:right;margin-top:10px;margin-right:10px;" />
		</div>
		<div style="text-align:center; margin-top:10px; clear:both;">
			<img src="../assets/Terrain.jpg">
		</div>
		<div style="text-align:center; margin-top:20px;">AGI STK Terrain</div>
		<div style="text-align:center; margin-top:20px;">
			<Button type="primary" @click="loadSTKTerrain">加载</Button>
			<Button type="error" @click="unLoadSTKTerrain">删除</Button>
		</div>
	</div>
</template>

<script>
	import eventBus from "../assets/EventBus"
	export default{
		data() {
			return {
				showChange: false
			}
		},
		mounted(){
			let self = this
			
			eventBus.$on("displayTerrainPanel", function(obj){
				self.showChange = !self.showChange
			})
		},
		methods: {
			loadSTKTerrain: function(){
				let terrainProvider = new Cesium.CesiumTerrainProvider({
					url : "http://assets.agi.com/stk-terrain/world"
				})

				let viewer = this.viewer
				viewer.terrainProvider = terrainProvider;
			},

			unLoadSTKTerrain: function(){
				let viewer = this.viewer
				viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
			},

			closeLoadPanel: function(){
				this.showChange = false
			}
		}
	}

</script>

<style>
	.terrainProviderPanel{
		position: absolute;
		width: 300px;
		height: 300px;
		background-color: rgba(47, 79, 79, 0.5);
		top: 0px;
	    left: 0px;
	    right: 0px;
	    bottom: 0px;
		margin: auto;
		border-radius: 10px;
		color: white;
		z-index: 999 
	}
	#closeBtn:hover{
		color: red;
		cursor: pointer;
	}

</style>