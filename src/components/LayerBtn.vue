<template>
	<div class="ev-layerprovider-btn" v-on:click="displayImageProviderPanel">
		<div class="ev-layerprovider-btn-thumbnail">
			<img src="../assets/show-layer.png" style="margin-top:8px; margin-left:7px;">
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	export default{
		name: "LayerBtn",

		data(){
			return {}
		},
		methods:{
			...mapActions([
				'displayLayerPanelAsyn'
			]),

			displayImageProviderPanel: function(){
				this.displayLayerPanelAsyn()
			}
		}
	}
</script>

<style>
	.ev-layerprovider-btn{
		position: absolute;
	    z-index: 9999;
	    top: 20px;
	    left: 20px;
	}

	.ev-layerprovider-btn:hover{
		cursor: pointer;
	}

	.ev-layerprovider-btn-thumbnail{
		position: relative;
		width: 36px;
		height: 36px;
		border-radius: 3px;
		border: 1px solid rgba(17, 51, 116, 1.0);
		background-color: rgba(15, 47, 106, 0.8);
	}
	
</style>