<template>
	<div class="screenswitch">
		
	</div>
</template>

<script>
	export default{
		name: "ScreenSwitch",
		data(){
			return {}
		}
	}
</script>

<style>
	.screenswitch{
		width: 36px;
		height: 36px;
		position: absolute;
		right: 45px;
		bottom: 135px;
		z-index: 9999;
		cursor: pointer;
		border: 1px solid rgb(20, 62, 141);
		border-radius: 4px;
		background-color: rgba(20, 62, 141, 0.8);
		background-size: 20px 20px;
		background-position:center; 
		background-repeat: no-repeat;
		background-image: url("../assets/little-earth.png");
	}

	.screenswitch:hover{
		background-color: rgba(26, 45, 83, 1.0);
	}
	
</style>