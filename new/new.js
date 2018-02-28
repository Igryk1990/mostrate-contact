function clickOn() {
var elem = document.getElementById("yes");
elem.style.cssText = "position:fixed; color: red";
var a = window.screen.width-100;
var b = window.screen.heigth;
elem.style.left = a + "px";
elem.style.bottom = b + "px";
};
function clickON() {
var elem = document.getElementById("no");
elem.style.cssText = "position:fixed; color: red";
var a = window.screen.width-100;
var b = window.screen.heigth;
elem.style.left = a + "px";
elem.style.bottom = b + "px";
};