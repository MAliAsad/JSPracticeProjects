
function ageInDays(){
    var birthYear=prompt("What is your year of birth?");
    var AID=(2021-birthYear)*365;
    var h1= document.createElement("h1");
    var textAnswer=document.createTextNode("You are "+AID+" days old");
    h1.setAttribute("id","AID");
    h1.appendChild(textAnswer);
    document.getElementById("result").appendChild(h1);


}

function reset(){
    document.getElementById("AID").remove();
}