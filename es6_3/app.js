import myFetch from './myFetch.js'

const dummyUser = {name: 'ehab', age: 25, isAlive: false}
myFetch.get('https://jsonplaceholder.typicode.com/users')
myFetch.post('https://jsonplaceholder.typicode.com/users', {method: 'post', body: JSON.stringify(dummyUser)})
