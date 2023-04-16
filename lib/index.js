import pathSelector from "./components/entryPoint.vue";
export default {
  install: (app) => {
    app.component("path-selector", pathSelector);
  },
};
