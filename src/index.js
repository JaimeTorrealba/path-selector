import mapSvg from "./components/entryPoint.vue";
export default {
  install: (app) => {
    app.component("map-svg", mapSvg);
  },
};
