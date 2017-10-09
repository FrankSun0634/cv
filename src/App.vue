<template>
  <div id="app">
     
    <LonandLat></LonandLat>
    <ImageProviderControl></ImageProviderControl>
    <ImageProviderPanel></ImageProviderPanel>
  </div>
</template>

<script>
import CesiumMenu from './components/CesiumMenu.vue'
import LonandLat from './components/LonandLat.vue'
import ImageProviderControl from './components/ImageProviderControl.vue'
import ImageProviderPanel from './components/ImageProviderPanel.vue'
export default {
  name: 'app',
  components: {
    'CesiumMenu': CesiumMenu,
    'LonandLat': LonandLat,
    'ImageProviderControl': ImageProviderControl,
    'ImageProviderPanel': ImageProviderPanel
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