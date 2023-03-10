var place4 = 0;
function Dice4() {
    if (D34 == 2){
        DiceRole4();
        DiceSpin4();
        Lice();
    }
    else{
        console.log(Hello)
    }
}

function DiceRole4() {
    var D64 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("Dsix-4").innerHTML = D64;
    place4 += D64;
    document.getElementById("Place-4").innerHTML = place4;
    if (D64 == 1){
        DiceRand4()
        setTimeout(DiceOne4, 1000)
    } else if (D64 == 2){
        DiceRand4()
        setTimeout(DiceTwo4, 1000)
    } else if (D64 == 3){
        DiceRand4()
        setTimeout(DiceThree4, 1000)
    } else if (D64 == 4){
        DiceRand4()
        setTimeout(DiceFour4, 1000)
    } else if (D64 == 5){
        DiceRand4()
        setTimeout(DiceFive4, 1000)
    } else if (D64 == 6){
        DiceRand4()
        setTimeout(DiceSix4, 1000)
    } else{
        alert('Error')
    }
    document.getElementById("box-4").classList.remove('TriggerSpin')
}

function DiceSpin4() {
    document.getElementById("box-4").classList.add('TriggerSpin');
    D34 = 1
    setTimeout(D11, 1000)
}
function D11(){
    D31 = 2
}

function Lice4() {
    document.getElementById("box-4").classList.remove('TriggerSpin')
    document.getElementById("butt1").classList.remove('ButtDice')
    document.getElementById("butt2").classList.remove('ButtDice')
    document.getElementById("butt3").classList.remove('ButtDice')
    document.getElementById("butt4").classList.add('ButtDice')
    document.getElementById("butt1").classList.add('RedDice')
    document.getElementById("butt2").classList.add('RedDice')
    document.getElementById("butt3").classList.add('RedDice')
    setTimeout(Lice44, 1000)
    
}

function Lice44() {
    document.getElementById("butt4").classList.remove('RedDice');
}

function DiceRand4() {
    var D54 = Math.floor(Math.random() * 6) + 1;
    if (D54 == 1){
        DiceOne4()
    } else if (D54 == 2){
        DiceTwo4()
    } else if (D54 == 3){
        DiceThree4()
    } else if (D54 == 4){
        DiceFour4()
    } else if (D54 == 5){
        DiceFive4()
    } else if (D54 == 6){
        DiceSix4()
    } else{
        alert('Error')
    }
    var D54 = Math.floor(Math.random() * 6) + 1;
    if (D54 == 1){
        setTimeout(DiceOne4, 500)
    } else if (D54 == 2){
        setTimeout(DiceTwo4, 500)
    } else if (D54 == 3){
        setTimeout(DiceThree4, 500)
    } else if (D54 == 4){
        setTimeout(DiceFive4, 500)
    } else if (D54 == 5){
        setTimeout(DiceFive4, 500)
    } else if (D54 == 6){
        setTimeout(DiceSix4, 500)
    } else{
        alert('Error')
    }
}

function DiceOne4() {
    document.getElementById("box1-4").classList.remove('DiceOn')
    document.getElementById("box3-4").classList.remove('DiceOn')
    document.getElementById("box4-4").classList.remove('DiceOn')
    document.getElementById("box5-4").classList.add('DiceOn')
    document.getElementById("box6-4").classList.remove('DiceOn')
    document.getElementById("box7-4").classList.remove('DiceOn')
    document.getElementById("box9-4").classList.remove('DiceOn')
}

function DiceTwo4() {
    document.getElementById("box1-4").classList.add('DiceOn')
    document.getElementById("box3-4").classList.remove('DiceOn')
    document.getElementById("box4-4").classList.remove('DiceOn')
    document.getElementById("box5-4").classList.remove('DiceOn')
    document.getElementById("box6-4").classList.remove('DiceOn')
    document.getElementById("box7-4").classList.remove('DiceOn')
    document.getElementById("box9-4").classList.add('DiceOn')
}

function DiceThree4() {
    document.getElementById("box1-4").classList.add('DiceOn')
    document.getElementById("box3-4").classList.remove('DiceOn')
    document.getElementById("box4-4").classList.remove('DiceOn')
    document.getElementById("box5-4").classList.add('DiceOn')
    document.getElementById("box6-4").classList.remove('DiceOn')
    document.getElementById("box7-4").classList.remove('DiceOn')
    document.getElementById("box9-4").classList.add('DiceOn')
}

function DiceFour4() {
    document.getElementById("box1-4").classList.add('DiceOn')
    document.getElementById("box3-4").classList.add('DiceOn')
    document.getElementById("box4-4").classList.remove('DiceOn')
    document.getElementById("box5-4").classList.remove('DiceOn')
    document.getElementById("box6-4").classList.remove('DiceOn')
    document.getElementById("box7-4").classList.add('DiceOn')
    document.getElementById("box9-4").classList.add('DiceOn')
}

function DiceFive4() {
    document.getElementById("box1-4").classList.add('DiceOn')
    document.getElementById("box3-4").classList.add('DiceOn')
    document.getElementById("box4-4").classList.remove('DiceOn')
    document.getElementById("box5-4").classList.add('DiceOn')
    document.getElementById("box6-4").classList.remove('DiceOn')
    document.getElementById("box7-4").classList.add('DiceOn')
    document.getElementById("box9-4").classList.add('DiceOn')
}

function DiceSix4() {
    document.getElementById("box1-4").classList.add('DiceOn')
    document.getElementById("box3-4").classList.add('DiceOn')
    document.getElementById("box4-4").classList.add('DiceOn')
    document.getElementById("box5-4").classList.remove('DiceOn')
    document.getElementById("box6-4").classList.add('DiceOn')
    document.getElementById("box7-4").classList.add('DiceOn')
    document.getElementById("box9-4").classList.add('DiceOn')
}