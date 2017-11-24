<template>
	<div class="zoomDiv">
		<!-- <ButtonGroup shape="circle">
	        <Button icon="ios-minus-empty"></Button>
	        <Button icon="ios-plus-empty"></Button>
	    </ButtonGroup> -->
	    <div class="zoom-btn-group">
	    	<div class="zoom-btn zoom-btn-plus" @mousedown = "zoomInMouseDown" @mouseup = "zoomInMouseUp"><i class="ivu-icon ivu-icon-ios-plus-empty" ></i></div>
	    	<div class="zoom-btn zoom-btn-minus" @mousedown = "zoomOutMouseDown" @mouseup = "zoomOutMouseUp"><i class="ivu-icon ivu-icon-ios-minus-empty" ></i></div>
	    </div>
	</div>
</template>

<script>
	export default{
		name: "ZoomButton",
		data(){
			return {
				zoomOutTimer: null,
				zoomInTimer: null
			}
		},

		methods:{
			zoomOutMouseDown(){
				let self = this
				let viewer = this.viewer
				this.zoomOutTimer = requestAnimationFrame (zoomOut)

				function zoomOut(){
					let cameraHeight = Math.ceil(viewer.camera.positionCartographic.height)
					self.viewer.camera.zoomOut(cameraHeight / 50)
					self.zoomOutTimer = requestAnimationFrame (zoomOut)
				}
			},

			zoomOutMouseUp(){
				cancelAnimationFrame(this.zoomOutTimer)
				this.zoomOutTimer = null
			},

			zoomInMouseDown(){
				let self = this
				let viewer = this.viewer
				this.zoomInTimer = requestAnimationFrame (zoomIn)

				function zoomIn(){
					let cameraHeight = Math.ceil(viewer.camera.positionCartographic.height)
					self.viewer.camera.zoomIn(cameraHeight / 50)
					self.zoomInTimer = requestAnimationFrame (zoomIn)
				}
			},

			zoomInMouseUp(){
				cancelAnimationFrame(this.zoomInTimer)
				this.zoomInTimer = null
			}
		}
	}
</script>

<style>
	.zoomDiv{
		position: absolute;
		bottom: 180px;
		right: 40px;
		z-index: 9999;
	}

/*	.zoomDiv ButtonGroup{
		width: 47px;
		height: 17px;
		border: 1px solid rgb(20, 62, 141);
	}

	.zoomDiv Button{
		height: 17px;
	}

	.zoomDiv .ivu-btn{
		padding-top: 0px;
		color: rgb(255, 255, 255);
		border: 1px solid rgb(20, 62, 141);
		background-color: rgba(20, 62, 141, 0.8);
	}

	.zoomDiv .ivu-btn:hover{
		background-color: rgba(26, 45, 83, 1.0);
	}

	button{
		background-color: rgba(20, 62, 141, 0.8);
	}*/

	.zoom-btn-group{
		width: 47px;
		height: 17px;
		position: relative;
	}

	.zoom-btn{
		width:23px;
		color:white;
		float: right;
		cursor: pointer;
		border: 1px solid rgb(20, 62, 141);
		background-color: rgba(20, 62, 141, 0.8);    
	}

	.zoom-btn:hover{
		background-color: rgba(26, 45, 83, 1.0);
	}

	.zoom-btn-minus{
		padding-left:10px;
		border-radius: 12px 0px 0px 12px;
	}

	.zoom-btn-plus{
		padding-left: 6px;
		border-radius: 0px 12px 12px 0px;
	}
</style>