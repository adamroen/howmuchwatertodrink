



function waterCalc(){
	var newWeight = 0;
	var weight = document.querySelector("#weight").value;
	newWeight = Math.round(weight * (2/3));
	document.querySelector("#result").textContent = "You should be drinking: " + newWeight + " ounces of water per day";
};