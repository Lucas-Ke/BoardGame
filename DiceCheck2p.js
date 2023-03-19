var D4 = Math.floor(Math.random() * 4) + 1;
var D31 = 0;
if (D4 == 1){
    document.getElementById("butt1").classList.add('ButtDice');
    document.getElementById("butt2").classList.add('RedDice');
    document.getElementById("butt3").classList.add('RedDice');
    document.getElementById("butt4").classList.add('RedDice');
    var D31 = 2;
    var D32 = 1;
    var D33 = 1;
    var D34 = 1;
} else if (D4 == 2){
    document.getElementById("butt1").classList.add('RedDice')
    document.getElementById("butt2").classList.add('ButtDice')
    document.getElementById("butt3").classList.add('RedDice')
    document.getElementById("butt4").classList.add('RedDice')
    var D31 = 1;
    var D32 = 2;
    var D33 = 1;
    var D34 = 1;
} else if (D4 == 3){
    document.getElementById("butt1").classList.add('RedDice')
    document.getElementById("butt2").classList.add('RedDice')
    document.getElementById("butt3").classList.add('ButtDice')
    document.getElementById("butt4").classList.add('RedDice')
    var D31 = 1;
    var D32 = 1;
    var D33 = 2;
    var D34 = 1;
    Dice3()
} else if (D4 == 4){
    document.getElementById("butt1").classList.add('RedDice')
    document.getElementById("butt2").classList.add('RedDice')
    document.getElementById("butt3").classList.add('RedDice')
    document.getElementById("butt4").classList.add('ButtDice')
    var D31 = 1;
    var D32 = 1;
    var D33 = 1;
    var D34 = 2;
    Dice4()
} else{
    alert('Error')
}