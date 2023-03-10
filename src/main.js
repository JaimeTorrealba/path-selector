import { createApp } from "vue";
import App from "./App.vue";
import svgMapSelector from "./index";

const app = createApp(App);

app.use(svgMapSelector);

app.mount("#app");
