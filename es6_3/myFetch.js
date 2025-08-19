const myFetch = {
	async get(url) {
		const res = await fetch(url)
		const data = await res.json()
		console.log(data)
	},
	async post(url, body) {
		const res = await fetch(url, body)
		const data = await res.json()
		console.log(data)
	}
}

export default myFetch
