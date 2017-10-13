<template>
	<div class="terrainProviderControl">
		<Button type="primary" @click="btnClick">地形数据</Button>
	</div>
</template>

<script>
	import eventBus from "../assets/EventBus"
	export default{
		methods: {
			btnClick(){
				eventBus.$emit("displayTerrainPanel", {showChange: true})
			}
		}
	}
</script>

<style>
	.terrainProviderControl{
		position: absolute;
		margin-top: 50px;
		margin-left: 5px;
		z-index: 999;
	}
</style>