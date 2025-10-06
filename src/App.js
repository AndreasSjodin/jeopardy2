import React, { useState } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import JeopardyBoard from './components/JeopardyBoard';
import QuestionModal from './components/QuestionModal';

function App() {
  const [scores, setScores] = useState([0, 0, 0, 0]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [viewedQuestions, setViewedQuestions] = useState(new Set());

  const handleScoreChange = (teamIndex, newScore) => {
    const newScores = [...scores];
    newScores[teamIndex] = parseInt(newScore) || 0;
    setScores(newScores);
  };

  const handleQuestionClick = (categoryIndex, valueIndex) => {
    const questionKey = `${categoryIndex}-${valueIndex}`;
    if (!viewedQuestions.has(questionKey)) {
      setSelectedQuestion({ categoryIndex, valueIndex });
    }
  };

  const handleCloseModal = () => {
    if (selectedQuestion) {
      const questionKey = `${selectedQuestion.categoryIndex}-${selectedQuestion.valueIndex}`;
      setViewedQuestions(prev => new Set([...prev, questionKey]));
      setSelectedQuestion(null);
    }
  };

  return (
    <div className="App">
      <Scoreboard scores={scores} onScoreChange={handleScoreChange} />
      <JeopardyBoard 
        onQuestionClick={handleQuestionClick}
        viewedQuestions={viewedQuestions}
      />
      {selectedQuestion && (
        <QuestionModal
          question={selectedQuestion}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
