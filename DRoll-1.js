var place = 0
function Dice(){
    DiceRole();
    DiceSpin();
    Lice2();
    Lice3();
    Lice4();
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
}

function Lice() {
    document.getElementById("box").classList.remove('TriggerSpin')
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