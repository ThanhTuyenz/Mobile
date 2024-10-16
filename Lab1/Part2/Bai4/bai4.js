const bills=[22,295,176,440,37,105,10,1100,86,52]
const tips=[]
const totals=[]
const calcTip=(bill)=>{
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2
}
for(let i=0;i<bills.length;i++){
    tips.push(calcTip(bills[i]))
    totals.push(bills[i]+tips[i])
}

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

const calcAverage=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++)
        sum+=arr[i];
    return sum/arr.length;
}
console.log('Average of totals:', calcAverage(totals));
