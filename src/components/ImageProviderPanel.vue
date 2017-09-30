<template >
	<div class="imageProviderPanel" :style="styles">{{item}}</div>
</template>

<script>
	import eventBus from "../assets/EventBus"
	export default{
		data(){
			return {
				item: 0, 
				isShow:false,
				styles:{
					left: '-100px'
				}
			}
		},
		mounted(){
			let self = this
			let id=-1
			eventBus.$on("displayPanel", function(obj){
				self.item = obj.msg
				// self.isShow = obj.isShow
				showPanel(obj.isShow)
			})

			function showPanel(_isShow){
				if(id!=-1){
					cancelAnimationFrame(id)
				}
				if(_isShow){
					id = requestAnimationFrame(animator)
				}else{
					id = requestAnimationFrame(hidden)
				}
			}

			function animator(){
				let leftStr = self.styles.left
				let left = leftStr.substring(0, leftStr.length-2);
				left = parseInt(left)
				left += 20
				self.styles.left = left+"px"
				if(left > 5){
					cancelAnimationFrame(id)
					id=-1
					self.styles.left = "5px"
				}else{
					requestAnimationFrame(animator)
				}
			}

			function hidden(){
				let leftStr = self.styles.left
				let left = leftStr.substring(0, leftStr.length-2);
				left = parseInt(left)
				left -= 20
				self.styles.left = left+"px"
				if(left < -100){
					cancelAnimationFrame(id)
					id=-1
					self.styles.left = "-100px"
				}else{
					requestAnimationFrame(hidden)
				}
			}
		}
	}
</script>
<style>
	.imageProviderPanel{
		position: absolute;
		width: 100px;
		height: 100px;
		top: 100px;
		background-color: white;
		color: black;
		z-index: 999
	}
</style>