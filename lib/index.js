import svgSelector from "./components/entryPoint.vue";
export default {
  install: (app) => {
    app.component("svg-selector", svgSelector);
  },
};
