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
// const tiles = ['Oven', 'Licorice-Lane', 'Marshmellow-Meadow', 'Gram-Canyon', 'City-of-Chocolate', 'Smore']

// function Mover(){
const tiles = ['Space1', 'Space2', 'Space3', 'Space4', 'Space5', 'Space6', 'Space7', 'Space8', 'Space9', 'Space10', 'Space11', 'Space12', 'Space13', 'Space14', 'Space15', 'Space16', 'Space17', 'Space18', 'Space19', 'Space20', 'Space21', 'Space22', 'Space23', 'Space24', 'Space25', 'Space26', 'Space27', 'Space28', 'Space29', 'Space30', 'Space31', 'Space32', 'Space33', 'Space34', 'Space35', 'Space36', 'Space37', 'Space38', 'Space39', 'Space40', 'Space41', 'Space42', 'Space43', 'Space44', 'Space45', 'Space46', 'Space47', 'Space48', 'Space49', 'Space50', 'Space51', 'Space52', 'Space53', 'Space54', 'Space55', 'Space56', 'Space57', 'Space58', 'Space59', 'Space60', 'Space61', 'Space62', 'Space63', 'Space64', 'Space65', 'Space66', 'Space67', 'Space68', 'Space69', 'Space70', 'Space71', 'Space72', 'Space73', 'Space74', 'Space75', 'Space76', 'Space77', 'Space78', 'Space79', 'Space80', 'Space81', 'Space82', 'Space83', 'Space84', 'Space85', 'Space86', 'Space87', 'Space88', 'Space89', 'Space90', 'Space91', 'Space92', 'Space93', 'Space94', 'Space95', 'Space96', 'Space97', 'Space98', 'Space99', 'Space100', 'Space101', 'Space102', 'Space103', 'Space104', 'Space105', 'Space106', 'Space107', 'Space108', 'Space109', 'Space110', 'Space111', 'Space112', 'Space113', 'Space114', 'Space115', 'Space116', 'Space117', 'Space118', 'Space119', 'Space120', 'Space121', 'Space122', 'Space123', 'Space124', 'Space125', 'Space126', 'Space127']
// const tiles = ['Space1', 'Space2', 'Space3', 'Space4, Space5, Space6, Space7, Space8, Space9, Space10, Space11, Space12, Space13, Space14, Space15, Space16, Space17, Space18, Space19, Space20, Space21, Space22, Space23, Space24, Space25, Space26, Space27, Space28, Space29, Space30, Space31, Space32, Space33, Space34, Space35, Space36, Space37, Space38, Space39, Space40, Space41, Space42, Space43, Space44, Space45, Space46, Space47, Space48, Space49, Space50, Space51, Space52, Space53, Space54, Space55, Space56, Space57, Space58, Space59, Space60, Space61, Space62, Space63, Space64, Space65, Space66, Space67, Space68, Space69, Space70, Space71, Space72, Space73, Space74, Space75, Space76, Space77, Space78, Space79, Space80, Space81, Space82, Space83, Space84, Space85, Space86, Space87, Space88, Space89, Space90, Space91, Space92, Space93, Space94, Space95, Space96, Space97, Space98, Space99, Space100, Space101, Space102, Space103, Space104, Space105, Space106, Space107, Space108, Space109, Space110, Space111, Space112, Space113, Space114, Space115, Space116, Space117, Space118, Space119, Space120, Space1, Space2, Space3, Space4, Space5, Space6, Space7]
//     alert(tiles[0])
//     // document.getElementsByClassName(tiles[D6]).appendChild(guy1);
// }
    // document.getElementsByClassName(tiles[D6]).appendChild(guy1);
