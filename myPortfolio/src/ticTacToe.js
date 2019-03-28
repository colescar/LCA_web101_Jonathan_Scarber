var gameMarker = "X";

function changeMarkerToX(){
    gameMarker ="X"
    console.log("The X Button Was Clicked");
}

function changeMarkerToO(){
    gameMarker="O"
    console.log("The O Button Was Clicked");
}

function placeMark(divId){
    var box = document.getElementById(divId);
    box.innerHTML = gameMarker;
}