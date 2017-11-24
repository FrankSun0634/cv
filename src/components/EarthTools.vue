<template>
	<div class="earthtools" v-on:click="earthtoolsClick">
		
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	export default{
		name: "EarthTools",
		data(){
			return {}
		},
		methods:{
			...mapActions([
				'displayMeasureToolAsyn'
			]),
			earthtoolsClick: function(){
				this.displayMeasureToolAsyn()
			}
		}
	}
</script>

<style>
	.earthtools{
		width: 36px;
		height: 36px;
		position: absolute;
		right: 45px;
		bottom: 45px;
		z-index: 9999;
		cursor: pointer;
		border: 1px solid rgb(20, 62, 141);
		border-radius: 4px;
		background-color: rgba(20, 62, 141, 0.8);
		background-size: 20px 20px;
		background-position: center; 
		background-repeat: no-repeat;
		background-image: url("../assets/tools.png");
	}

	.earthtools:hover{
		background-color: rgba(26, 45, 83, 1.0);
	}
	
</style>