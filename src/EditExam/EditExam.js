import React, { useState } from "react";
import "./EditExam.css";

function EditExam() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      answers: [
        { id: 1, text: "New York" },
        { id: 2, text: "London" },
        { id: 3, text: "Paris", isCorrect: true },
        { id: 4, text: "Berlin" },
      ],
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      answers: [
        { id: 1, text: "Venus" },
        { id: 2, text: "Jupiter", isCorrect: true },
        { id: 3, text: "Saturn" },
        { id: 4, text: "Mars" },
      ],
    },
  ]);

  const handleQuestionChange = (event, questionId) => {
    const { name, value } = event.target;
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, [name]: value } : q
      )
    );
  };

  const handleAnswerChange = (event, questionId, answerId) => {
    const { name, value } = event.target;
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              answers: q.answers.map((a) =>
                a.id === answerId ? { ...a, [name]: value } : a
              ),
            }
          : q
      )
    );
  };

  return (
    <div className="edit-exam-container">
      {questions.map((q) => (
        <div key={q.id} className="question-container">
          <h3 className="question-header">Question {q.id}</h3>
          <form>
            <label>
              Question:
              <input
                type="text"
                name="question"
                value={q.question}
                onChange={(e) => handleQuestionChange(e, q.id)}
              />
            </label>
            <ul className="answers-list">
              {q.answers.map((a) => (
                <li key={a.id} className="answer-item">
                  <label>
                    Answer:
                    <input
                      type="text"
                      name="text"
                      value={a.text}
                      onChange={(e) => handleAnswerChange(e, q.id, a.id)}
                    />
                  </label>
                  <label>
                    Correct:
                    <input
                      type="checkbox"
                      name="isCorrect"
                      checked={a.isCorrect}
                      onChange={(e) => handleAnswerChange(e, q.id, a.id)}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </form>
        </div>
      ))}
    </div>
  );
}

export default EditExam;
