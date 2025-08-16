const obj = {
	name: 'ahmed',
	age: 25,
	chiled: {
		name: 'ehab',
		age: 23,
		chiled: {
			name: 'tark',
			age: 20,
			chileds: [{name:'s'},{name:'s'},{name:'s'},{name:'s'},{name:'s'}]
		}
	}
}
deepFreez(obj);

function deepFreez( obj) {
	Object.freeze(obj)
	for( const key in obj) {
		if (typeof obj[key] == 'object') {
			deepFreez(obj[key])
		}
	}
}
obj.chiled.chiled.chileds[1].name = 'b'
console.log(obj.chiled.chiled.chileds)
