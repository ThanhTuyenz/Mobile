function bmi(height, mass){
    return mass/(height*height)
}
let marksMass= 78
let marksHeight= 1.69
let johnMass= 92
let johnHeight=1.95
let markHigherBMI=bmi(marksHeight, marksMass) > bmi(johnHeight, johnMass)
if(markHigherBMI)
    console.log("Mark's BMI("+bmi(marksHeight, marksMass).toFixed(1)+") is higher than John's("+bmi(johnHeight, johnMass).toFixed(1)+")!")
else
    console.log("John's BMI("+bmi(johnHeight, johnMass).toFixed(1)+") is higher than Mark's("+bmi(marksHeight, marksMass).toFixed(1)+")!")
