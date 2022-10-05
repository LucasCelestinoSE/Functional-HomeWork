const data_periodo = []
const data_cod = []
const ch = []
const freq_data = []
const nota_data = []


const enviar = () => {
    const periodos = document.getElementById("0").value
    const codDis = document.getElementById("1").value
    const CH = document.getElementById("2").value
    const freq = document.getElementById("3").value
    const nota = document.getElementById("4").value
    
    return data_periodo.push(periodos),data_cod.push(codDis),ch.push(CH),
           freq_data.push(freq),nota_data.push(nota)
}