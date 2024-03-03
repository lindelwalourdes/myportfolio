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
  let cancelled = false;
  for (let i = 0; i < quiz.length && !cancelled; i++) {
    let userAnswer = prompt(
      quiz[i].questions + "\nChoose one:\n" + quiz[i].options.join("\n") + "\n\n"
    );
  
    if (userAnswer === null) {
      console.log("User Pressed Cancel.");
      cancelled = true;    
      } else if (userAnswer.toLowerCase() === quiz[i].correctAnswer.toLowerCase()) {
      console.log("Correct Answer.");
      alert("Correct Answer.");
      score++;
    } else {
      console.log("Incorrect Answer.");
      alert("Incorrect. The correct answer is: " + quiz[i].correctAnswer);
    }
  }
  if (!cancelled) {
  alert("Quiz completed!\nYour score: " + score + " out of " + quiz.length);
  } else {
    alert("Quiz cancelled!\nYour score: " + score + " out of " + quiz.length);
  }
  
