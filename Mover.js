 
class Player {
    constructor(){
        this.location = 0;
        this.stunned = false;
        this.inventory = [];
    }

}
function playsound(link) {
    let laugh= new Audio(link);
    laugh.play();
}

playsound("sounds/honk.mp3");
let lossMM = document.querySelector(".lossMM")
lossMM.addEventListener ("click", ()=>{  
    console.log("soundplayed")
    playsound("sounds/honk.mp3");
}
)

// items = {
//     {
//         name: 'SugarRush', 'GummyWorm', 'CaramelCurse'
//     }
// }

let spaces = document.querySelectorAll('[class^=Space]');


let board = [];

for (let i = 0; i < spaces.length; i++) {
    board.push(i);
}

console.log(board)
console.log(board[place])

let board2 = [];

for (let i = 0; i < spaces.length; i++) {
    board2.push(i);
}

console.log(board2)
console.log(board2[place2])

const tiles = ['Space1', 'Space2', 'Space3', 'Space4', 'Space5', 'Space6', 'Space7', 'Space8', 'Space9', 'Space10', 'Space11', 'Space12', 'Space13', 'Space14', 'Space15', 'Space16', 'Space17', 'Space18', 'Space19', 'Space20', 'Space21', 'Space22', 'Space23', 'Space24', 'Space25', 'Space26', 'Space27', 'Space28', 'Space29', 'Space30', 'Space31', 'Space32', 'Space33', 'Space34', 'Space35', 'Space36', 'Space37', 'Space38', 'Space39', 'Space40', 'Space41', 'Space42', 'Space43', 'Space44', 'Space45', 'Space46', 'Space47', 'Space48', 'Space49', 'Space50', 'Space51', 'Space52', 'Space53', 'Space54', 'Space55', 'Space56', 'Space57', 'Space58', 'Space59', 'Space60', 'Space61', 'Space62', 'Space63', 'Space64', 'Space65', 'Space66', 'Space67', 'Space68', 'Space69', 'Space70', 'Space71', 'Space72', 'Space73', 'Space74', 'Space75', 'Space76', 'Space77', 'Space78', 'Space79', 'Space80', 'Space81', 'Space82', 'Space83', 'Space84', 'Space85', 'Space86', 'Space87', 'Space88', 'Space89', 'Space90', 'Space91', 'Space92', 'Space93', 'Space94', 'Space95', 'Space96', 'Space97', 'Space98', 'Space99', 'Space100', 'Space101', 'Space102', 'Space103', 'Space104', 'Space105', 'Space106', 'Space107', 'Space108', 'Space109', 'Space110', 'Space111', 'Space112', 'Space113', 'Space114', 'Space115', 'Space116', 'Space117', 'Space118', 'Space119', 'Space120', 'Space121', 'Space122', 'Space123', 'Space124', 'Space125', 'Space126', 'Space127']

var Marsh1 = tiles[Math.floor(Math.random() * 5) + 6]
var Marsh2 = tiles[Math.floor(Math.random() * 5) + 11]
var Marsh3 = tiles[Math.floor(Math.random() * 5) + 16]
var Marsh4 = tiles[Math.floor(Math.random() * 5) + 21]
var Marsh5 = tiles[Math.floor(Math.random() * 5) + 26]
var Marsh6 = tiles[Math.floor(Math.random() * 5) + 31]
var Marsh7 = tiles[Math.floor(Math.random() * 5) + 36]
var Marsh8 = tiles[Math.floor(Math.random() * 5) + 41]
document.getElementById(Marsh1).classList.add('treat');
document.getElementById(Marsh2).classList.add('treat');
document.getElementById(Marsh3).classList.add('treat');
document.getElementById(Marsh4).classList.add('treat');
document.getElementById(Marsh5).classList.add('treat');
document.getElementById(Marsh6).classList.add('treat');
document.getElementById(Marsh7).classList.add('treat');
document.getElementById(Marsh8).classList.add('treat');
var MarshTrick1 = Math.floor(Math.random() * 4)
var MarshTrick2 = Math.floor(Math.random() * 4)
if (MarshTrick1 == 0){
    document.getElementById(Marsh1).classList.remove('treat');
    document.getElementById(Marsh1).classList.add('trick');
} else if (MarshTrick1 == 1){
    document.getElementById(Marsh2).classList.remove('treat');
    document.getElementById(Marsh2).classList.add('trick');
} else if (MarshTrick1 == 2){
    document.getElementById(Marsh3).classList.remove('treat');
    document.getElementById(Marsh3).classList.add('trick');
} else if (MarshTrick1 == 3){
    document.getElementById(Marsh4).classList.remove('treat');
    document.getElementById(Marsh4).classList.add('trick');
} else {
    alert('error')
}
if (MarshTrick2 == 0){
    document.getElementById(Marsh5).classList.remove('treat');
    document.getElementById(Marsh5).classList.add('trick');
} else if (MarshTrick2 == 1){
    document.getElementById(Marsh6).classList.remove('treat');
    document.getElementById(Marsh6).classList.add('trick');
} else if (MarshTrick2 == 2){
    document.getElementById(Marsh7).classList.remove('treat');
    document.getElementById(Marsh7).classList.add('trick');
} else if (MarshTrick2 == 3){
    document.getElementById(Marsh8).classList.remove('treat');
    document.getElementById(Marsh8).classList.add('trick');
} else {
    alert('error')
}

