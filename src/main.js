import { createApp } from "vue";
import App from "./App.vue";
import svgSelector from "./index";

const app = createApp(App);

app.use(svgSelector);

app.mount("#app");
