document.write(typeof 45);
document.write("<br>");

document.write(5+"10");
document.write("<br>");

document.write(5<35);
document.write("<br>");

console.log(2+2);
console.log(4>6);

document.write(3*2==7-1);
document.write("<br>");

document.write("gary"==="gary");
document.write("<br>");

document.write("gary"===20);
document.write("<br>");

document.write("20"===20);
document.write("<br>");

document.write("gary"==="matycich");
document.write("<br>");

document.write(4>=4 && 6>2);
document.write("<br>");

document.write(4>=4 && 6<2);
document.write("<br>");

document.write(4>=4 || 6>2);
document.write("<br>");

document.write(4>4 || 6<2);

function my_Infinity() {
    var result = 5E310;
    document.getElementById("infinity").innerHTML = result;
}

function my_NegativeInfinity() {
    var result = -5E310;
    document.getElementById("-infinity").innerHTML = result;
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(35>4);
}