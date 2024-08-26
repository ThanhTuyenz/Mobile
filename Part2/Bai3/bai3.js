const mark={
    fullName:"Mark Miller",
    mass:78,
    height:1.69
}
const john={
    fullName:"John Smith",
    mass:92,
    height:1.95
}
const calcBMI=(mass,height)=>{
    return mass/(height**2);
}

mark.BMI=calcBMI(mark.mass,mark.height);
john.BMI=calcBMI(john.mass,john.height);
if(mark.BMI>john.BMI)
    console.log(`${mark.fullName}'s BMI (${mark.BMI.toFixed(1)}) is higher than ${john.fullName}'s (${john.BMI.toFixed(1)})`)
else
    console.log(`${john.fullName}'s BMI (${john.BMI.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.BMI.toFixed(1)})`)
