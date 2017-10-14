window.onload = function() {

var count = 30;
var counter;
var wins = 0; 
var losses = 0;
var currentAnswer = "";
var currentQuestionIndex = 1;

$("#wrapper").hide();

$(document).on("click", "button", function() {
	document.getElementById("audio").play();
	console.log("workingggggg!");
});


$("#start-button").on('click', function() {
	 counter = setInterval(timerThirty, 1000);
	$("#start-button").hide();
	$("#wrapper").show();
	question1();
});

function showNextQuestion(){
	if(currentQuestionIndex===1){
		question2();
	}else if (currentQuestionIndex ===2){
		question3();
	} 
	currentQuestionIndex++;
	console.log("current question = " + currentQuestionIndex);
}

function timerThirty() {

	count = count -1;
	console.log(count);
	if(count <=0) {
	
		stopTimer();
		timesUp();

	}; $("#gameTimer").text("Time Remaining: " + count);
};

function stopTimer(){
	clearInterval(counter);
}

function timesUp(){
	$("#start-button").hide();
	$("#wrapper").hide();
	$("#displayAnswer").html("Times Up! " + "<br>" + "The correct answer is: " + currentAnswer);
	$("#displayAnswer").show();
	setTimeout(showNextQuestion,3000);
}

function winning() {
	console.log(wins);
	wins++
	$("#start-button").hide();
	$("#wrapper").hide();
	$("#displayAnswer").html("You got it!");
}

function losing() {
	losses++
	$("#start-button").hide();
	$("#wrapper").hide();
	$("#displayAnswer").html("Wrong! " + "The correct answer is: " + currentAnswer);

}

function gameOver() {
	$("#displayAnswer").html("Game Over!" + "<br>");
	$("#displayAnswer").append("Results: " + wins + " out of 3 correct");
	
}



function question1() {
	$("#askQuestion").html("Who is the current governor?");
	currentAnswer = "Jerry Brown";
	$("#answer-1").html("Jerry Brown");
	$("#answer-1").val("Jerry Brown");
	$("#answer-2").html("Pete Wilson");
	$("#answer-2").val("Pete Wilson");
	$("#answer-3").html("James Brown");
	$("#answer-3").val("James Brown");
	$("#answer-4").html("Gray Davis");
	$("#answer-4").val("Gray Davis");

		$("button").click(function() {
			if(this.value == "Jerry Brown") {
				console.log("working!");
				winning();
				stopTimer();
				setTimeout(showNextQuestion,3000);

					

			}
			else {

				losing();
				stopTimer();
				setTimeout(showNextQuestion,3000);
			}


        });

}


function question2() {
	$("#askQuestion").html("What is the largest county?");
	currentAnswer = "Los Angeles";
	$("#answer-1").html("Orange");
	$("#answer-1").val("Orange");
	$("#answer-2").html("Los Angeles");
	$("#answer-2").val("Los Angeles");
	$("#answer-3").html("Riverside");
	$("#answer-3").val("Riverside");
	$("#answer-4").html("San Diego");
	$("#answer-4").val("San Diego");
	$("#displayAnswer").hide();
	$("#wrapper").show();
	clearInterval(counter);
	count = 30;
	counter = setInterval(timerThirty, 1000);

	


		$("button").click(function() {
			if(this.value == "Los Angeles" ) {
				console.log("working!");
				$("#displayAnswer").show();
				winning();
				stopTimer();
				setTimeout(showNextQuestion,3000);

					

			}
			else {
				$("#displayAnswer").show();
				losing();
				stopTimer();
				setTimeout(showNextQuestion,3000);
			}


        });

}

function question3() {
	$("#askQuestion").html("What is the capital of California?");
	currentAnswer = "Sacramento";
	$("#answer-1").html("Los Angeles");
	$("#answer-1").val("Los Angeles");
	$("#answer-2").html("Sacramento");
	$("#answer-2").val("Sacramento");
	$("#answer-3").html("San Diego");
	$("#answer-3").val("San Diego");
	$("#answer-4").html("San Jose");
	$("#answer-4").val("San Jose");
	$("#displayAnswer").hide();
	$("#wrapper").show();
	clearInterval(counter);
	count = 30;
	counter = setInterval(timerThirty, 1000);



		$("button").click(function() {
			if(this.value == "Sacramento") {
				console.log("working!");
				winning();
				$("#displayAnswer").show();
				stopTimer();
				setTimeout(gameOver,3000);
				// setTimeout(function(){
				// 	question3();
				// },5000);

					

			}
			else {

				losing();
				$("#displayAnswer").show();
				stopTimer();
				setTimeout(gameOver,3000);
				// setTimeout(function(){
				// 	question3();
				// },5000);
			}


        });

}








};

