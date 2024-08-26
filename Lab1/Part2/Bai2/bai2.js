const bills=[125,555,44]
let tips=[]
let totals=[]
function calcTip(bill){
    if(bill>=50 && bill<=300){
        return bill*0.15
    }else{
        return bill*0.2
    }
}
for(let i=0;i<bills.length;i++){
    tips.push(calcTip(bills[i]))
    totals.push(bills[i]+tips[i])
}
console.log(tips)