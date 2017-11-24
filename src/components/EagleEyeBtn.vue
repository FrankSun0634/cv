<template>
	<!-- <div class="eagleeye" @click="clickMethod"></div> -->
	<div class="ev-eagleeye-btn" v-on:click="displayEagleEyePanel" >
		<div class="ev-eagleeye-btn-thumbnail">
			<img src="../assets/eagleeye-thumbnail.png" style="margin-top:8px; margin-left:7px;">
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	export default{
		name: "EagleEyeBtn",
		data(){
			return {

			}
		},

		methods: {
			...mapActions([
				'displayEagleEyePanelAsyn'
			]),
			clickMethod(evt){
				let self = this
				let viewer = self.viewer
				console.log(evt.layerX+";"+evt.layerY)
				let lon = evt.layerX
				let lat = evt.layerY
				let alt = viewer.camera.positionCartographic.height
				lon -= 180
				lat = 90 - lat
				viewer.camera.flyTo({
					destination : Cesium.Cartesian3.fromDegrees(lon, lat, alt)
				})
			},

			displayEagleEyePanel(){
				this.displayEagleEyePanelAsyn()
			}
		}
	}
</script>

<style>
	.ev-eagleeye-btn{
		position: absolute;
		z-index: 9999;
		right: 20px;
		top: 20px;
		border-radius: 5px;
	}

	.ev-eagleeye-btn:hover{
		cursor: pointer;
	}

	.ev-eagleeye-btn-thumbnail{
		position: relative;
		width: 36px;
		height: 36px;
		border-radius: 3px;
		float: right;
		border: 1px solid rgba(17, 51, 116, 1.0);
		background-color: rgba(15, 47, 106, 0.8);
	}
</style>