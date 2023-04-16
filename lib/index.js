import svgSelector from "./components/entryPoint.vue";
export default {
  install: (app) => {
    app.component("path-selector", svgSelector);
  },
};
