const $ = require("jquery");

const pTag = document.createElement("p");
pTag.append("This text comes from the view specific ABOUT/index.js file");

$("#root").append(pTag);

console.log("Welcome to the About page.");
