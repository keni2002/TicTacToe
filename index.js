let turn = 1
let arr = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0]
]

let yoGane = [false,0];
let baldo = document.getElementsByClassName('baldo')
let tiles = document.getElementsByClassName('tile')
let message = document.getElementById('message')
function escribir(x, y) {
	if (baldo[x].children[y].innerHTML == "" && yoGane[0]==false) {
		if (turn == 1) {
			baldo[x].children[y].innerHTML = "X";
			arr[x][y] = 1
			yoGane[1]++;
			
			turn = 2
			
			test()
			return
		} else { turn == 2 } {
			baldo[x].children[y].innerHTML = "O";
			arr[x][y] = 2
			yoGane[1]++;
			
			turn = 1
			test()
			return 
		}
	}
}
function test() {
	
	let val = finished(arr,3);
	
	if(yoGane[1]==9){
		for(let i in tiles){
			tiles[i].style='background-color: #ae0505';
		}
	}
	if(val!== -1) {
		message.innerHTML=`Ha ganado ${val == 1 ? "X" : "O"}`
		yoGane[0]=true
		for(let i in tiles){
			tiles[i].style='background-color: #008000';
		}
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
			if(!equal) break;
		}
		if (equal && arr[j][i] !== 0) return arr[j][i]
		equal = true
	}
	//horizontal
	for (i = 0; i < size; i++) {
		for (j = 0; j < size - 1; j++) {
			equal = arr[i][j] == arr[i][j + 1]
			if(!equal) break;
		}
		if (equal && arr[i][j] !== 0) return arr[i][j]
		equal = true
	}
	//diagonal
	if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[2][2]!=0) return arr[2][2]
	if (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0] && arr[2][0]!=0) return arr[2][0]

	return -1;
}
