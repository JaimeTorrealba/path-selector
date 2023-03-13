<script setup>
import { ref, onMounted, onUnmounted, toRefs } from "vue";
import dataWorld from "../assets/world.json";
import svgPanZoom from "@dash14/svg-pan-zoom";
const props = defineProps({
  mapData: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["sendPathUp"]);

const { mapData } = toRefs(props);

const svg = ref(null);

const jsonData = mapData.value.mapJson.length
  ? mapData.value.mapJson
  : dataWorld;

const sendPathUp = (pathNode) => {
  const pathNodeId = pathNode.attributes.id.value;
  const [selectedPath] = jsonData.filter((path) => path.id === pathNodeId);
  emit("sendPathUp", selectedPath ? selectedPath : pathNodeId);
};

onMounted(() => {
  const children = svg.value?.childNodes[0].childNodes;
  for (const node of children) {
    if (node.attributes) {
      node.addEventListener("click", () => sendPathUp(node));
    }
  }
  const panZoomTiger = svgPanZoom(svg.value);
  panZoomTiger.setZoomScaleSensitivity(0.5);
  panZoomTiger.setMaxZoom(20);
  panZoomTiger.setMinZoom(1);
});
onUnmounted(() => {
  window.removeEventListener("click", sendPathUp);
});
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="mapData.width"
    :height="mapData.height"
    :viewBox="mapData.viewBox"
    aria-labelledby="map"
    role="presentation"
    ref="svg"
    id="mapSvg"
  >
    <g :fill="mapData.mapColor" class="svg-pan-zoom_viewport">
      <slot />
    </g>
  </svg>
</template>

<style>
svg {
  display: block;
}
#mapSvg path {
  transition: all 0.5s;
}
#mapSvg path:hover {
  cursor: pointer;
  fill: v-bind("mapData.hoverColor");
}
</style>
