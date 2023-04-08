import React, { useState } from "react";
import './ExamCreator.css';
function ExamCreator() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const deleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const question = form.question.value;
    const answers = Array.from(form.answers)
      .filter((input) => input.checked)
      .map((input) => input.value);
    addQuestion({ question, answers });
    form.reset();
  };

  return (
    <div>
      <h1>Create a New Exam</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          <ul>
            {question.answers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
          <button onClick={() => deleteQuestion(index)}>Delete</button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input type="File" name="question" className="question-input"/>
        </label>
        <br />
        <label >
          Answers:
          <br />
          <br />
          <input type="checkbox" name="answers" value="Option 1"  />
          <input type="text" name="option1" className="question-input" />
          <br />
          <input type="checkbox" name="answers" value="Option 2" />
          <input type="text" name="option2" className="question-input"/>
          <br />
          <input type="checkbox" name="answers" value="Option 3" />
          <input type="text" name="option3" className="question-input"/>
        </label>
        <br />
        <div className="btns"> 
          <button type="submit">Save Exam</button>
        <button type="submit">Add Question</button>
        </div>
        
      </form>
    </div>
  );
}

export default ExamCreator;
