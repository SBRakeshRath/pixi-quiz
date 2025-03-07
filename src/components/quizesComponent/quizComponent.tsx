export default function QuizComponent({
  Question,
  OptionOne,
  OptionTwo,
  OptionThree,
  OptionFour,
  Answer,
  explanation,
  QuestionNumber,
}: {
  Question: string;
  OptionOne: string;
  OptionTwo: string;
  OptionThree: string;
  OptionFour: string;
  Answer: number | boolean;
  explanation: string;
  QuestionNumber: number;
}) {
  const optionClicked = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    const options =
      target.parentElement?.parentElement?.querySelectorAll("input");
    options?.forEach((option) => {
      option.checked = false;
    });

    const currentInput = (
      e.target as HTMLLabelElement
    ).parentElement?.querySelector("input");
    // currentInput?.setAttribute("checked", "true")
    if (currentInput) {
      currentInput.checked = true;
    }
    console.log(currentInput);
  };
  console.log(Answer);
  return (
    <div className={`quizComponent`}>
      <div className="tittle">
        <h2>{Question}</h2>
      </div>
      <div className="optionsContainer">
        <div
          onClick={optionClicked}
          className={
            Answer
              ? Answer === 1
                ? "option correct"
                : "option incorrect"
              : "option"
          }
        >
          <input
            type="radio"
            name={`question${QuestionNumber}OptionOne`}
            id={`question${QuestionNumber}OptionOne`}
          />
          <label htmlFor={`question${QuestionNumber}OptionOne`}>
            {OptionOne}
          </label>
        </div>
        <div
          onClick={optionClicked}
          className={
            Answer
              ? Answer === 2
                ? "option correct"
                : "option incorrect"
              : "option"
          }
        >
          <input
            type="radio"
            id={`question${QuestionNumber}OptionTwo`}
            name={`question${QuestionNumber}OptionTwo`}
          />
          <label htmlFor={`question${QuestionNumber}OptionTwo`}>
            {OptionTwo}
          </label>
        </div>
        <div
          onClick={optionClicked}
          className={
            Answer
              ? Answer === 3
                ? "option correct"
                : "option incorrect"
              : "option"
          }
        >
          <input
            type="radio"
            name={`question${QuestionNumber}OptionThree`}
            id={`question${QuestionNumber}OptionThree`}
          />
          <label htmlFor={`question${QuestionNumber}OptionThree`}>
            {OptionThree}
          </label>
        </div>
        <div
          onClick={optionClicked}
          className={
            Answer
              ? Answer === 4
                ? "option correct"
                : "option incorrect"
              : "option"
          }
        >
          <input
            type="radio"
            name={`question${QuestionNumber}OptionFour`}
            id={`question${QuestionNumber}OptionFour`}
          />
          <label htmlFor={`question${QuestionNumber}OptionFour`}>
            {OptionFour}
          </label>
        </div>
      </div>
      <div
        className={
          explanation.trim() === "" ? "explanation hidden" : "explanation"
        }
      >
        <h3>Explanation</h3>
        <p>{explanation}</p>
      </div>
    </div>
  );
}
