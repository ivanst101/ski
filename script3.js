function zamena(polje1,polje2) {
  var pom = document.getElementById(polje1).className;
  document.getElementById(polje1).className = document.getElementById(polje2).className;
  document.getElementById(polje2).className = pom;
}

function mesanje() {
for (var red=1;red<=3;red++) {
   for (var kolona=1;kolona<=3;kolona++) {
  
    var red2=Math.floor(Math.random()*3 + 1);
    var kolona2=Math.floor(Math.random()*3 + 1);
     
    zamena("polje"+red+kolona,"polje"+red2+kolona2);
  } 
} 
}

function klik(red,kolona) {
  var polje = document.getElementById("polje"+red+kolona);
  var kocka = polje.className;
  if (kocka!="kocka9") { 
       if (kolona<3) {
         if ( document.getElementById("polje"+red+(kolona+1)).className=="kocka9") {
           zamena("polje"+red+kolona,"polje"+red+(kolona+1));
           return;
         }
       }
       if (kolona>1) {
         if ( document.getElementById("polje"+red+(kolona-1)).className=="kocka9") {
           zamena("polje"+red+kolona,"polje"+red+(kolona-1));
           return;
         }
       }
       if (red>1) {
         if ( document.getElementById("polje"+(red-1)+kolona).className=="kocka9") {
           zamena("polje"+red+kolona,"polje"+(red-1)+kolona);
           return;
         }
       }
       if (red<3) {
         if ( document.getElementById("polje"+(red+1)+kolona).className=="kocka9") {
           zamena("polje"+red+kolona,"polje"+(red+1)+kolona);
           return;
         }
       } 
    }
}

