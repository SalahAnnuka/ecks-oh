function setSymbol(){
    var cell = document.getElementById("field").value;
    document.getElementById("item"+cell).style.backgroundImage = "cross.jpg";
    window.alert(cell);

}