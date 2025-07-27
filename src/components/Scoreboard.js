import React from 'react';
import './Scoreboard.css';

const Scoreboard = ({ scores, onScoreChange }) => {
  return (
    <div className="scoreboard">
      <h2>Team Scores</h2>
      <div className="scoreboard-grid">
        {scores.map((score, index) => (
          <div key={index} className="team-score">
            <label htmlFor={`team-${index + 1}`}>Team {index + 1}</label>
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