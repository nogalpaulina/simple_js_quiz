function submitAnswers(){
	var total = 5;
	var score = 0;

	//Get User Input
	var q1 = document.querySelector('input[name="q1"]:checked').value;
	var q2 = document.querySelector('input[name="q2"]:checked').value;
	var q3 = document.querySelector('input[name="q3"]:checked').value;
	var q4 = document.querySelector('input[name="q4"]:checked').value;
	var q5 = document.querySelector('input[name="q5"]:checked').value;

	//Validation
		for(i = 1; i <= total; i++){
			if(eval('q' + i) == null || eval('q' + i) == ''){
			alert("You missed question " + i);
			return false;
		}

	}
	// Set Correct Answers
	var answers = ["b", "a", "d", "b", "d"];

	//Check the Answers
	for(i = 1; i <= total; i++){
		if(eval('q' + i) == answers[i - 1]){
			score++;
		}
	}
	// Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
	alert("Win");

	return false;
}