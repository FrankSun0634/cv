<template>
	<div class="terrainProviderPanel" v-show="isShow">
		<div style="text-align:center">
			<img src="../assets/logo.png">
		</div>
		<div style="text-align:center">AGI STK Terrain</div>
		<div style="text-align:center;margin-top:20px;">
			<Button type="primary" @click="loadSTKTerrain">加载</Button>
			<Button type="error" @click="unLoadSTKTerrain">取消</Button>
		</div>
	</div>
</template>

<script>
	import eventBus from "../assets/EventBus"
	export default{
		data() {
			return {
				isShow: false
			}
		},
		mounted(){
			let self = this
			
			eventBus.$on("displayTerrainPanel", function(obj){
				self.isShow = obj.isShow
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
				alert("unLoad");
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

</style>