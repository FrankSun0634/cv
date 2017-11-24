export default{
	displayLayerPanelAsyn({commit, state}){
		commit('displayLayerPanel')
	},

	displayEagleEyePanelAsyn({commit, state}){
		commit('displayEagleEyePanel')
	},

	displayMeasureToolAsyn({commit, state}){
		commit('displayMeasureTool')
	},

	changeMouseLonAndLat({commit, state}, pos){
		commit('changeMouseLonAndLat', pos)
	},

	changeMouseAlt({commit, state}, alt){
		commit('changeMouseAlt', alt)
	},

	changeCameraHeight({commit, state}, height){
		commit('changeCameraHeight', height)
	}
}