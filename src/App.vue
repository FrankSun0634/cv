<template>
  <div id="app">
    <!--
    <CesiumMenu></CesiumMenu>
    -->  
    <LonandLat></LonandLat>
    <ImageProviderControl></ImageProviderControl>
    <ImageProviderPanel></ImageProviderPanel>
    <TerrainProviderControl></TerrainProviderControl>
    <TerrainProviderPanel></TerrainProviderPanel>
  </div>
</template>

<script>
import LonandLat from './components/LonandLat.vue'
import ImageProviderControl from './components/ImageProviderControl.vue'
import ImageProviderPanel from './components/ImageProviderPanel.vue'
import TerrainProviderControl from './components/TerrainProviderControl.vue'
import TerrainProviderPanel from './components/TerrainProviderPanel.vue'

export default {
  name: 'app',
  components: {
    'LonandLat': LonandLat,
    'ImageProviderControl': ImageProviderControl,
    'ImageProviderPanel': ImageProviderPanel,
    'TerrainProviderControl': TerrainProviderControl,
    'TerrainProviderPanel': TerrainProviderPanel
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