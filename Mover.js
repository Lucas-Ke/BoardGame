 
class Player {
    constructor(){
        this.location = 0;
        this.stunned = false;
        this.inventory = [];
    }

}

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
document.getElementById(Marsh1).classList.add('Character4');
document.getElementById(Marsh2).classList.add('Character4');
document.getElementById(Marsh3).classList.add('Character4');
document.getElementById(Marsh4).classList.add('Character4');
document.getElementById(Marsh5).classList.add('Character4');
document.getElementById(Marsh6).classList.add('Character4');
document.getElementById(Marsh7).classList.add('Character4');
document.getElementById(Marsh8).classList.add('Character4');
var MarshTrick1 = Math.floor(Math.random() * 8)
var MarshTrick2 = Math.floor(Math.random() * 8)
console.log(MarshTrick)
if (MarshTrick1 == 1){
    a
} else if (MarshTrick1 == 1){
    a
} else if (MarshTrick1 == 2){
    a
} else if (MarshTrick1 == 3){
    a
} else if (MarshTrick1 == 4){
    a
} else if (MarshTrick1 == 5){
    a
} else if (MarshTrick1 == 6){
    a
} else if (MarshTrick1 == 7){
    a
} else {
    alert('error')
}