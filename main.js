const encontrarSomente1 = (lista) => {
   return lista.filter((x,index) => {
    return lista.indexOf(x) === index 
   })
}
const tamanho = (lista) => {
    return lista.length
}
const reduzir = (...fns) => (lista) => {
    return fns.reduce((acc,i) => i(acc),lista)
}

const quantPeriodos = reduzir(
    encontrarSomente1,
    tamanho
)