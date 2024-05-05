const apiKey = "f29ababb7a5886470525f8e599bbc143"

const appId = "42b9b596"


const nutritionURL = "https://api.edamam.com/api/nutrition-data?app_id=" +  appId + "&app_key=" + apiKey + "&ingr= 1 cup "; 

const submitButton = document.getElementById("ingrBtn")
submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    const ingrInputValue = document.getElementById("ingrInput").value
console.log(ingrInputValue)
    fetch(nutritionURL + ingrInputValue)
    .then(response => response.json())
    
    .then((data) => {
        const {calories, healthLabels, totalNutrientsKCal: {CHOCDF_KCAL, FAT_KCAL, PROCNT_KCAL }}= data
        console.log(data)
        const ingrResults= document.getElementById("ingrResults");

        const calorieLabel = document.createElement("h3");
        calorieLabel.innerText = "Total Calories"
        const calorieValue = document.createElement('span')
        calorieValue.innerText = calories
        ingrResults.appendChild(calorieLabel)
        ingrResults.appendChild(calorieValue)

        const healthLabel = document.createElement("h3");
        healthLabel.innerText = "Health Labels"
        const healthValue = document.createElement('span')
        healthValue.innerText = healthLabels
        ingrResults.appendChild(healthLabel)
        ingrResults.appendChild(healthValue)

        const caloriesPerCarbo = document.createElement("h3");
        caloriesPerCarbo.innerText = "Total Nutrients"
        const caloriesPerCarboValue = document.createElement('span')
        caloriesPerCarbo.innerText = CHOCDF_KCAL.label
        caloriesPerCarboValue.innerText = CHOCDF_KCAL.quantity
        ingrResults.appendChild(caloriesPerCarbo)
        ingrResults.appendChild(caloriesPerCarboValue)

        const caloriesPerFat = document.createElement("h3");
        caloriesPerFat.innerText = "Total Nutrients"
        const caloriesPerFatValue = document.createElement('span')
        caloriesPerFat.innerText = FAT_KCAL.label
        caloriesPerFatValue.innerText = FAT_KCAL.quantity
        ingrResults.appendChild(caloriesPerFat)
        ingrResults.appendChild(caloriesPerFatValue)

        const caloriesPerPro = document.createElement("h3");
        caloriesPerPro.innerText = "Total Nutrients"
        const caloriesPerProValue = document.createElement('span')
        caloriesPerPro.innerText = PROCNT_KCAL.label
        caloriesPerProValue.innerText = PROCNT_KCAL.quantity
        ingrResults.appendChild(caloriesPerPro)
        ingrResults.appendChild(caloriesPerProValue)




       })

})



