// index_cdn.js — forces all Emscripten files to load from CDN
var Module = Module || {};

// Override locateFile so the loader always pulls from CDN
Module.locateFile = function(path) {
  if (path.endsWith(".wasm")) {
    return "https://cdn.jsdelivr.net/gh/wnl-perez/Drive-mad@main/Drive-mad/webapp/index.wasm";
  }
  if (path.endsWith(".data")) {
    return "https://cdn.jsdelivr.net/gh/wnl-perez/Drive-mad@main/Drive-mad/webapp/index.data";
  }
  return path; // fallback for other files
};

// Optional: assign the canvas if you want
Module.canvas = document.getElementById("canvas");

// Load the main Emscripten script
var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/wnl-perez/Drive-mad@main/Drive-mad/webapp/source_min.js";
script.defer = true;
document.body.appendChild(script);

var indexScript = document.createElement("script");
indexScript.src = "https://cdn.jsdelivr.net/gh/wnl-perez/Drive-mad@main/Drive-mad/webapp/index.js";
indexScript.defer = true;
document.body.appendChild(indexScript);
