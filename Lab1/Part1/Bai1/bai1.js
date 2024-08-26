function bmi(height, mass){
    return mass/(height*height)
}
let marksMass= 78
let marksHeight= 1.69
let johnMass= 92
let johnHeight=1.95
let markHigherBMI=bmi(marksHeight, marksMass) > bmi(johnHeight, johnMass)
console.log(markHigherBMI)

