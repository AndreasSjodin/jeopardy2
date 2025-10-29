import React from 'react';
import './JeopardyBoard.css';
import { getJeopardyData } from '../utils/dataManager';

const JeopardyBoard = ({ onQuestionClick, viewedQuestions }) => {
  const jeopardyData = getJeopardyData();
  
  return (
    <div className="jeopardy-board">
      <div className="board-grid">
        {/* Category headers */}
        {jeopardyData.categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category-header">
            {category}
          </div>
        ))}
        
        {/* Question cells */}
        {jeopardyData.values.map((value, valueIndex) => (
          jeopardyData.categories.map((category, categoryIndex) => {
            const questionKey = `${categoryIndex}-${valueIndex}`;
            const isViewed = viewedQuestions.has(questionKey);
            
            return (
              <div
                key={`${categoryIndex}-${valueIndex}`}
                className={`question-cell ${isViewed ? 'viewed' : ''}`}
                onClick={() => !isViewed && onQuestionClick(categoryIndex, valueIndex)}
              >
                {isViewed ? '' : `$${value}`}
              </div>
            );
          })
        ))}
      </div>
    </div>
  );
};

export default JeopardyBoard; 