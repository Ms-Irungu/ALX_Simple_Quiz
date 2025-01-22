function checkAnswer(){
    const correctAnswer = "4";
    let selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedAnswer.value;

    const feedbackElement = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Optional: Feedback styling
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Optional: Feedback styling
        }

    }
document.getElementById("submit-answer").addEventListener("click", checkAnswer);