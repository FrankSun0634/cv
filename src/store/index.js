import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
	layerPanelDispaly: false,
	eagleEyePanelDisplay: false,
	measureToolDisplay: false,
	mouseLon: '37°55′38″',
	mouseLat: '29°33′16″',
	mouseAlt: '17182.81',
	cameraHeight: '1718',
	mouseLonDir: '东',
	mouseLatDir: '北',
	mapLayerID: '',
	terrainLayerID: '',
	vertorLayerID: '',
	tileLayerID: '',
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})