var Canyon1 = tiles[Math.floor(Math.random() * 5) + 46]
var Canyon2 = tiles[Math.floor(Math.random() * 5) + 51]
var Canyon3 = tiles[Math.floor(Math.random() * 5) + 56]
var Canyon4 = tiles[Math.floor(Math.random() * 5) + 61]
var Canyon5 = tiles[Math.floor(Math.random() * 5) + 66]
var Canyon6 = tiles[Math.floor(Math.random() * 5) + 71]
var Canyon7 = tiles[Math.floor(Math.random() * 5) + 76]
var Canyon8 = tiles[Math.floor(Math.random() * 5) + 81]
document.getElementById(Canyon1).classList.add('treat');
document.getElementById(Canyon2).classList.add('treat');
document.getElementById(Canyon3).classList.add('treat');
document.getElementById(Canyon4).classList.add('treat');
document.getElementById(Canyon5).classList.add('treat');
document.getElementById(Canyon6).classList.add('treat');
document.getElementById(Canyon7).classList.add('treat');
document.getElementById(Canyon8).classList.add('treat');
var CanyonTrick1 = Math.floor(Math.random() * 4)
var CanyonTrick2 = Math.floor(Math.random() * 4)
if (CanyonTrick1 == 0){
    document.getElementById(Canyon1).classList.remove('treat');
    document.getElementById(Canyon1).classList.add('trick');
} else if (CanyonTrick1 == 1){
    document.getElementById(Canyon2).classList.remove('treat');
    document.getElementById(Canyon2).classList.add('trick');
} else if (CanyonTrick1 == 2){
    document.getElementById(Canyon3).classList.remove('treat');
    document.getElementById(Canyon3).classList.add('trick');
} else if (CanyonTrick1 == 3){
    document.getElementById(Canyon4).classList.remove('treat');
    document.getElementById(Canyon4).classList.add('trick');
} else {
    alert('error')
}
if (CanyonTrick2 == 0){
    document.getElementById(Canyon5).classList.remove('treat');
    document.getElementById(Canyon5).classList.add('trick');
} else if (CanyonTrick2 == 1){
    document.getElementById(Canyon6).classList.remove('treat');
    document.getElementById(Canyon6).classList.add('trick');
} else if (CanyonTrick2 == 2){
    document.getElementById(Canyon7).classList.remove('treat');
    document.getElementById(Canyon7).classList.add('trick');
} else if (CanyonTrick2 == 3){
    document.getElementById(Canyon8).classList.remove('treat');
    document.getElementById(Canyon8).classList.add('trick');
} else {
    alert('error')
}

var City1 = tiles[Math.floor(Math.random() * 5) + 86]
var City2 = tiles[Math.floor(Math.random() * 5) + 91]
var City3 = tiles[Math.floor(Math.random() * 5) + 96]
var City4 = tiles[Math.floor(Math.random() * 5) + 101]
var City5 = tiles[Math.floor(Math.random() * 5) + 106]
var City6 = tiles[Math.floor(Math.random() * 5) + 111]
var City7 = tiles[Math.floor(Math.random() * 5) + 116]
var City8 = tiles[Math.floor(Math.random() * 5) + 121]
document.getElementById(City1).classList.add('treat');
document.getElementById(City2).classList.add('treat');
document.getElementById(City3).classList.add('treat');
document.getElementById(City4).classList.add('treat');
document.getElementById(City5).classList.add('treat');
document.getElementById(City6).classList.add('treat');
document.getElementById(City7).classList.add('treat');
document.getElementById(City8).classList.add('treat');
var CityTrick1 = Math.floor(Math.random() * 4)
var CityTrick2 = Math.floor(Math.random() * 4)
if (CityTrick1 == 0){
    document.getElementById(City1).classList.remove('treat');
    document.getElementById(City1).classList.add('trick');
} else if (CityTrick1 == 1){
    document.getElementById(City2).classList.remove('treat');
    document.getElementById(City2).classList.add('trick');
} else if (CityTrick1 == 2){
    document.getElementById(City3).classList.remove('treat');
    document.getElementById(City3).classList.add('trick');
} else if (CityTrick1 == 3){
    document.getElementById(City4).classList.remove('treat');
    document.getElementById(City4).classList.add('trick');
} else {
    alert('error')
}
if (CityTrick2 == 0){
    document.getElementById(City5).classList.remove('treat');
    document.getElementById(City5).classList.add('trick');
} else if (CityTrick2 == 1){
    document.getElementById(City6).classList.remove('treat');
    document.getElementById(City6).classList.add('trick');
} else if (CityTrick2 == 2){
    document.getElementById(City7).classList.remove('treat');
    document.getElementById(City7).classList.add('trick');
} else if (CityTrick2 == 3){
    document.getElementById(City8).classList.remove('treat');
    document.getElementById(City8).classList.add('trick');
} else {
    alert('error')
};

