let res1 = Math.random();
res1 = Math.floor(res1*6+1);
document.querySelector(".img1").setAttribute("src", "images/dice"+res1+".png"); //`images/dice${randomNumber1()}.png`

let res2 = Math.random();
res2 = Math.floor(res2*6+1);
document.querySelector(".img2").setAttribute("src", "images/dice"+res2+".png"); //`images/dice${randomNumber2()}.png`

let titre = document.querySelector("h1");

if (res1>res2) {
titre.innerText = "🚩Player 1 Wins !";
}
else if (res1<res2) {
titre.innerText = "Player 2 Wins !🚩";
}
else {
titre.innerText = "Draw!";
}

function add(a,b) {
    let test = a+b;
    return test;
}

console.log(add(2,3));