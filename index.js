function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
let heightinmeter = height/100;
let BMI = weight / ((heightinmeter*heightinmeter));
alert("Your BMI is "+BMI)

// Below 18.5 Underweight
// 18.5 – 24.9 Healthy Weight
// 25.0 – 29.9 Overweight
// 30.0 and Above Obesity
// show the BMI state in an alert

       
if (BMI <18.5) {
  alert("Your BMI is  "+BMI+"  Underweight")}
  else if (BMI>=18.5 && BMI <=24.9) {
    alert("Your BMI is  "+BMI+" Healthy")}
  else if (BMI>=25.0 && BMI <=29.9) {
      alert("Your BMI is  "+BMI+"  Overweight")}
      else if (BMI>=30) {
        alert("Your BMI is "+BMI+"  Obese")}
      
      let healthy = "With regards to age, healthy"
      let unhealthy = "With regards to age, unhealthy"
 if ((age >=19 && age <=25)&&(bmi>=19 && bmi<= 24)) {
    alert(healthy); }
  else if ((age >=25 && age <=34)&&(BMI>=20 && BMI<= 25)){
    alert(healthy);
  }else if ((age >=35 && age <=44)&&(BMI>=21 && BMI<= 26)){
    alert(healthy);
  }else if ((age >=45 && age <=54)&&(BMI>=22 && BMI<= 27)){
    alert(healthy);
  }else if ((age >=55 && age <=64)&&(BMI>=23 && BMI<= 28)){
    alert(healthy);
  }else if ((age >65)&&(BMI>=24 && BMI<= 29)){
    alert(healthy);
  }else {
    alert(unhealthy);}
}

  