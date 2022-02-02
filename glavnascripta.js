


function myFunction() {
  
    var tekst = ["Bolje vrabac u ruci, nego golub na grani.", "Ko svakoga voli, ne voli nikoga.",
    "Ko drugome jamu kopa, sam u nju upada.", "Četiri čavčića na čunčiću čučeći cijuču.", "Strpljenje je gorko, ali plodovi su mu slatki."];
    let rec = [Math.floor(Math.random() * tekst.length)];
    var element = document.getElementById("umotvorine");
    element.innerHTML = tekst[rec];
    setTimeout(myFunction, 10000);

}
myFunction()






