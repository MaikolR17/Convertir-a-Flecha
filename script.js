document.getElementById("button").onclick = () => (setBackgroundColorById("paragraph", "blue"));

document.getElementById("alert").onclick = () => (alert(document.getElementById("popup-input").value));

document.getElementById("hover-this").onmouseover = () => (setBackgroundColorById("body", "red"));

document.getElementById("hover-this").onmouseout = () => (setBackgroundColorById("body", "white"));

const getValueFromId = (id) => document.getElementById(id).value;

const setBackgroundColorById = (id, color) => document.getElementById(id).style = "background-color: " + color;

const mouseOverFunction = (el) => el.style = "background-color: black";

document.getElementById("changeBackground").onclick = () => setBackgroundColor();
 
const setBackgroundColor = () => {
    const color = document.getElementById("changeColor").value
    document.getElementById("changeBackground").style = "background-color: " + color;
};
