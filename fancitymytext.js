let bigButton = document.getElementById("bigButton");
let mooButton = document.getElementById("moo");
let textMsg = document.getElementById("textbox");
let fancyRadio = document.getElementById("fancyRadio");
let boringRadio = document.getElementById("boringRadio");

bigButton.onclick = outputMessage;
boringRadio.onclick = goAway;
fancyRadio.onclick = textStyle;
mooButton.onclick = Moo;

function outputMessage() {
    console.log("click");
    alert("Hello World!");
}

function textStyle() {

    alert("onchange called for fancyButton");
    textMsg.style.fontFamily = "Cursive";
    textMsg.style.fontWeight = "bold"

}

function goAway() {
    textMsg.style = "none";

}

function Moo() {
    textMsg.value = textMsg.value.toUpperCase();
    let text = textMsg.value;
    let textParts = text.split('.');
    textMsg.value = textParts.join("-MOO");
    //console.log(text);

}