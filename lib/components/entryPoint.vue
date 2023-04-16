<script setup>
import { ref } from "vue";
import svgHandler from "./svgHandler.vue";
import slotDefaultMap from "./defaultWorldMap.vue";

const props = defineProps({
  hasCloseButton: {
    type: Boolean,
    required: false,
    default: true,
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
  pathColor: {
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
  svgData: {
    type: Array,
    required: false,
    default: () => [],
  },
});
const emit = defineEmits(["selectedPath"]);

const modal = ref(false);

const showModal = () => {
  modal.value = true;
};

const hideModal = () => {
  modal.value = false;
};

const selectPath = (path) => {
  emit("selectedPath", path);
  modal.value = false;
};
</script>
<template>
  <slot name="openButton" :showModal="showModal">
    <button @click="modal = true">Open modal</button>
  </slot>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modal" class="modal-path-selector-mask">
        <div class="modal-path-selector-container">
          <slot name="closeButton" :hideModal="hideModal">
            <button
              class="modal-path-selector-default-button"
              @click="modal = false"
              v-if="hasCloseButton"
            >
              Close
            </button>
          </slot>
          <svg-handler
            :svgProps="props"
            @sendPathUp="(path) => selectPath(path)"
          >
            <slot name="svg">
              <slotDefaultMap />
            </slot>
          </svg-handler>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style>
.modal-path-selector-mask {
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

.modal-path-selector-container {
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
  .modal-path-selector-container {
    min-height: 50vh;
  }
}

.modal-path-selector-default-button {
  float: right;
}

.modal-path-selector-enter-from {
  opacity: 0;
}

.modal-path-selector-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-path-selector-container,
.modal-leave-to .modal-path-selector-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
