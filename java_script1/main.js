//task 1
function task1() {
alert("Wellcome to my site");
var usrName = prompt("Please enter your lovely name");
document.writeln('wellcome ' + usrName);
}

//task 2
function task2() {
var x = parseInt(prompt("Please Enter 1st Number"))
var y = parseInt(prompt("Please Enter 2nd Number"));
function sumTowNum(x, y){
	return x + y;
}
console.log(sumTowNum(x, y));
}

//task 3
function todayTemp(temp) {
	temp >= 30 ? console.log("Oh it HOT!") : console.log("Nah it is Cold");
}

function inRange(x, low, high) {
	if ( x >= low && x <= high) {
		return true
	}
	return false
}

function weatherDetect(temp, actual){
	if (inRange(temp, 25, 30) && inRange(actual, 25, 30)) {
		console.log("Normal")
	} else if (temp < 25 && actual < 25) {
		console.log("Cold")
	} else if (temp > 30 && actual > 30) {
		console.log("Hot")
	} else {
		console.log("unkown can not be detected")
	}
}

//task 4
function sudentMessage(uni) {
	var message = "You’re eligible to SW fundamentals track";

	switch(uni) {
		case 'FCI':
			message = "You’re eligible to Programing Tracks";
			break;
		case 'Engineering':
			message = "You're eligible Network and Embedded tracks"
			break;
		case 'Commerce':
			message = "Your're eligible to ERP and Social media tracks";
			break;
		}
	console.log(message);
}


//task 5
function printOdd(start, end) {
	for(var i = start; i <= end; i++) {
		if (i % 2) {
			console.log(i);
		}
	}
}

//task 6 && bouns 2
function task6() {
	var name = prompt("please enter your name");
	var year = 2011;

	while (year >= 2010) {
		year = parseInt(prompt("please enter your birth year"));
	}

	var age = 2025 - year;
	var line = 'Name: ' + name + '<br> Birth Year' + year + '<br> Age: ' + age;
	document.writeln(line)
	line = `<table border='2'> 
		<tr> <td>Name: </td> 
		<td>` + name + `</td> </tr>
		<tr> <td>age: </td>
		<td>` + age + `</td> </tr>
		<tr> <td>birth year: </td>
		<td>` + year + `</td> </tr>`
	document.writeln(line)
}


//bouns 1
function bouns1(){
	var i = 6;
	var line = '';

	while (i > 0) {
		line = `<h${i}>welcome to  my page<h${i}`;
		document.writeln(line);
		i--;
	}
}

//bouns 3
function bouns3() {
	var btns = document.querySelectorAll('btn');

	for (var x = 0; x < btns.length; x++) {
		btns[x].addEventListener("click", (event) => {
			event.target.parentElement.style.display = "none";
		})
	}

	var clearBtn = document.getElementById('clearAll')
	var skillContainer = document.getElementById('skill_container');

	clearBtn.addEventListener("click", () => {
			skillContainer.style.display = "none";
	})
}
