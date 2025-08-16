function task1() {
	var students = ["John", "Sarah", "Alex", "Emily", "Michael ","Andro","marrwa"]
	students.push('Jessica')
	students.shift()
	students.pop()
	var index = students.findIndex((item, i) =>  item === 'Alex');
	if (index > -1) {
		students[index] = 'Alexnder'
	}

	console.log('First For Loob:')
	for(var i = 0; i < students.length; i++) {
		console.log(i, students[i])
	}

	console.log('Second For-in Loob:')
	for ( var x in students) {
		console.log(x, students[x])
	}

	console.log('filterd students')
	var newStudents = students.filter((item) => { return item[1] === 'a'})
	console.log(newStudents)
}

function task2() {
	setInterval( () => {
		var y = Math.floor(Math.random() * window.screen.availHeight)
		var x = Math.floor(Math.random() * window.screen.availWidth)
		var windowFeatures = `height=400,width=400,left=${x},top=${y}`
		window.open('www.example.com', '_blank', windowFeatures)
	}, 3000)
}
