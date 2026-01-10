
function pesodobolota(peso, altura) {
    let imc = peso / altura*2
    if(imc > 100) {
        console.log(`Você tem ${peso}kg e ${altura} de altura, portanto é gordo dms`)
    } else {
        console.log(`Você tem ${peso}kg e ${altura} de altura, portanto está acima do peso`)
    }
} pesodobolota(76, 1.74)