<template>
	<div id="imageProviderControl" v-on:click="displayPanel">
		<i><Icon v-bind:type="icontype"></Icon></i>
	</div>
</template>

<script>
	import eventBus from "../assets/EventBus"
	import draw from "../assets/js/draw"
	
	let _show = false
	let self = this
	export default{
		data() {
			return {
				icontype: "chevron-right"
			}
		},
		mounted(){
			draw.init(this.viewer)
		},
		methods: {
			
			displayPanel(){
				_show = !_show
				// draw.show()
				// draw.line({"p1":{"lon":-75, "lat":35}, "p2":{"lon":-125, "lat":35}})
				if(_show)
					this.icontype = "chevron-left"
				else
					this.icontype = "chevron-right"
				eventBus.$emit("displayPanel", {msg:"display", isShow:_show})
			}
		}
	}
</script>

<style>
	#imageProviderControl{
		position: absolute;
		height:40px;
		width:40px;
		top: 300px;
		left: 5px;
		z-index: 9999;
		color: white;
		background-color: gray;
		border-radius: 5px;
	}

	#imageProviderControl i{
		font-size:30px;
		margin-left: 6px;
	}

	#imageProviderControl:hover{
		color:red;
		cursor: pointer;
	}

</style>