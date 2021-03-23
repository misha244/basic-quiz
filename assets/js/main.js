const questions = [
  {
    title: "How many heading element are there in HTML?",
    choices: ["3 headings", "4 headings", "5 headings", "6 headings"],
    answer: "6 headings",
  },
];

const startButton = document.getElementById("start-button");

const createChoices = (choices) => {
  const createChoiceAndAppend = (choice) => {
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("data-answer", choice);
    button.textContent = choice;

    div.appendChild(button);

    parentDiv.append;

    console.log(div);
  };
  choices.forEach(createChoice);
};
const createQuestion = (question) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("id", "question");
  divContainer.setAttribute("data-answer", question.answer);

  const h2 = document.createElement("h2");
  h2.textContent = question.title;

  // create choices
  const choices = createChoices(question.choices);
};

const startQuiz = () => {
  // create question container
  createQuestion(questions[0]);
  // remove start button container
  // append question container to the DOM
};

startButton.addEventListener("click", startQuiz);
