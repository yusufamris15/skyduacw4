
var questions = document.getElementsByClassName("question");
var arrows = document.getElementsByClassName("arrow");
var answers = document.getElementsByClassName("answer");

Array.from(questions).forEach(function (question, i) {
  question.addEventListener("click", function () {
    console.log("clicked");
    arrows[i].classList.toggle("toggle-arrow");
    answers[i].classList.toggle("answer-show")
  });
});


