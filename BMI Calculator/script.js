document.getElementById("bmiForm").addEventListener("submit", function(e){
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const meters = parseFloat(document.getElementById("height-m").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if(gender && age && meters && weight){

        const bmi = weight / (meters*meters);
        const resultElement = document.getElementById("result");

        let catogory ='';

        if(bmi < 18.5){
            catogory = 'Under Weight';
        }
        else if (bmi >= 18.5){
            catogory = "Normal Weight";
        }
        else if (bmi >= 25 && bmi < 29.9){
            catogory = "Over Weight"
        }
        else{
            catogory = "Obese"
        }

        let resultMessage = "Your BMI: " + bmi.toFixed(2) + '<br>';
        resultMessage += "Category: " + catogory;

        resultElement.innerHTML = resultMessage;
    }
});

