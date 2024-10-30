function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
const heightInMeters = height/100;
const BMI = weight/ (heightInMeters * heightInMeters);
alert(BMI);

if (BMI<18.5) { 
  alert("underweight");
} else if (BMI>= 18.5 && BMI <25) {
  alert("Healthy weight");
} else if (BMI>=25 && BMI<30) {
  alert("overwight");
} else if (BMI>=30) {
  alert("Obesity");
}
  
if (BMI>=19 && BMI<=24 && age>=19 && age<=24){
  alert("HEALTHY");
} else if (BMI>=20 && BMI<=25 && age>=25 && age<=34){
  alert("HEALTHY");
} else if (BMI>=21 && BMI<=26 && age>=35 && age<=44){
  alert("HEALTHY");
} else if (BMI>=22 && BMI<=27 && age>=45 && age<=54){
  alert("HEALTHY");
} else if (BMI>=23 && BMI<=28 && age>=55 && age<=64){
  alert("HEALTHY");
} else if (BMI>=24 && BMI<=29 && age>65){
alert("HEALTHY");
} else {alert("NOT HEALTHY");}
}
