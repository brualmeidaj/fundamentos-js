const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1 ['Desconto Legal'] = 0.40 //Evitar atributos com espaço

console.log(prod1)

const prod2 = {
     nome: 'Camisa Polo',
     preco: 79.90
}

//ou

prod2['Desconto Legal'] = 0.40 //evitar atributos com com espaço

// se for json (formato textual)

'{ "nome": "Camisa Polo", "preco": 79.90}'

console.log(prod2)