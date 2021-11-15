const $ = require("jquery");

const pTag = document.createElement("p");
pTag.append("This text comes from the main index.js file");

$("#root").append(pTag);

console.log("Hell o' a world. Let's make it red.");
