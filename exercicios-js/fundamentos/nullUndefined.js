let valor //não inicializada
console.log(valor)

valor = null // ausência de valor (variavel vazia), sempre usar no lugar de undefined?
console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco) //ira retornar que n esta definido o preco, diferente de valor, que estava nulo
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco //(usar essa estrategia ao inves)
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)