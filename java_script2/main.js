function task1() {
	var input = prompt('Please Enter a word');
	input = input.toLowerCase()
	var counter = 0;
	for(var i = 0; i < input.length; i++) {
		if (input[i] == 'e') {
			counter++;
		}
	}
	alert('The letter e had been entered ' + counter + ' times')
}

function task2() {
	var input = prompt('Please enter a word');
	var isIgnore = confirm('Do you want to ignore case sensitivity')

	if (isIgnore) {
		input = input.toLowerCase();
	}
	var reversed = input.split('').reverse().join('')
	reversed == input ? alert('it is the same') : alert('it is not the same')
	console.log(reversed, input)
}


function task3() {
	var R = Math.floor(Math.random() * 256)
	var G = Math.floor(Math.random() * 256)
	var B = Math.floor(Math.random() * 256)
	document.writeln(`<h1 style="color: RGB(${R}, ${G}, ${B});" >Hello World</h1>`)
}

function task4() {
	var input = parseInt(prompt('Please Enter a Number'))
	alert('The sqrt of' + input + ' is ' + Math.sqrt(input));
}

function task5() {
	var input = parseInt(prompt('Please Enter the circle raduis'));
	var area = Math.PI * (input ** 2);
	alert('The Circle Area is ' + area);
}

