<template>
	<div id="imageProviderControl">
		<i class="el-icon-d-arrow-right" v-on:click="displayPanel"></i>
	</div>
</template>

<script>
	// import Vue from 'vue'
	import eventBus from "../assets/EventBus"
	import draw from "../assets/js/draw"
	// Vue.use(draw)
	
	let _show = false
	let self = this
	export default{
		mounted(){
			draw.init(this.viewer)
		},
		methods: {
			
			displayPanel(){
				_show = !_show
				// draw.show()
				draw.line({"p1":{"lon":-75, "lat":35}, "p2":{"lon":-125, "lat":35}})
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
		margin-top: 5px;
		margin-left: 5px;
	}

	#imageProviderControl i:hover{
		color:red;
	}

</style>