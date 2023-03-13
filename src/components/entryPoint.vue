<script setup>
import { ref } from "vue";
import mapSvg from "./mapSvgHandler.vue";
import slotDefaultMap from "./defaultWorldMap.vue";

const props = defineProps({
  hiddenCloseButton: {
    type: Boolean,
    required: false,
    default: false,
  },
  width: {
    type: [String, Number],
    required: false,
    default: "100%",
  },
  height: {
    type: [String, Number],
    required: false,
    default: () => (window.innerWidth < 768 ? "50vh" : "75vh"),
  },
  mapColor: {
    type: String,
    required: false,
    default: "#333",
  },
  hoverColor: {
    type: String,
    required: false,
    default: "#c7c7c7",
  },
  viewBox: {
    type: String,
    required: false,
    default: "0 0 1025 650",
  },
  mapJson: {
    type: Array,
    required: false,
    default: () => [],
  },
});
const emit = defineEmits(["selectedPath"]);

const showModal = ref(false);

const selectPath = (path) => {
  emit("selectedPath", path);
  showModal.value = false;
};
</script>
<template>
  <button @click="showModal = true">
    <slot name="openButton"> Open map </slot>
  </button>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="showModal" class="modal-mask">
        <div class="modal-container">
          <button
            class="modal-default-button"
            @click="showModal = false"
            v-if="!hiddenCloseButton"
          >
            <slot name="closeButton"> Close </slot>
          </button>
          <map-svg :mapData="props" @sendPathUp="(path) => selectPath(path)">
            <slot name="map">
              <slotDefaultMap />
            </slot>
          </map-svg>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style scoped>
.modal-svg-selector-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-svg-selector-container {
  min-width: 80vw;
  min-height: 80vh;
  margin: auto;
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
@media screen and (max-width: 768px) {
  .modal-svg-selector-container {
    min-height: 50vh;
  }
}

.modal-svg-selector-default-button {
  float: right;
}

.modal-svg-selector-enter-from {
  opacity: 0;
}

.modal-svg-selector-leave-to {
  opacity: 0;
}

.modal-svg-selector-enter-from .modal-svg-selector-container,
.modal-svg-selector-leave-to .modal-svg-selector-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
