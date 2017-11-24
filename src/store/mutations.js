export default{
	displayLayerPanel(state){
		state.layerPanelDispaly = !state.layerPanelDispaly
	},

	displayEagleEyePanel(state){
		state.eagleEyePanelDisplay = !state.eagleEyePanelDisplay
	},

	displayMeasureTool(state){
		state.measureToolDisplay = !state.measureToolDisplay
	},

	changeMouseLonAndLat(state, pos){
		state.mouseLon = pos.lon
		state.mouseLat = pos.lat
		state.mouseLonDir = pos.mouseLonDir
		state.mouseLatDir = pos.mouseLatDir
	},

	changeMouseAlt(state, alt){
		state.mouseAlt = alt
	},

	changeCameraHeight(state, height){
		state.cameraHeight = height
	}
}