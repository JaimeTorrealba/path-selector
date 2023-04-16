import { createApp } from "vue";
import App from "./App.vue";
import pathSelector from "./index";

const app = createApp(App);

app.use(pathSelector);

app.mount("#app");
