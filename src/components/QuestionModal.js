import React, { useState } from 'react';
import './QuestionModal.css';
import { jeopardyData } from '../data/jeopardyData';

const QuestionModal = ({ question, onClose }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  
  const { categoryIndex, valueIndex } = question;
  const category = jeopardyData.categories[categoryIndex];
  const value = jeopardyData.values[valueIndex];
  const questionData = jeopardyData.questions[categoryIndex][valueIndex];

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleClose = () => {
    setShowAnswer(false);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{category} - ${value}</h2>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="question-text">
            {questionData.question}
          </div>
          
          {!showAnswer ? (
            <button className="show-answer-button" onClick={handleShowAnswer}>
              Show Answer
            </button>
          ) : (
            <div className="answer-section">
              <div className="answer-text">
                {questionData.answer}
              </div>
              <button className="close-modal-button" onClick={handleClose}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionModal; 