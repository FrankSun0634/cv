<template>
	<div class="measuretools" v-show="$store.state.measureToolDisplay">
		<div class="measure-length"></div>
		<div class="measure-polygon"></div>
		<div class="draw-point"></div>
		<div class="draw-line"></div>
		<div class="draw-polygon"></div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		name: "MeasureTools",
		data(){
			return {
				
			}
		},

		computed: mapGetters ([

		])
	}
</script>

<style>
	.measuretools{
		position: absolute;
		width: 240px;
		height: 36px;
		z-index: 9999;
		bottom: 45px;
		right: 90px;
		border-radius: 4px;
		background-color: rgba(20, 62, 141, 0.8);
	}

	.measure-length, .measure-polygon, .draw-point, .draw-line, .draw-polygon{
		width: 44px;
		height: 36px;
		border-radius: 4px;
		margin-left: 2px;
		float: left;
		background-size: 18px 20px;
		background-position:center; 
		background-repeat: no-repeat;
	}

	.measure-length:hover, .measure-polygon:hover, .draw-point:hover, .draw-line:hover, .draw-polygon:hover{
		cursor: pointer;
		border: 1px solid rgb(20, 62, 141);
		background-color: rgba(26, 45, 83, 1.0);
	}

	.measure-length{
		margin-left: 6px;
		background-image: url("../assets/measure-length.png");
	}

	.measure-polygon{
		background-image: url("../assets/measure-polygon.png");
	}

	.draw-point{
		background-image: url("../assets/draw-point.png");
	}

	.draw-line{
		background-image: url("../assets/draw-line.png");
	}

	.draw-polygon{
		background-image: url("../assets/draw-polygon.png");
	}
</style>