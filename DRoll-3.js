var place3 = 0
var D23 = 0
var Player3Stun = 0
function Dice3() {
    if (D33 == 2){
        if (Player3Stun > 0) {
            Lice4();
            D33 = 1
            setTimeout(D14, 1000)
            Player3Stun -= 2
            document.getElementById("butt3").classList.add('AlmostDice')
        } else {    
            DiceRole3();
            DiceSpin3();
            Lice4();
        }
    } else {
        console.log(Player4Stun)
    }
}
function DiceRole3() {
    var D63 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("Dsix-3").innerHTML = D63;
    place3 += D63;
    D23 = place3 - D63;
    let i = 0;
    while (place3 === place2 || place3 === place || place3 === place4 || i == 0) {
        if (place3 === place2 || place3 === place || place3 === place4){
            place3 += 1;
        } else{
            document.getElementById("Place-3").innerHTML = place3;
            if (D63 == 1){
                DiceRand3()
                setTimeout(DiceOne3, 1000)
            } else if (D63 == 2){
                DiceRand3()
                setTimeout(DiceTwo3, 1000)
            } else if (D63 == 3){
                DiceRand3()
                setTimeout(DiceThree3, 1000)
            } else if (D63 == 4){
                DiceRand3()
                setTimeout(DiceFour3, 1000)
            } else if (D63 == 5){
                DiceRand3()
                setTimeout(DiceFive3, 1000)
            } else if (D63 == 6){
                DiceRand3()
                setTimeout(DiceSix3, 1000)
            } else{
                alert('Error')
            }
            i++
        }
    }
    document.getElementById("box-3").classList.remove('TriggerSpin')
}

function DiceSpin3() {
    document.getElementById("box-3").classList.add('TriggerSpin');
    D33 = 1
    setTimeout(D14, 1000)
}

function D14(){
    D34 = 2
    document.getElementById("Sidebar7").classList.remove('Danger')
    LizardStun3()
    LizzDice3()
    if (place3 >= 126){
        document.getElementById('Space127').classList.add('Character3')
        setTimeout(wincheck, 500)
    } else {
        document.getElementById(tiles[place3]).classList.add('Character3')
    }
    document.getElementById(tiles[D23]).classList.remove('Character3')
    document.getElementById('Oven2').remove();
}


function Lice3() {
    document.getElementById("box-3").classList.remove('TriggerSpin')
    document.getElementById("butt1").classList.remove('ButtDice')
    document.getElementById("butt2").classList.remove('ButtDice')
    document.getElementById("butt3").classList.add('ButtDice')
    document.getElementById("butt4").classList.remove('ButtDice')
    document.getElementById("butt1").classList.add('RedDice')
    document.getElementById("butt2").classList.add('RedDice')
    setTimeout(Lice33, 1000)
}

function Lice33() {
    document.getElementById("butt3").classList.remove('RedDice')
    document.getElementById("butt1").classList.remove('AlmostDice')
    document.getElementById("butt2").classList.remove('AlmostDice')
    document.getElementById("butt3").classList.remove('AlmostDice')
    document.getElementById("butt4").classList.remove('AlmostDice')
    ItemCheck3()
}

function DiceRand3() {
    var D53 = Math.floor(Math.random() * 6) + 1;
    if (D53 == 1){
        DiceOne3()
    } else if (D53 == 2){
        DiceTwo3()
    } else if (D53 == 3){
        DiceThree3()
    } else if (D53 == 4){
        DiceFour3()
    } else if (D53 == 5){
        DiceFive3()
    } else if (D53 == 6){
        DiceSix3()
    } else{
        alert('Error')
    }
    var D53 = Math.floor(Math.random() * 6) + 1;
    if (D53 == 1){
        setTimeout(DiceOne3, 500)
    } else if (D53 == 2){
        setTimeout(DiceTwo3, 500)
    } else if (D53 == 3){
        setTimeout(DiceThree3, 500)
    } else if (D53 == 4){
        setTimeout(DiceFive3, 500)
    } else if (D53 == 5){
        setTimeout(DiceFive3, 500)
    } else if (D53 == 6){
        setTimeout(DiceSix3, 500)
    } else{
        alert('Error')
    }
}

function DiceOne3() {
    document.getElementById("box1-3").classList.remove('DiceOn')
    document.getElementById("box3-3").classList.remove('DiceOn')
    document.getElementById("box4-3").classList.remove('DiceOn')
    document.getElementById("box5-3").classList.add('DiceOn')
    document.getElementById("box6-3").classList.remove('DiceOn')
    document.getElementById("box7-3").classList.remove('DiceOn')
    document.getElementById("box9-3").classList.remove('DiceOn')
}

function DiceTwo3() {
    document.getElementById("box1-3").classList.add('DiceOn')
    document.getElementById("box3-3").classList.remove('DiceOn')
    document.getElementById("box4-3").classList.remove('DiceOn')
    document.getElementById("box5-3").classList.remove('DiceOn')
    document.getElementById("box6-3").classList.remove('DiceOn')
    document.getElementById("box7-3").classList.remove('DiceOn')
    document.getElementById("box9-3").classList.add('DiceOn')
}

function DiceThree3() {
    document.getElementById("box1-3").classList.add('DiceOn')
    document.getElementById("box3-3").classList.remove('DiceOn')
    document.getElementById("box4-3").classList.remove('DiceOn')
    document.getElementById("box5-3").classList.add('DiceOn')
    document.getElementById("box6-3").classList.remove('DiceOn')
    document.getElementById("box7-3").classList.remove('DiceOn')
    document.getElementById("box9-3").classList.add('DiceOn')
}

function DiceFour3() {
    document.getElementById("box1-3").classList.add('DiceOn')
    document.getElementById("box3-3").classList.add('DiceOn')
    document.getElementById("box4-3").classList.remove('DiceOn')
    document.getElementById("box5-3").classList.remove('DiceOn')
    document.getElementById("box6-3").classList.remove('DiceOn')
    document.getElementById("box7-3").classList.add('DiceOn')
    document.getElementById("box9-3").classList.add('DiceOn')
}

function DiceFive3() {
    document.getElementById("box1-3").classList.add('DiceOn')
    document.getElementById("box3-3").classList.add('DiceOn')
    document.getElementById("box4-3").classList.remove('DiceOn')
    document.getElementById("box5-3").classList.add('DiceOn')
    document.getElementById("box6-3").classList.remove('DiceOn')
    document.getElementById("box7-3").classList.add('DiceOn')
    document.getElementById("box9-3").classList.add('DiceOn')
}

function DiceSix3() {
    document.getElementById("box1-3").classList.add('DiceOn')
    document.getElementById("box3-3").classList.add('DiceOn')
    document.getElementById("box4-3").classList.add('DiceOn')
    document.getElementById("box5-3").classList.remove('DiceOn')
    document.getElementById("box6-3").classList.add('DiceOn')
    document.getElementById("box7-3").classList.add('DiceOn')
    document.getElementById("box9-3").classList.add('DiceOn')
}