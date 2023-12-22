let turn = 1
let arr = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0]
]
let players = ["", "", 0, 0]
let yoGane = [true, 0];
let baldo = document.getElementsByClassName('baldo')
let tiles = document.getElementsByClassName('tile')
let message = document.getElementById('message')
let rest = document.getElementById('restart')
let start = document.getElementById('start');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let form = document.getElementById('form')
let turnos = document.querySelector('p');

start.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(player1.value, player2.value)
	if (player1.value !== '' || player2.value !== '') {
		players[0] = player1.value
		players[1] = player2.value
		player1.value = ""
		player2.value = ""
		form.style = 'display: none'
		turnos.style = 'display: block'
		turnos.innerHTML = `${players[0]}, es tu turno`
		yoGane[0] = false
	} else {
		alert("ponga nombres")
	}
})
function escribir(x, y) {
	if (baldo[x].children[y].innerHTML == "" && yoGane[0] == false) {
		if (turn == 1) {
			baldo[x].children[y].innerHTML = "X";
			arr[x][y] = 1
			yoGane[1]++;
			turnos.innerHTML = `${players[1]}, es tu turno`
			turn = 2

			test()
			return
		} else { turn == 2 } {
			baldo[x].children[y].innerHTML = "O";
			turnos.innerHTML = `${players[0]}, es tu turno`
			arr[x][y] = 2
			yoGane[1]++;

			turn = 1
			test()
			return
		}
	}
}
function test() {

	let val = finished(arr, 3);

	if (yoGane[1] == 9) {
		for (let i in tiles) {
			tiles[i].style = 'background-color: #ae0505';
			turnos.innerHTML = ``
		}
	}
	if (val !== -1) {
		message.innerHTML = `Felicidades, ${val == 1 ? players[0] : players[1]}, has Ganado`
		turnos.innerHTML = ``
		yoGane[0] = true
		for (let i in tiles) {
			tiles[i].style = 'background-color: #008000';

		}
		if (val == 1) players[2]++
		if (val == 2) players[3]++
	}
}

// X = 1
// O = 2
// - = 0
function finished(arr, size) {
	let equal = true
	let i = 0, j = 0
	//vertical
	for (i = 0; i < size; i++) {
		for (j = 0; j < size - 1; j++) {
			equal = arr[j][i] == arr[j + 1][i]
			if (!equal) break;
		}
		if (equal && arr[j][i] !== 0) return arr[j][i]
		equal = true
	}
	//horizontal
	for (i = 0; i < size; i++) {
		for (j = 0; j < size - 1; j++) {
			equal = arr[i][j] == arr[i][j + 1]
			if (!equal) break;
		}
		if (equal && arr[i][j] !== 0) return arr[i][j]
		equal = true
	}
	//diagonal
	if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[2][2] != 0) return arr[2][2]
	if (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0] && arr[2][0] != 0) return arr[2][0]

	return -1;
}

function empty() {
	for (let i in tiles) {
		tiles[i].innerHTML = ""
		yoGane = [false, 0];
		turn = 1
		arr = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		]
		tiles[i].style = 'background-color:  #014067';
	}
	message.innerHTML = ""

}
function resetear() {
	empty();
	
	form.style = 'display: block'
	yoGane[0] = true
}
function denuevo() {
	empty()
}
