const file = './data.json'
const fs = require('fs')

const [,, cmd, ...args] =  process.argv



fs.readFile(file, 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }

  const products = data ? JSON.parse(data) : []

  switch(cmd) {
    case('create'):
      products.push({id: products.length + 1, name: args[0], price: parseInt(args[1])})
      console.log(`Created Product: ${args[0]}:${args[1]}`)
      break

    case('list'):
      products.length 
        ? products.forEach((product) => console.log(`#id:${product.id} - name:${product.name} - price:${product.price}`))
        : console.log('empty products')
      break

    case('update'):
      const index = products.findIndex((item) => item.id == args[0])
      if (index < 0)
        return console.log('Product Not found #' + targetIndex)
      products[index].name = args[1]
      products[index].price = args[2]
      console.log(`updateed product: #id${products[index].id}  name:${products[index].name} price:${products[index].price}`)
      break

    case('delete'):
      const targetIndex = products.findIndex((item) => item.id == args[0])
      if (targetIndex < 0)
        return console.log('item Not found' + targetIndex)
      const {id:removedId} = products[targetIndex]
      products.splice(targetIndex, 1)
      console.log('Deleted prdouct #' + removedId)
      break

    case('help'):
      console.log('avaliable Commands create | delete | update | help | ')
      break
    default:
      console.log('sorry command not found: help to show commands.')
  }

  if(['update', 'delete', 'create'].includes(cmd)){
    fs.writeFile(file, JSON.stringify(products, null,2),() => {})
  }
})
