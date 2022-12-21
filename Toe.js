// Function called whenever user tab on any box
function myfunc() {

	// Setting DOM to all boxes or input field
	var x1, x2, x3, x4, x5, x6, x7, x8, x9;
	x1 = document.getElementById("x1").value;
	x2 = document.getElementById("x2").value;
	x3 = document.getElementById("x3").value;
	x4 = document.getElementById("x4").value;
	x5 = document.getElementById("x5").value;
	x6 = document.getElementById("x6").value;
	x7 = document.getElementById("x7").value;
	x8 = document.getElementById("x8").value;
	x9 = document.getElementById("x9").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((x1 == 'x' || x1 == 'X') && (x2 == 'x' ||
		x2 == 'X') && (x3 == 'x' || x3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X Menang";
		document.getElementById("x4").disabled = true;
		document.getElementById("x5").disabled = true;
		document.getElementById("x6").disabled = true;
		document.getElementById("x7").disabled = true;
		document.getElementById("x8").disabled = true;
		document.getElementById("x9").disabled = true;
		window.alert('Player X Menang');
	}
	else if ((x1 == 'x' || x1 == 'X') && (x4 == 'x' ||
		x4 == 'X') && (x7 == 'x' || x7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X Menang";
		document.getElementById("x2").disabled = true;
		document.getElementById("x3").disabled = true;
		document.getElementById("x5").disabled = true;
		document.getElementById("x6").disabled = true;
		document.getElementById("x8").disabled = true;
		document.getElementById("x9").disabled = true;

		window.alert('Player X Menang');
	}
	else if ((x7 == 'x' || x7 == 'X') && (x8 == 'x' ||
		x8 == 'X') && (x9 == 'x' || x9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X Menang";
		document.getElementById("x1").disabled = true;
		document.getElementById("x2").disabled = true;
		document.getElementById("x3").disabled = true;
		document.getElementById("x4").disabled = true;
		document.getElementById("x5").disabled = true;
		document.getElementById("x6").disabled = true;
		window.alert('Player X Menang');
	}
	else if ((x3 == 'x' || x3 == 'X') && (x6 == 'x' ||
		x6 == 'X') && (x9 == 'x' || x9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X Menang";
		document.getElementById("x1").disabled = true;
		document.getElementById("x2").disabled = true;
		document.getElementById("x4").disabled = true;
		document.getElementById("x5").disabled = true;
		document.getElementById("x7").disabled = true;
		document.getElementById("x8").disabled = true;
		window.alert('Player X Menang');
	}
	else if ((x1 == 'x' || x1 == 'X') && (x5 == 'x' ||
		x5 == 'X') && (x9 == 'x' || x9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X Menang";
		document.getElementById("x2").disabled = true;
		document.getElementById("x3").disabled = true;
		document.getElementById("x4").disabled = true;
		document.getElementById("x6").disabled = true;
		document.getElementById("x7").disabled = true;
		document.getElementById("x8").disabled = true;
		window.alert('Player X Menang');
	}
	else if ((x3 == 'x' || x3 == 'X') && (x5 == 'x' ||
		x5 == 'X') && (x7 == 'x' || x7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X Menang";
		document.getElementById("x1").disabled = true;
		document.getElementById("x2").disabled = true;
		document.getElementById("x4").disabled = true;
		document.getElementById("x6").disabled = true;
		document.getElementById("x8").disabled = true;
		document.getElementById("x9").disabled = true;
		window.alert('Player X Menang');
	}
	else if ((x2 == 'x' || x2 == 'X') && (x5 == 'x' ||
		x5 == 'X') && (x8 == 'x' || x8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X Menang";
		document.getElementById("x1").disabled = true;
		document.getElementById("x3").disabled = true;
		document.getElementById("x4").disabled = true;
		document.getElementById("x6").disabled = true;
		document.getElementById("x7").disabled = true;
		document.getElementById("x9").disabled = true;
		window.alert('Player X Menang');
	}
	else if ((x4 == 'x' || x4 == 'X') && (x5 == 'x' ||
		x5 == 'X') && (x6 == 'x' || x6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X Menang";
		document.getElementById("x1").disabled = true;
		document.getElementById("x2").disabled = true;
		document.getElementById("x3").disabled = true;
		document.getElementById("x7").disabled = true;
		document.getElementById("x8").disabled = true;
		document.getElementById("x9").disabled = true;
		window.alert('Player X Menang');
	}

	// Checking of Player X finish
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((x1 == '0' || x1 == '0') && (x2 == '0' ||
		x2 == '0') && (x3 == '0' || x3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 Menang";
		document.getElementById("x4").disabled = true;
		document.getElementById("x5").disabled = true;
		document.getElementById("x6").disabled = true;
		document.getElementById("x7").disabled = true;
		document.getElementById("x8").disabled = true;
		document.getElementById("x9").disabled = true;
		window.alert('Player 0 Menang');
	}
	else if ((x1 == '0' || x1 == '0') && (x4 == '0' ||
		x4 == '0') && (x7 == '0' || x7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 Menang";
		document.getElementById("x2").disabled = true;
		document.getElementById("x3").disabled = true;
		document.getElementById("x5").disabled = true;
		document.getElementById("x6").disabled = true;
		document.getElementById("x8").disabled = true;
		document.getElementById("x9").disabled = true;
		window.alert('Player 0 Menang');
	}
	else if ((x7 == '0' || x7 == '0') && (x8 == '0' ||
		x8 == '0') && (x9 == '0' || x9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 Menang";
		document.getElementById("x1").disabled = true;
		document.getElementById("x2").disabled = true;
		document.getElementById("x3").disabled = true;
		document.getElementById("x4").disabled = true;
		document.getElementById("x5").disabled = true;
		document.getElementById("x6").disabled = true;
		window.alert('Player 0 Menang');
	}
	else if ((x3 == '0' || x3 == '0') && (x6 == '0' ||
		x6 == '0') && (x9 == '0' || x9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 Menang";
		document.getElementById("x1").disabled = true;
		document.getElementById("x2").disabled = true;
		document.getElementById("x4").disabled = true;
		document.getElementById("x5").disabled = true;
		document.getElementById("x7").disabled = true;
		document.getElementById("x8").disabled = true;
		window.alert('Player 0 Menang');
	}
	else if ((x1 == '0' || x1 == '0') && (x5 == '0' ||
		x5 == '0') && (x9 == '0' || x9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 Menang";
		document.getElementById("x2").disabled = true;
		document.getElementById("x3").disabled = true;
		document.getElementById("x4").disabled = true;
		document.getElementById("x6").disabled = true;
		document.getElementById("x7").disabled = true;
		document.getElementById("x8").disabled = true;
		window.alert('Player 0 Menang');
	}
	else if ((x3 == '0' || x3 == '0') && (x5 == '0' ||
		x5 == '0') && (x7 == '0' || x7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 Menang";
		document.getElementById("x1").disabled = true;
		document.getElementById("x2").disabled = true;
		document.getElementById("x4").disabled = true;
		document.getElementById("x6").disabled = true;
		document.getElementById("x8").disabled = true;
		document.getElementById("x9").disabled = true;
		window.alert('Player 0 Menang');
	}
	else if ((x2 == '0' || x2 == '0') && (x5 == '0' ||
		x5 == '0') && (x8 == '0' || x8 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 Menang";
		document.getElementById("x1").disabled = true;
		document.getElementById("x3").disabled = true;
		document.getElementById("x4").disabled = true;
		document.getElementById("x6").disabled = true;
		document.getElementById("x7").disabled = true;
		document.getElementById("x9").disabled = true;
		window.alert('Player 0 Menang');
	}
	else if ((x4 == '0' || x4 == '0') && (x5 == '0' ||
		x5 == '0') && (x6 == '0' || x6 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 Menang";
		document.getElementById("x1").disabled = true;
		document.getElementById("x2").disabled = true;
		document.getElementById("x3").disabled = true;
		document.getElementById("x7").disabled = true;
		document.getElementById("x8").disabled = true;
		document.getElementById("x9").disabled = true;
		window.alert('Player 0 Menang');
	}

	// Checking of Player 0 finish
	// Here, Checking about Tie
	else if ((x1 == 'X' || x1 == '0') && (x2 == 'X'
		|| x2 == '0') && (x3 == 'X' || x3 == '0') &&
		(x4 == 'X' || x4 == '0') && (x5 == 'X' ||
		x5 == '0') && (x6 == 'X' || x6 == '0') &&
		(x7 == 'X' || x7 == '0') && (x8 == 'X' ||
		x8 == '0') && (x9 == 'X' || x9 == '0')) {
			document.getElementById('print')
				.innerHTML = "Imbang";
			window.alert('Match Imbang');
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X jalan";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Jalan";
		}
	}
}

// Function to reset game
function myfunc_2() {
	location.reload();
	document.getElementById('x1').value = '';
	document.getElementById("x2").value = '';
	document.getElementById("x3").value = '';
	document.getElementById("x4").value = '';
	document.getElementById("x5").value = '';
	document.getElementById("x6").value = '';
	document.getElementById("x7").value = '';
	document.getElementById("x8").value = '';
	document.getElementById("x9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("x1").value = "X";
		document.getElementById("x1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("x1").value = "0";
		document.getElementById("x1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("x2").value = "X";
		document.getElementById("x2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("x2").value = "0";
		document.getElementById("x2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("x3").value = "X";
		document.getElementById("x3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("x3").value = "0";
		document.getElementById("x3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("x4").value = "X";
		document.getElementById("x4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("x4").value = "0";
		document.getElementById("x4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("x5").value = "X";
		document.getElementById("x5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("x5").value = "0";
		document.getElementById("x5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("x6").value = "X";
		document.getElementById("x6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("x6").value = "0";
		document.getElementById("x6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("x7").value = "X";
		document.getElementById("x7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("x7").value = "0";
		document.getElementById("x7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("x8").value = "X";
		document.getElementById("x8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("x8").value = "0";
		document.getElementById("x8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("x9").value = "X";
		document.getElementById("x9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("x9").value = "0";
		document.getElementById("x9").disabled = true;
		flag = 1;
	}
}