function ItemCheck1() {
    if (tiles[place1] === Marsh1 || tiles[place1] === Marsh2 || tiles[place1] === Marsh3 || tiles[place1] === Marsh4 || tiles[place1] === Marsh5 || tiles[place1] === Marsh6 || tiles[place1] === Marsh7 || tiles[place1] === Marsh8) {
        Player1Stun += 1
    } else if (tiles[place1] === Canyon1 || tiles[place1] === Canyon2 || tiles[place1] === Canyon3 || tiles[place1] === Canyon4 || tiles[place1] === Canyon5 || tiles[place1] === Canyon6 || tiles[place1] === Canyon7 || tiles[place1] === Canyon8){
        Player1Stun += 1
    } else if (tiles[place1] === City1 || tiles[place1] === City2 || tiles[place1] === City3 || tiles[place1] === City4 || tiles[place1] === City5 || tiles[place1] === City6 || tiles[place1] === City7 || tiles[place1] === City8){
        Player1Stun += 1
    } else {
        console.log('good')
    }
}

function ItemCheck2() {
    if (tiles[place2] === Marsh1 || tiles[place2] === Marsh2 || tiles[place2] === Marsh3 || tiles[place2] === Marsh4 || tiles[place2] === Marsh5 || tiles[place2] === Marsh6 || tiles[place2] === Marsh7 || tiles[place2] === Marsh8) {
        Player2Stun += 1
    } else if (tiles[place2] === Canyon1 || tiles[place2] === Canyon2 || tiles[place2] === Canyon3 || tiles[place2] === Canyon4 || tiles[place2] === Canyon5 || tiles[place2] === Canyon6 || tiles[place2] === Canyon7 || tiles[place2] === Canyon8){
        Player2Stun += 1
    } else if (tiles[place2] === City1 || tiles[place2] === City2 || tiles[place2] === City3 || tiles[place2] === City4 || tiles[place2] === City5 || tiles[place2] === City6 || tiles[place2] === City7 || tiles[place2] === City8){
        Player2Stun += 1
    } else {
        console.log('good')
    }
}

function ItemCheck3() {
    if (tiles[place3] === Marsh1 || tiles[place3] === Marsh2 || tiles[place3] === Marsh3 || tiles[place3] === Marsh4 || tiles[place3] === Marsh5 || tiles[place3] === Marsh6 || tiles[place3] === Marsh7 || tiles[place3] === Marsh8) {
        Player3Stun += 1
    } else if (tiles[place3] === Canyon1 || tiles[place3] === Canyon2 || tiles[place3] === Canyon3 || tiles[place3] === Canyon4 || tiles[place3] === Canyon5 || tiles[place3] === Canyon6 || tiles[place3] === Canyon7 || tiles[place3] === Canyon8){
        Player3Stun += 1
    } else if (tiles[place3] === City1 || tiles[place3] === City2 || tiles[place3] === City3 || tiles[place3] === City4 || tiles[place3] === City5 || tiles[place3] === City6 || tiles[place3] === City7 || tiles[place3] === City8){
        Player3Stun += 1
    } else {
        console.log('good')
    }
}

function ItemCheck4() {
    if (tiles[place4] === Marsh1 || tiles[place4] === Marsh2 || tiles[place4] === Marsh3 || tiles[place4] === Marsh4 || tiles[place4] === Marsh5 || tiles[place4] === Marsh6 || tiles[place4] === Marsh7 || tiles[place4] === Marsh8) {
        Player4Stun += 1
    } else if (tiles[place4] === Canyon1 || tiles[place4] === Canyon2 || tiles[place4] === Canyon3 || tiles[place4] === Canyon4 || tiles[place4] === Canyon5 || tiles[place4] === Canyon6 || tiles[place4] === Canyon7 || tiles[place4] === Canyon8){
        Player4Stun += 1
    } else if (tiles[place4] === City1 || tiles[place4] === City2 || tiles[place4] === City3 || tiles[place4] === City4 || tiles[place4] === City5 || tiles[place4] === City6 || tiles[place4] === City7 || tiles[place4] === City8){
        Player4Stun += 1
    } else {
        console.log('good')
    }
}