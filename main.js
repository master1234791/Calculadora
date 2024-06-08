function add(){
    var result=Number(document.getElementById("firstno").value)+
    Number(document.getElementById("secondno").value);
    document.getElementById("resultado1").innerText=result;
}
function sub(){
    var result=Number(document.getElementById("firstno").value)-
    Number(document.getElementById("secondno").value);
    document.getElementById("resultado2").innerText=result;
}
function mul(){
    var result=Number(document.getElementById("firstno").value)*
    Number(document.getElementById("secondno").value);
    document.getElementById("resultado3").innerText=result;
}
function div(){
    var result=Number(document.getElementById("firstno").value)/
    Number(document.getElementById("secondno").value);
    document.getElementById("resultado4").innerText=result;
}
