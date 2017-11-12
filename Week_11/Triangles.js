function Trianglemaker() {
 
    var size = prompt("Please enter size:");
    var symbol=prompt("Please enter a symbol:")
    var count=prompt("Please enter count:")
    var triangle="";
    for (var i=0;i<size;i++) {
        var symbolcount=(2*i)+1;
        var Space=" ";
        console.log((symbol.repeat(symbolcount))+"\n");
        triangle+=(symbol.repeat(symbolcount)+"<br>");

    }
    var trian=triangle.repeat(count)
    document.getElementById("Triangles").innerHTML = trian;
}