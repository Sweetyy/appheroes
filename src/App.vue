<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  font-size: 16px;
}

#app {
  font-family: Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
  margin-top: 60px;
}

@font-face {
  font-family: "heroes-font";
  src:url("assets/fonts/heroes-font.eot");
  src:url("assets/fonts/heroes-font.eot?#iefix") format("embedded-opentype"),
    url("assets/fonts/heroes-font.woff") format("woff"),
    url("assets/fonts/heroes-font.ttf") format("truetype"),
    url("assets/fonts/heroes-font.svg#heroes-font") format("svg");
  font-weight: normal;
  font-style: normal;

}

[data-icon]:before {
  font-family: "heroes-font" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^="icon-"]:before,
[class*=" icon-"]:before {
  font-family: "heroes-font" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-home:before {
  content: "\61";
}
.icon-heroes:before {
  content: "\62";
}
.icon-about:before {
  content: "\63";
}

@keyframes fadein {
  0%   {opacity: 0}
  100% {opacity: 1}
}

.fadein {
  animation: fadein 1s;
}

h1, h2, h3 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  cursor: pointer;
  color: #42b983;
}

p {
  margin: 0;
}

.form-group {
  margin-bottom: 15px;
}

.form-heroe {
  font-family: inherit;
  width: 100%;
  padding: 10px 14px;
  border-radius: 4px;
  border: solid 1px lightgray;
  transition: all 0.25s;
  resize: none;
  color: slategrey;
}

.form-heroe::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  font-style: italic;
  color: lightgray;
}
.form-heroe::-moz-placeholder { /* Firefox 19+ */
  font-style: italic;
  color: lightgray;
}
.form-heroe:-ms-input-placeholder { /* IE 10+ */
  font-style: italic;
  color: lightgray;
}
.form-heroe:-moz-placeholder { /* Firefox 18- */
  font-style: italic;
  color: lightgray;
}

.form-heroe:focus, .form-heroe:active {
  outline: 0;
  border-color: darkgray;
}

.form-heroe:focus::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: darkgray;
}
.form-heroe:focus::-moz-placeholder { /* Firefox 19+ */
  color: darkgray;
}
.form-heroe:focus:-ms-input-placeholder { /* IE 10+ */
  color: darkgray;
}
.form-heroe:focus:-moz-placeholder { /* Firefox 18- */
  color: darkgray;
}

.btn-sweet {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 2px;
  background: #42b983;
  letter-spacing: 0.5px;
  transition: all 0.25s;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
}

.btn-sweet[disabled] {
  opacity: 0.8;
  cursor: not-allowed;
}

.btn-sweet.btn-fat {
  padding: 1.2rem 2.6rem;
  font-size: 1.1em;
}

.flex-box {
  display: flex;
  align-items: center;
}

.flex-start {
  justify-content: flex-start;
}

.flex-end {
  justify-content: flex-end;
}

.flex-between {
  justify-content: space-between;
}
</style>
