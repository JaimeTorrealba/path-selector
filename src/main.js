import { createApp } from "vue";
import App from "./App.vue";
import MapSvgSelector from "./index";

const app = createApp(App);

app.use(MapSvgSelector);

app.mount("#app");
