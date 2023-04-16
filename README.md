# path-selector

This package uses by default the world map svg from [mapsvg](http://mapsvg.com)

Create a modal that can listen for any selected path inside it

(Example)[https://codesandbox.io/s/path-selector-2j4trz?file=/src/App.vue]

## Install

```js
npm i path-selector
```

Then inside your main.js (ts)

```js
import pathSelector from "path-selector";

import "path-selector/dist/style.css";

createApp(App).use(pathSelector).mount("#app");
```

## How to use

importing the component you´ll see the trigger button and the default SVG

```html
<path-selector />
```

## add styles to the buttons

### openButton slot

For editing the trigger button you could use the openButton named slot

```html
<path-selector>
  <template #openButton="{ showModal }">
    <button @click="showModal">Open my SVG</button>
  </template>
</path-selector>
```

The showModal function opens the modal

### closeButton

For editing the close button you could use the closeButton named slot

```html
<path-selector>
  <template #closeButton="{ hideModal }">
    <button @click="hideModal">Close modal</button>
  </template>
</path-selector>
```

The hideModal function close the modal
Additionally if you don't want to show this button you could pass the props: "hasCloseButton" by default is true

## add your own SVG

For use your own SVG you could use the svg named slot

```html
<path-selector>
  <template #svg>
    <my-super-svg />
  </template>
</path-selector>
```

Note that here we pass a vue component as a SVG not an image or a inline svg

Todo this is as simple as create a new vue component an inside the template tag add the path without groups tags <g></g>

```html
<!-- my-super-svg -->
<template>
  <path id="CL" />
  <path id="UR" />
  <path id="AR" />
  // ...
</template>
```

This will display the new SVG and also apply hover styles when you open the modal, but you need one more step to make it selectable

Note that in the last example we added the IDs this is important because this is the way the plugin will differentiate the paths

Now you just need to pass a JSON with an ID properties, that match the IDs of SVG, Example:

```json
...
{
  "name": "Chile",
  "dialCode": "+56",
  "id": "CL",
  "flag": "https://www.countryflags.io/CL/flat/64.png"
},
...
```

In this example the id="CL" will match with the path that has ID="CL", so, when you press will return all the JSON data

now we just need to listen the selectedPath event, and we're done, you have your own svg with selectable paths

```html
<template>
  <path-selector
    @selectedPath="(path) => MYFUNC(path)"
    hoverColor="red"
    :svgData="MYJSON"
  >
    <template #svg>
      <my-super-svg />
    </template>
  </path-selector>
</template>
```

### how it works

By default this plugin will recognized each path, then when you select a path will search the id attribute in the JSON and return all the data.

You could pass virtually any SVG that you want (with the right format)

Note: This package works great with the [mapsvg](http://mapsvg.com) maps.

## Props

| Props          | Description                                    | Default        |
| -------------- | ---------------------------------------------- | -------------- |
| svgData        | Json to map in every path available on the svg | world-map      |
| viewBox        | Custom viewBox values for an svg               | "0 0 1025 650" |
| pathColor      | Color of the map                               | "#333"         |
| hoverColor     | Color of the map on hover state                | "#c7c7c7"      |
| hasCloseButton | To hidden the close button                     | true           |
| width          | width of the viewPort of the svg               | "100%"         |
| height         | height of the viewPort of the svg              | "75vh"         |
