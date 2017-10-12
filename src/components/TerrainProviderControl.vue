<template>
	<div class="terrainProviderControl">
		<Button type="primary" @click="btnClick">地形数据</Button>
	</div>
</template>

<script>
	import eventBus from "../assets/EventBus"
	let showTerrainPanel = false
	export default{
		methods: {
			btnClick(){
				showTerrainPanel = !showTerrainPanel
				eventBus.$emit("displayTerrainPanel", {isShow:showTerrainPanel})
			}
		}
	}
</script>

<style>
	.terrainProviderControl{
		position: absolute;
		width: 100px;
		height: 100px;
		margin-top: 50px;
		margin-left: 5px;
		z-index: 999;
	}

</style>