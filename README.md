# svg-map-selector

This package uses by default the world map svg from [mapsvg](http://mapsvg.com)

## Install



## How to use

by default the map select the id value of the path.

That ID should match with the id inside the json, to be able to return the entire object.

In this example the default JSON has the following structure, so, when we press the chilean map we will return the following object.

{
    "name": "Chile",
    "dialCode": "+56",
    "id": "CL",
    "flag": "https://www.countryflags.io/CL/flat/64.png"
},

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

| Prop | Description | Type | | Default |
| :----------------- | :------------------------------------------------- | :-------: | | :--------: |
| **mapJson** | Json to map in every path available on the svg | Json | | world-map |
| **viewBox** | Custom viewBox values for an svg | String | |"0 0 1025 650"|
| **mapColor** | Color of the map | String | | "#333" |
| **hoverColor** | Color of the map on hover state | String | | "#c7c7c7" |
| **hiddenCloseButton** | To hidden the close button | Boolean | | false |
| **width** | width of the viewPort of the svg | String | | "100%" |
| **height** | height of the viewPort of the svg | String | | "75vh" |
