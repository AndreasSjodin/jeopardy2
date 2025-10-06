import React from 'react';
import './Scoreboard.css';

const Scoreboard = ({ scores, onScoreChange }) => {
  return (
    <div className="scoreboard">
      <div className="scoreboard-grid">
        {scores.map((score, index) => (
          <div key={index} className="team-score">
            <label htmlFor={`team-${index + 1}`}>Lag {index + 1}</label>
            <input
              id={`team-${index + 1}`}
              type="number"
              value={score}
              onChange={(e) => onScoreChange(index, e.target.value)}
              className="score-input"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoreboard; 