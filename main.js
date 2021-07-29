var id1 = "hover-1"
var id2 = "hover-2"
var id3 = "hover-3"
var id4 = "hover-4"
var id5 = "hover-5"
var id6 = "hover-6"
var id7 = "hover-7"

var containerMain = "containerMain"
var containerContact = "containerContact"

function mouseOver(tmpId) {
    document.getElementById(tmpId).style.opacity = "100%";
}

function mouseOut(tmpId) {
    document.getElementById(tmpId).style.opacity = "0%";
}

function onClickContact(containerMain, containerContact) {
    document.getElementById(containerMain).style.opacity = "0%";
    document.getElementById(containerContact).style.opacity = "100%";
    document.getElementById("contactBtn").style.opacity = "0%"; 
    document.getElementById(containerContact).style.zIndex = "999"; 
}

function onQuitContact(container) {
    document.getElementById(containerMain).style.opacity = "100%";
    document.getElementById(containerContact).style.opacity = "0%";
    document.getElementById("contactBtn").style.opacity = "100%";
    document.getElementById(containerContact).style.zIndex = "-1"; 
}
