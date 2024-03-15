// // Made an array to the questions and answers x correct answer
// let quizInfo = [
//     {
//         question: "Who has won the most Grammys?",
//         options: ["Michael Jackson", "Taylor Swift", "Beyonce", "Drake"],
//         correctAnswer: 2
//     },
//     {
//         question: "Who is coined, the Queen of Rap?",
//         options: ["Lil Kim", "Ice Cube", "Cardi B", "Nicki Minaj"],
//         correctAnswer: 3
//     },
//     {
//         question: "Which female artist has the most music videos over 1 Billion Views",
//         options: ["Rihanna", "Karol G", "Ariana Grande", "Taylor Swift"],
//         correctAnswer: 0
//     },
//     {
//         question: "Which artist has the record for longest running number one song",
//         options: ["Mariah Carey", "Lil Nas X", "Drake", "Doja Cat"],
//         correctAnswer: 1
//     },
// ];
// // saving the score
// let score = 0;

// // loop to go through quizInfo array
// for (let i = 0; i < quizInfo.length; i++) {
//     let currentQuestion = quizInfo[i];
//     // Display question
//     console.log("Question: " + currentQuestion.question);
//     // Displaying answer options
// for (let j = 0; j < currentQuestion.options.length; j++) {
//     console.log(j + 1 + ". " + currentQuestion.options[j]); // 1. Who has the most grammys
// }
// // get users answers
// let userAnswer;

// do {
//     // Prompt the user for their answer
//     userAnswer = prompt(`Select your answer (1-${currentQuestion.options.length}):`);

//   //invalid option
//   if (!(userAnswer >= 1 && userAnswer <= currentQuestion.options.length)) {
//     alert('Invalid option! Please select valid option.');
//   }
// } while (!(userAnswer >= 1 && userAnswer <= currentQuestion.options.length));

//     //check to see answer correct
//     if (userAnswer - 1 === currentQuestion.correctAnswer) {
//         console.log("Correct!\n");
//         score++;
//     } else {
//         console.log("Incorrect. The correct answer is: " + currentQuestion.options[currentQuestion.correctAnswer] + "\n");
//     }
// }

// console.log("Quiz Complete! Your score is: "+ score + " out of " + quizInfo.length);

// Incorrect outcome - ATTEMPT TWO

// let quizInfo = [
//     {
//         question: "Who has won the most Grammys?",
//         options: ["Michael Jackson", "Taylor Swift", "Beyonce", "Drake"],
//         correctAnswer: 2
//     },
//     {
//         question: "Who is coined, the Queen of Rap?",
//         options: ["Lil Kim", "Ice Cube", "Cardi B", "Nicki Minaj"],
//         correctAnswer: 3
//     },
//     {
//         question: "Which female artist has the most music videos over 1 Billion Views",
//         options: ["Rihanna", "Karol G", "Ariana Grande", "Taylor Swift"],
//         correctAnswer: 0
//     },
//     {
//         question: "Which artist has the record for longest running number one song",
//         options: ["Mariah Carey", "Lil Nas X", "Drake", "Doja Cat"],
//         correctAnswer: 1
//     },
// ];

// let score = 0;
// let currentQuestionIndex = 0;

// function showQuestion() {
//     let currentQuestion = quizInfo[currentQuestionIndex];
//     document.getElementById("question").innerText = currentQuestion.question;

//     let optionsContainer = document.getElementById("options-container");
//     optionsContainer.innerHTML = "";

//     for (let j = 0; j < currentQuestion.options.length; j++) {
//         let button = document.createElement("button");
//         button.innerText = currentQuestion.options[j];
//         button.addEventListener("click", function() {
//             checkAnswer(j);
//         });
//         optionsContainer.appendChild(button);
//     }
// }

// function checkAnswer(selectedOptionIndex) {
//     let currentQuestion = quizInfo[currentQuestionIndex];
//     if (selectedOptionIndex === currentQuestion.correctAnswer) {
//         console.log("Correct!");
//         score++;
//     } else {
//         console.log("Incorrect. The correct answer is: " + currentQuestion.options[currentQuestion.correctAnswer]);
//     }

//     currentQuestionIndex++;
//     if (currentQuestionIndex < quizInfo.length) {
//         showQuestion();
//     } else {
//         console.log("Quiz Complete! Your score is: " + score + " out of " + quizInfo.length);
//     }
// }

// // Initialize the quiz
// showQuestion();

//QUIZ ATTEMPT 3
let quiz = [
    {
      questions: "Who has won the most Grammys?",
      options: ["Michael Jackson", "Taylor Swift", "Beyonce", "Drake"],
      correctAnswer: "Beyonce",
    },
    {
      questions: "Who is coined, the Queen of Rap?",
      options: ["Lil Kim", "Ice Cube", "Cardi B", "Nicki Minaj"],
      correctAnswer: "Nicki Minaj",
    },
    {
      questions:
        "Which female artist has the most music videos over 1 Billion Views",
      options: ["Rihanna", "Karol G", "Ariana Grande", "Taylor Swift"],
      correctAnswer: "Rihanna",
    },
    {
      questions:
        "Which artist has the record for longest running number one song",
      options: ["Mariah Carey", "Lil Nas X", "Drake", "Doja Cat"],
      correctAnswer: "Lil Nas X",
    },
  ];
  
  let score = 0;
  
  for (let i = 0; i < quiz.length; i++) {
    let userAnswer = prompt(
      quiz[i].questions + "\nChoose one:\n" + quiz[i].options.join("\n") + "\n\n"
    );
  
    if (
      userAnswer &&
      userAnswer.toLowerCase() === quiz[i].correctAnswer.toLowerCase()
    ) {
      alert("Correct!");
      score++;
    } else if (userAnswer === null) {
      console.log("User Pressed Cancel.");
      alert("Invalid answer. Please try again.");
      i--; // If the user pressed "Cancel," decrement the loop counter to repeat the same question
    } else {
      console.log("Incorrect Answer.");
      alert("Incorrect. The correct answer is: " + quiz[i].correctAnswer);
    }
  
  }
  alert("Quiz completed!\nYour score: " + score + " out of " + quiz.length);
  

  

// we use both reg and lowercase to make answer case insensitive.

// Function to display and check the user's answers
// function startQuiz() {
//     let score = 0;

//     for (var i = 0; i < questions.length; i++) {
//         var userAnswer = prompt(questions[i]);

//         // Check if the user's answer is correct
//         if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
//             alert("Correct!");
//             score++;
//         } else {
//             alert("Incorrect. The correct answer is: " + answers[i]);
//         }
//     }

//     // Display the final score
//     alert("Quiz completed!\nYour score: " + score + " out of " + questions.length);
// }
