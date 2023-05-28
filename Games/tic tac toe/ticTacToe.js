//Function called whenever user tap on any box

function boxFunction() {

    // setting DOM to all boxes 
    let a, b, c, d, e, f, g, h, i;
    a = document.getElementById('a').value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;    
    d = document.getElementById("d").value;
    e = document.getElementById("e").value;
    f = document.getElementById("f").value;
    g = document.getElementById("g").value;
    h = document.getElementById("h").value;
    i = document.getElementById("i").value;

//To check if player 1 won after disabling all other fields
if (a == "x" && b == "x" && c == "x") {
    document.getElementById('result').innerHTML = "Player 1 won!"
    document.getElementById("d").disabled = true;
    document.getElementById("e").disabled = true;
    document.getElementById("f").disabled = true;

    document.getElementById("g").disabled = true;
    document.getElementById("h").disabled = true;
    document.getElementById("i").disabled = true;

    window.alert('Player 1 won!');
}

else if (a == 'x' && d == 'x' && g == 'x') {
    document.getElementById('result').innerHTML = "Player 1 won!";
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("e").disabled = true;

    document.getElementById("f").disabled = true;
    document.getElementById("h").disabled = true;
    document.getElementById("i").disabled = true;

    windows.alert('Player 1 won');
}

else if (a == 'x' && e == 'x' && i == 'x')  {
    document.getElementById('result').innerHTML = "Player 1 won!";
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;

    document.getElementById("f").disabled = true;
    document.getElementById("g").disabled = true;
    document.getElementById("h").disabled = true;

    windows.alert('Player 1 won');
}

else if (b == 'x' && e == 'x' && h == 'x')  {
    document.getElementById('result').innerHTML = "Player 1 won!";
    document.getElementById("a").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;

    document.getElementById("f").disabled = true;
    document.getElementById("g").disabled = true;
    document.getElementById("i").disabled = true;

    windows.alert('Player 1 won');
}

else if (c == 'x' && f == 'x' && i == 'x')  {
    document.getElementById('result').innerHTML = "Player 1 won!";
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("d").disabled = true;

    document.getElementById("e").disabled = true;
    document.getElementById("g").disabled = true;
    document.getElementById("h").disabled = true;

    windows.alert('Player 1 won');
}

else if (c == 'x' && e == 'x' && g == 'x')  {
    document.getElementById('result').innerHTML = "Player 1 won!";
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("d").disabled = true;

    document.getElementById("f").disabled = true;
    document.getElementById("h").disabled = true;
    document.getElementById("i").disabled = true;

    windows.alert('Player 1 won');
}

else if (d == 'x' && e == 'x' && f == 'x')  {
    document.getElementById('result').innerHTML = "Player 1 won!";
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;

    document.getElementById("g").disabled = true;
    document.getElementById("h").disabled = true;
    document.getElementById("i").disabled = true;

    windows.alert('Player 1 won');
}

else if (g == 'x' && h == 'x' && i == 'x')  {
    document.getElementById('result').innerHTML = "Player 1 won!";
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;

    document.getElementById("d").disabled = true;
    document.getElementById("e").disabled = true;
    document.getElementById("f").disabled = true;

    windows.alert('Player 1 won');
}

//checking if player 1 finish
// Checking id Player 2 won, after disabling all fields

else if (a == "o" && b == "o" && c == "o") {
    document.getElementById('result').innerHTML = "Player 2 won!"
    document.getElementById("d").disabled = true;
    document.getElementById("e").disabled = true;
    document.getElementById("f").disabled = true;

    document.getElementById("g").disabled = true;
    document.getElementById("h").disabled = true;
    document.getElementById("i").disabled = true;

    window.alert('Player 2 won!');
}

else if (a == 'o' && d == 'o' && g == 'o') {
    document.getElementById('result').innerHTML = "Player 2 won!";
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("e").disabled = true;

    document.getElementById("f").disabled = true;
    document.getElementById("h").disabled = true;
    document.getElementById("i").disabled = true;

    windows.alert('Player 2 won');
}

else if (a == 'o' && e == 'o' && i == 'o')  {
    document.getElementById('result').innerHTML = "Player 2 won!";
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;

    document.getElementById("f").disabled = true;
    document.getElementById("g").disabled = true;
    document.getElementById("h").disabled = true;

    windows.alert('Player 2 won');
}

else if (b == 'o' && e == 'o' && h == 'o')  {
    document.getElementById('result').innerHTML = "Player 2 won!";
    document.getElementById("a").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;

    document.getElementById("f").disabled = true;
    document.getElementById("g").disabled = true;
    document.getElementById("i").disabled = true;

    windows.alert('Player 2 won');
}

else if (c == 'o' && f == 'o' && i == 'o')  {
    document.getElementById('result').innerHTML = "Player 2 won!";
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("d").disabled = true;

    document.getElementById("e").disabled = true;
    document.getElementById("g").disabled = true;
    document.getElementById("h").disabled = true;

    windows.alert('Player 2 won');
}

else if (c == 'o' && e == 'o' && g == 'o')  {
    document.getElementById('result').innerHTML = "Player 2 won!";
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("d").disabled = true;

    document.getElementById("f").disabled = true;
    document.getElementById("h").disabled = true;
    document.getElementById("i").disabled = true;

    windows.alert('Player 2 won');
}

else if (d == 'o' && e == 'o' && f == 'o')  {
    document.getElementById('result').innerHTML = "Player 2 won!";
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;

    document.getElementById("g").disabled = true;
    document.getElementById("h").disabled = true;
    document.getElementById("i").disabled = true;

    windows.alert('Player 2 won');
}

else if (g == 'o' && h == 'o' && i == 'o')  {
    document.getElementById('result').innerHTML = "Player 2 won!";
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;

    document.getElementById("d").disabled = true;
    document.getElementById("e").disabled = true;
    document.getElementById("f").disabled = true;

    windows.alert('Player 2 won');
}

// checking of Player 2 fininsh
// Check for tie

else if ((a == 'x' || a == 'o') && (b == 'x' || b == 'o') && (c == 'x' || c == 'o') && (d == 'x' || d == 'o') && (e == 'x' || e == 'o') && (f == 'x' || f == 'o') && (g == 'x' || g == 'o') && (h == 'x' || h == 'o') && (i == 'x' || i == 'o')) {
    document.getElementById('result').innerHTML = "Tie";
	window.alert('Tie');
}
else {
    //Here, printing result
    if(flag == 1) {
        document.getElementById('result').innerHTML = "Player 1 Turn.";
    } else {
        document.getElementById('result').innerHTML = "Player 2 turn."
    }
}
}

