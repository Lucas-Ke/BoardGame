var place2 = 0
function Dice2() {
    if (D32 == 2){
        DiceRole2();
        DiceSpin2();
        Lice3();
    }
    else{
        console.log(Hello)
    }
}

function DiceRole2() {
    var D62 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("Dsix-2").innerHTML = D62;
    place2 += D62;
    document.getElementById("Place-2").innerHTML = place2;
    if (D62 == 1){
        DiceRand2()
        setTimeout(DiceOne2, 1000)
    } else if (D62 == 2){
        DiceRand2()
        setTimeout(DiceTwo2, 1000)
    } else if (D62 == 3){
        DiceRand2()
        setTimeout(DiceThree2, 1000)
    } else if (D62 == 4){
        DiceRand2()
        setTimeout(DiceFour2, 1000)
    } else if (D62 == 5){
        DiceRand2()
        setTimeout(DiceFive2, 1000)
    } else if (D62 == 6){
        DiceRand2()
        setTimeout(DiceSix2, 1000)
    } else{
        alert('Error')
    }
    document.getElementById("box-2").classList.remove('TriggerSpin')
}

function DiceSpin2() {
    document.getElementById("box-2").classList.add('TriggerSpin');
    D32 = 1
    setTimeout(D13, 1000)
}
function D13(){
    D33 = 2
}


function Lice2() {
    document.getElementById("box-2").classList.remove('TriggerSpin')
    document.getElementById("butt1").classList.remove('ButtDice')
    document.getElementById("butt2").classList.add('ButtDice')
    document.getElementById("butt3").classList.remove('ButtDice')
    document.getElementById("butt4").classList.remove('ButtDice')
    document.getElementById("butt1").classList.add('RedDice')
    setTimeout(Lice22, 1000)
    document.getElementById("butt3").classList.add('RedDice')
    document.getElementById("butt4").classList.add('RedDice')
}

function Lice22() {
    document.getElementById("butt2").classList.remove('RedDice')
}

function DiceRand2() {
    var D52 = Math.floor(Math.random() * 6) + 1;
    if (D52 == 1){
        DiceOne2()
    } else if (D52 == 2){
        DiceTwo2()
    } else if (D52 == 3){
        DiceThree2()
    } else if (D52 == 4){
        DiceFour2()
    } else if (D52 == 5){
        DiceFive2()
    } else if (D52 == 6){
        DiceSix2()
    } else{
        alert('Error')
    }
    var D52 = Math.floor(Math.random() * 6) + 1;
    if (D52 == 1){
        setTimeout(DiceOne2, 500)
    } else if (D52 == 2){
        setTimeout(DiceTwo2, 500)
    } else if (D52 == 3){
        setTimeout(DiceThree2, 500)
    } else if (D52 == 4){
        setTimeout(DiceFive2, 500)
    } else if (D52 == 5){
        setTimeout(DiceFive2, 500)
    } else if (D52 == 6){
        setTimeout(DiceSix2, 500)
    } else{
        alert('Error')
    }
}

function DiceOne2() {
    document.getElementById("box1-2").classList.remove('DiceOn')
    document.getElementById("box3-2").classList.remove('DiceOn')
    document.getElementById("box4-2").classList.remove('DiceOn')
    document.getElementById("box5-2").classList.add('DiceOn')
    document.getElementById("box6-2").classList.remove('DiceOn')
    document.getElementById("box7-2").classList.remove('DiceOn')
    document.getElementById("box9-2").classList.remove('DiceOn')
}

function DiceTwo2() {
    document.getElementById("box1-2").classList.add('DiceOn')
    document.getElementById("box3-2").classList.remove('DiceOn')
    document.getElementById("box4-2").classList.remove('DiceOn')
    document.getElementById("box5-2").classList.remove('DiceOn')
    document.getElementById("box6-2").classList.remove('DiceOn')
    document.getElementById("box7-2").classList.remove('DiceOn')
    document.getElementById("box9-2").classList.add('DiceOn')
}

function DiceThree2() {
    document.getElementById("box1-2").classList.add('DiceOn')
    document.getElementById("box3-2").classList.remove('DiceOn')
    document.getElementById("box4-2").classList.remove('DiceOn')
    document.getElementById("box5-2").classList.add('DiceOn')
    document.getElementById("box6-2").classList.remove('DiceOn')
    document.getElementById("box7-2").classList.remove('DiceOn')
    document.getElementById("box9-2").classList.add('DiceOn')
}

function DiceFour2() {
    document.getElementById("box1-2").classList.add('DiceOn')
    document.getElementById("box3-2").classList.add('DiceOn')
    document.getElementById("box4-2").classList.remove('DiceOn')
    document.getElementById("box5-2").classList.remove('DiceOn')
    document.getElementById("box6-2").classList.remove('DiceOn')
    document.getElementById("box7-2").classList.add('DiceOn')
    document.getElementById("box9-2").classList.add('DiceOn')
}

function DiceFive2() {
    document.getElementById("box1-2").classList.add('DiceOn')
    document.getElementById("box3-2").classList.add('DiceOn')
    document.getElementById("box4-2").classList.remove('DiceOn')
    document.getElementById("box5-2").classList.add('DiceOn')
    document.getElementById("box6-2").classList.remove('DiceOn')
    document.getElementById("box7-2").classList.add('DiceOn')
    document.getElementById("box9-2").classList.add('DiceOn')
}

function DiceSix2() {
    document.getElementById("box1-2").classList.add('DiceOn')
    document.getElementById("box3-2").classList.add('DiceOn')
    document.getElementById("box4-2").classList.add('DiceOn')
    document.getElementById("box5-2").classList.remove('DiceOn')
    document.getElementById("box6-2").classList.add('DiceOn')
    document.getElementById("box7-2").classList.add('DiceOn')
    document.getElementById("box9-2").classList.add('DiceOn')
}