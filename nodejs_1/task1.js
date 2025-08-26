const fs = require('fs')
const file = './note.txt'

fs.writeFileSync(file, 'hello world\n', 'utf-8')
fs.appendFileSync(file, 'hello world2\n', 'utf-8')
console.log(fs.readFileSync(file, 'utf-8'))
setTimeout(() => {fs.renameSync(file, './notes_new.txt'); console.log('===fileRenamed===')}, 3000)
setTimeout(()=>{fs.unlinkSync('./notes_new.txt'); console.log('===fileRemoved===')}, 5000)
