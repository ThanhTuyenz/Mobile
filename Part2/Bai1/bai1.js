//data1
// let scoreDolphins=[44,23,71]
// let scoreKoalas=[65,54,49]

//data2
let scoreDolphins=[85,54,41]
let scoreKoalas=[23,34,27]
function calcAverage(score){
    let sum=0
    for(let i=0;i<score.length;i++){
        sum+=score[i]
    }
    return sum/score.length
}

let avgDolphins=calcAverage(scoreDolphins)
let avgKoalas=calcAverage(scoreKoalas)

function checkWinner(avgDolphins,avgKoalas){
    if(avgDolphins>=2*avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    }else if(avgKoalas>=2*avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    }else{
        console.log('No team wins')
    }
}

checkWinner(avgDolphins,avgKoalas)
    