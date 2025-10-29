import React, { useState } from 'react';
import { getJeopardyData, saveCustomData, clearCustomData } from '../utils/dataManager';
import './AdminModal.css';

const AdminModal = ({ onClose }) => {
  const [data, setData] = useState(getJeopardyData());
  const [saved, setSaved] = useState(false);

  const handleCategoryChange = (index, value) => {
    const newData = { ...data };
    newData.categories[index] = value;
    setData(newData);
    setSaved(false);
  };

  const handleQuestionChange = (categoryIndex, valueIndex, field, value) => {
    const newData = { ...data };
    newData.questions[categoryIndex][valueIndex][field] = value;
    setData(newData);
    setSaved(false);
  };

  const handleSave = () => {
    if (saveCustomData(data)) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset to default data? This will clear all custom changes.')) {
      clearCustomData();
      window.location.reload();
    }
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="admin-header">
          <h1>Admin Editor</h1>
          <button className="close-admin-btn" onClick={onClose}>×</button>
        </div>

        <div className="admin-actions">
          <button onClick={handleSave} className="save-btn">
            {saved ? '✓ Saved!' : 'Save Changes'}
          </button>
          <button onClick={handleReset} className="reset-btn">
            Reset to Default
          </button>
        </div>

        <div className="admin-content">
          <div className="categories-section">
            <h2>Categories</h2>
            {data.categories.map((category, idx) => (
              <div key={idx} className="category-input">
                <label>Category {idx + 1}:</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => handleCategoryChange(idx, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="questions-section">
            <h2>Questions & Answers</h2>
            <div className="questions-grid">
              {data.categories.map((category, catIdx) => (
                <div key={catIdx} className="category-column">
                  <h3>{category}</h3>
                  {data.values.map((value, valIdx) => (
                    <div key={valIdx} className="question-card">
                      <div className="value-label">${value}</div>
                      <label>Question:</label>
                      <textarea
                        value={data.questions[catIdx][valIdx].question}
                        onChange={(e) => handleQuestionChange(catIdx, valIdx, 'question', e.target.value)}
                        rows="3"
                      />
                      <label>Answer:</label>
                      <textarea
                        value={data.questions[catIdx][valIdx].answer}
                        onChange={(e) => handleQuestionChange(catIdx, valIdx, 'answer', e.target.value)}
                        rows="2"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminModal;

