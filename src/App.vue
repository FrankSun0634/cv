<template>
  <div id="app">
    <!--
    <TerrainProviderControl></TerrainProviderControl>
    <TerrainProviderPanel></TerrainProviderPanel>
    <ImageProviderControl></ImageProviderControl>
    <ImageProviderPanel></ImageProviderPanel>
    <SwitchView></SwitchView>
    -->
    <LonandLat></LonandLat>
    
    
    <EagleEye></EagleEye>
    <LayerProvider></LayerProvider>
  </div>
</template>

<script>
import LonandLat from './components/LonandLat.vue'
// import ImageProviderControl from './components/ImageProviderControl.vue'
// import ImageProviderPanel from './components/ImageProviderPanel.vue'
// import TerrainProviderControl from './components/TerrainProviderControl.vue'
// import TerrainProviderPanel from './components/TerrainProviderPanel.vue'
// import SwitchView from './components/SwitchView.vue'
import EagleEye from '@/components/EagleEye'
import LayerProvider from '@/components/LayerProvider'

export default {
  name: 'app',
  components: {
    'LonandLat': LonandLat,
    // 'ImageProviderControl': ImageProviderControl,
    // 'ImageProviderPanel': ImageProviderPanel,
    // 'TerrainProviderControl': TerrainProviderControl,
    // 'TerrainProviderPanel': TerrainProviderPanel,
    // 'SwitchView': SwitchView,
    'EagleEye': EagleEye,
    'LayerProvider': LayerProvider
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