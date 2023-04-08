import React from 'react';
import './main.css' ;
function ShowExam () {
    return (
        <>
        <div class="quiz-app">
      <div class="quiz-info">
        <div class="category">Welcome</div>
      </div>
      <div class="quiz-area">
        <button class="listen-button">Listen to Question</button>
      </div>
      <div class="answers-area">
        <div className='answer'> 
            <input type='radio' id = 'answer1' name = 'question' />
            <label for = 'answer1' > Answer 1 </label>
        </div>
        <div className='answer'> 
            <input type='radio' id = 'answer2' name = 'question' />
            <label for = 'answer2' > Answer 2 </label>
        </div>
        <div className='answer'> 
            <input type='radio' id = 'answer3' name = 'question' />
            <label for = 'answer3' > Answer 3 </label>
        </div>
        <div className='answer'> 
            <input type='radio' id = 'answer4' name = 'question' />
            <label for = 'answer4' > Answer 4 </label>
        </div>
      </div>
      <button class="submit-button">Submit Answer</button>
      <div class="bullets">
        <div class="spans"></div>
        <div class="countdown"></div>
      </div>
      <div class="results"></div>
    </div>
        </>
    );
}
export default ShowExam ;