//Function to reset game
function myFun_1() {
    location.reload();
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('d').value = '';
    document.getElementById('e').value = '';
    document.getElementById('f').value = '';
    document.getElementById('g').value = '';
    document.getElementById('h').value = '';
    document.getElementById('i').value = '';
}

// Check turn of players
flag = 1;
function myFun_2() {
    if(flag ==1) {
        document.getElementById('a').value = 'x';
        document.getElementById('a').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('a').value = 'o';
        document.getElementById('a').disabled = true;
        flag = 1;
    }
}

function myFun_3() {
    if(flag == 1) {
        document.getElementById('b').value = 'x';
        document.getElementById('b').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b').value = 'o';
        document.getElementById('b').disabled = true;
        flag = 1;
    }
}

function myFun_4() {
    if(flag == 1) {
        document.getElementById('c').value = 'x';
        document.getElementById('c').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('c').value = 'o';
        document.getElementById('c').disabled = true;
        flag = 1;
    }
}

function myFun_5() {
    if(flag == 1) {
        document.getElementById('d').value = 'x';
        document.getElementById('d').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('d').value = 'o';
        document.getElementById('d').disabled = true;
        flag = 1;
    }
}

function myFun_6() {
    if(flag == 1) {
        document.getElementById('e').value = 'x';
        document.getElementById('e').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('e').value = 'o';
        document.getElementById('e').disabled = true;
        flag = 1;
    }
}

function myFun_7() {
    if(flag == 1) {
        document.getElementById('f').value = 'x';
        document.getElementById('f').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('f').value = 'x';
        document.getElementById('f').disabled = true;
        flag = 1;
    }
}

function myFun_8() {
    if(flag == 1) {
        document.getElementById('g').value = 'x';
        document.getElementById('g').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('g').value = 'o';
        document.getElementById('g').disabled = true;
        flag = 1;
    }
}

function myFun_9() {
    if(flag == 1) {
        document.getElementById('h').value = 'x';
        document.getElementById('h').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('h').value = 'o';
        document.getElementById('h').disabled = true;
        flag = 1
    }
}

function myFun_10() {
    if(flag == 1) {
        document.getElementById('i').value = 'x';
        document.getElementById('i').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('i').value = 'o';
        document.getElementById('i').disabled = true;
        flag = 1;
    }
}