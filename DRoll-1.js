var place = 0
function Dice(){
    if (D31 == 2){
        DiceRole();
        DiceSpin();
        Lice2();
    }
    else{
        console.log(Hello)
    }
}

function DiceRole() {
    var D6 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("Dsix").innerHTML = D6;
    place += D6;
    document.getElementById("Place").innerHTML = place;
    if (D6 == 1){
        DiceRand()
        setTimeout(DiceOne, 1000)
    } else if (D6 == 2){
        DiceRand()
        setTimeout(DiceTwo, 1000)
    } else if (D6 == 3){
        DiceRand()
        setTimeout(DiceThree, 1000)
    } else if (D6 == 4){
        DiceRand()
        setTimeout(DiceFour, 1000)
    } else if (D6 == 5){
        DiceRand()
        setTimeout(DiceFive, 1000)
    } else if (D6 == 6){
        DiceRand()
        setTimeout(DiceSix, 1000)
    } else{
        alert('Error')
    }
    document.getElementById("box").classList.remove('TriggerSpin')
}

function DiceSpin() {
    document.getElementById("box").classList.add('TriggerSpin');
    D31 = 1
    setTimeout(D12, 1000)
}
function D12(){
    D32 = 2
    // Mover()
    console.log(tiles)
    console.log(tiles[place])
    // document.getElementsByClassName(tiles[D6]).appendChild(guy1);
    // const para = document.createElement("placeholden");
    // const node = document.createTextNode('[]')
    // para.appendChild(node);
    // document.getElementById('Oven').appendChild(para);
    var img = document.createElement("img");
    img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
    var src = document.getElementsByClassName(tiles[place]);
    src.appendChild(img);
}


function Lice() {
    document.getElementById("box").classList.remove('TriggerSpin')
    document.getElementById("butt1").classList.add('ButtDice')
    document.getElementById("butt2").classList.remove('ButtDice')
    document.getElementById("butt3").classList.remove('ButtDice')
    document.getElementById("butt4").classList.remove('ButtDice')
    setTimeout(Lice11, 1000)
    document.getElementById("butt2").classList.add('RedDice')
    document.getElementById("butt3").classList.add('RedDice')
    document.getElementById("butt4").classList.add('RedDice')
}

function Lice11() {
    document.getElementById("butt1").classList.remove('RedDice')
}

function DiceRand() {
    var D5 = Math.floor(Math.random() * 6) + 1;
    if (D5 == 1){
        DiceOne()
    } else if (D5 == 2){
        DiceTwo()
    } else if (D5 == 3){
        DiceThree()
    } else if (D5 == 4){
        DiceFour()
    } else if (D5 == 5){
        DiceFive()
    } else if (D5 == 6){
        DiceSix()
    } else{
        alert('Error')
    }
    var D5 = Math.floor(Math.random() * 6) + 1;
    if (D5 == 1){
        setTimeout(DiceOne, 500)
    } else if (D5 == 2){
        setTimeout(DiceTwo, 500)
    } else if (D5 == 3){
        setTimeout(DiceThree, 500)
    } else if (D5 == 4){
        setTimeout(DiceFive, 500)
    } else if (D5 == 5){
        setTimeout(DiceFive, 500)
    } else if (D5 == 6){
        setTimeout(DiceSix, 500)
    } else{
        alert('Error')
    }
}

function DiceOne() {
    document.getElementById("box1").classList.remove('DiceOn')
    document.getElementById("box3").classList.remove('DiceOn')
    document.getElementById("box4").classList.remove('DiceOn')
    document.getElementById("box5").classList.add('DiceOn')
    document.getElementById("box6").classList.remove('DiceOn')
    document.getElementById("box7").classList.remove('DiceOn')
    document.getElementById("box9").classList.remove('DiceOn')
}

function DiceTwo() {
    document.getElementById("box1").classList.add('DiceOn')
    document.getElementById("box3").classList.remove('DiceOn')
    document.getElementById("box4").classList.remove('DiceOn')
    document.getElementById("box5").classList.remove('DiceOn')
    document.getElementById("box6").classList.remove('DiceOn')
    document.getElementById("box7").classList.remove('DiceOn')
    document.getElementById("box9").classList.add('DiceOn')
}

function DiceThree() {
    document.getElementById("box1").classList.add('DiceOn')
    document.getElementById("box3").classList.remove('DiceOn')
    document.getElementById("box4").classList.remove('DiceOn')
    document.getElementById("box5").classList.add('DiceOn')
    document.getElementById("box6").classList.remove('DiceOn')
    document.getElementById("box7").classList.remove('DiceOn')
    document.getElementById("box9").classList.add('DiceOn')
}

function DiceFour() {
    document.getElementById("box1").classList.add('DiceOn')
    document.getElementById("box3").classList.add('DiceOn')
    document.getElementById("box4").classList.remove('DiceOn')
    document.getElementById("box5").classList.remove('DiceOn')
    document.getElementById("box6").classList.remove('DiceOn')
    document.getElementById("box7").classList.add('DiceOn')
    document.getElementById("box9").classList.add('DiceOn')
}

function DiceFive() {
    document.getElementById("box1").classList.add('DiceOn')
    document.getElementById("box3").classList.add('DiceOn')
    document.getElementById("box4").classList.remove('DiceOn')
    document.getElementById("box5").classList.add('DiceOn')
    document.getElementById("box6").classList.remove('DiceOn')
    document.getElementById("box7").classList.add('DiceOn')
    document.getElementById("box9").classList.add('DiceOn')
}

function DiceSix() {
    document.getElementById("box1").classList.add('DiceOn')
    document.getElementById("box3").classList.add('DiceOn')
    document.getElementById("box4").classList.add('DiceOn')
    document.getElementById("box5").classList.remove('DiceOn')
    document.getElementById("box6").classList.add('DiceOn')
    document.getElementById("box7").classList.add('DiceOn')
    document.getElementById("box9").classList.add('DiceOn')
}