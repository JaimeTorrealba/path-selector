# path-selector

This package uses by default the world map svg from [mapsvg](http://mapsvg.com)

Create a modal that can listen for any selected path as you see in the following examples:

## Install
```js
npm i path-selector
```

Then inside your main.js (ts)

```js
import pathSelector from "path-selector";

import "path-selector/dist/style.css"

createApp(App).use(pathSelector).mount('#app')
```

## How to use

By default this plugin select the id value of the path inside the inserted SVG.

That ID should match with the id inside the json, to be able to return the entire object.

In this example the default JSON has the following structure, so, when we press the Chilean map we will return the following object.

{
    "name": "Chile",
    "dialCode": "+56",
    "id": "CL",
    "flag": "https://www.countryflags.io/CL/flat/64.png"
},

You could pass virtually any SVG that you want (with the acepted format) and by default this pluging will recognized each path, then search the id attribute and return it, so here you can create and pass a mapJson that match that criteria to return the desire result.

As mention early by default this package come with the world-map configuration but you can customized to any other SVG.

This package work great with the [mapsvg](http://mapsvg.com) maps.

## Inserting another map (or SVG)

1. First you need to create a new vue component, with just the template
2. You need to insert only the path attributes here, with the respective ID
```js
<template>
    <path id="1" />
    <path id="2" />
    <path id="3" />
    // ...
</template>
```
3. Then you just need to insert into the component as named slot "map"
```js
<template>
<map-svg >
    <template #map >
        <my-super-map />
    </template>
</template>
```
4. Create and pass the respective JSON that match your IDs and insert it with the mapJson prop

5. The event will be listened with the "selectedPath" function so from here you can listen this event and/or pass props
```js
<template>
<map-svg @selectedPath="(path) => MYFUNC(path)" hoverColor="red" mapJson="MYJSON" >
    <template #map >
        <my-super-map />
    </template>
</template>
```
# slots

we have available 3 slots one for the SVG and two for stylized

## SVG slot

## button styles slots

### closeButton

You could pass the content of the close button

- it's not available to change function, it always close the modal
- you could overwritte the css class "modal-default-button" to apply different styles
- if you don't want to show this button you could pass the props, "isHiddenCloseButton" by default is true

### openButton

You could pass the content of the open modal button

- it's not available to change function, it always open the modal

## Props [[1]](#1)

| Props             | Description                                    | Default        |
|-------------------|------------------------------------------------|----------------|
| mapJson           | Json to map in every path available on the svg | world-map      |
| viewBox           | Custom viewBox values for an svg               | "0 0 1025 650" |
| mapColor          | Color of the map                               | "#333"         |
| hoverColor        | Color of the map on hover state                | "#c7c7c7"      |
| hiddenCloseButton | To hidden the close button                     | false          |
| width             | width of the viewPort of the svg               | "100%"         |
| height            | height of the viewPort of the svg              | "75vh"         |
