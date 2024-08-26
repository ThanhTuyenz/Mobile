const foreCast=[17,21,23]
const foreCast1=[12,5,-5,0,4]
const arr=[]

function printForecast(arr){
    for(let i=0;i<arr.length;i++){
        console.log(`${arr[i]}°C in ${i+1} days...`)
    }
}

printForecast(foreCast1)