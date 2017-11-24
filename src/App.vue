<template>
  <div id="app">
    <!--
    <TerrainProviderControl></TerrainProviderControl>
    <TerrainProviderPanel></TerrainProviderPanel>
    <ImageProviderControl></ImageProviderControl>
    <ImageProviderPanel></ImageProviderPanel>
    <SwitchView></SwitchView>
    <LonandLat></LonandLat>
    -->
    
    
    <EagleEyeBtn></EagleEyeBtn>
    <EagleEye></EagleEye>
    <LayerBtn></LayerBtn>
    <LayerProvider></LayerProvider>
    <ZoomButton></ZoomButton>
    <ScreenSwitch></ScreenSwitch>
    <FullScreen></FullScreen>
    <EarthTools></EarthTools>
    <StatusBar></StatusBar>
    <MeasureTools></MeasureTools>
  </div>
</template>

<script>
// import LonandLat from './components/LonandLat.vue'
// import ImageProviderControl from './components/ImageProviderControl.vue'
// import ImageProviderPanel from './components/ImageProviderPanel.vue'
// import TerrainProviderControl from './components/TerrainProviderControl.vue'
// import TerrainProviderPanel from './components/TerrainProviderPanel.vue'
// import SwitchView from './components/SwitchView.vue'
import EagleEyeBtn from '@/components/EagleEyeBtn'
import EagleEye from '@/components/EagleEye'
import LayerBtn from '@/components/LayerBtn'
import LayerProvider from '@/components/LayerProvider'
import ZoomButton from '@/components/ZoomButton'
import ScreenSwitch from '@/components/ScreenSwitch'
import FullScreen from '@/components/FullScreen'
import EarthTools from '@/components/EarthTools'
import StatusBar from '@/components/StatusBar'
import MeasureTools from '@/components/MeasureTools'

export default {
  name: 'app',
  components: {
    // 'LonandLat': LonandLat,
    // 'ImageProviderControl': ImageProviderControl,
    // 'ImageProviderPanel': ImageProviderPanel,
    // 'TerrainProviderControl': TerrainProviderControl,
    // 'TerrainProviderPanel': TerrainProviderPanel,
    // 'SwitchView': SwitchView,
    'EagleEyeBtn': EagleEyeBtn,
    'EagleEye': EagleEye,
    'LayerBtn': LayerBtn,
    'LayerProvider': LayerProvider,
    'ZoomButton': ZoomButton,
    'ScreenSwitch': ScreenSwitch,
    'FullScreen': FullScreen,
    'EarthTools': EarthTools,
    'StatusBar': StatusBar,
    'MeasureTools': MeasureTools
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

#cesiumContainer {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: transparent;
}

</style>