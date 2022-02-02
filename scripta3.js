function myFunction (){
    var x = document.forms[0];
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + x.elements[i].value + "<br>";
}
    document.getElementById("ispis").innerHTML = txt;