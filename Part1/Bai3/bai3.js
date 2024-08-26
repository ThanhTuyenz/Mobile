// data1
// let scoreDolphins=[96,108,89]
// let scoreKoalas=[88,91,110]

// data2
// let scoreDolphins=[97,112,101]
// let scoreKoalas=[109,95,123]

//data3
let scoreDolphins=[97,112,101]
let scoreKoalas=[109,95,106]


function average(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum/arr.length
}

let avgDolphins=average(scoreDolphins)
let avgKoalas=average(scoreKoalas)

function checkMinScore(arr){
    let min=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>=100)
            return true
    }
    return false
}

if(avgDolphins>avgKoalas && checkMinScore(scoreDolphins))
    console.log("Dolphins win!")
else if(avgDolphins<avgKoalas && checkMinScore(scoreKoalas))
    console.log("Koalas win!")
else if(avgDolphins===avgKoalas && checkMinScore(scoreDolphins) && checkMinScore(scoreKoalas))
    console.log("Draw!")
else
    console.log("No one wins!")