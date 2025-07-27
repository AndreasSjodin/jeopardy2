# Jeopardy Game

A React-based Jeopardy game board with interactive features, team scoring, and a beautiful UI.

## Features

- **Interactive Game Board**: 6x5 grid with categories and dollar values
- **Team Scoreboard**: 4 teams with editable score inputs
- **Question Modal**: Click on any cell to view the full question and answer
- **Viewed State**: Questions are marked as viewed after being clicked
- **Responsive Design**: Works on desktop and mobile devices
- **Easily Customizable**: All game data is centralized and easily exchangeable

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Play

1. **Team Setup**: Enter initial scores for your 4 teams in the scoreboard at the top
2. **Select Questions**: Click on any dollar amount cell to view the question
3. **View Questions**: The modal will show the full question text
4. **Show Answer**: Click "Show Answer" to reveal the correct answer
5. **Update Scores**: Modify team scores as needed during gameplay
6. **Track Progress**: Viewed questions are marked with a different appearance

## Customizing the Game

### Changing Game Data

All game data is stored in `src/data/jeopardyData.js`. To create your own game:

1. **Categories**: Modify the `categories` array with your 6 category names
2. **Questions**: Update the `questions` array with your questions and answers
3. **Values**: Change the `values` array if you want different dollar amounts

### Data Structure

```javascript
export const jeopardyData = {
  categories: ["CATEGORY 1", "CATEGORY 2", ...], // 6 categories
  questions: [
    // Array of 6 categories, each containing 5 questions
    [
      { question: "Your question here?", answer: "What is the answer?" },
      // ... 4 more questions
    ],
    // ... 5 more categories
  ],
  values: [200, 400, 600, 800, 1000] // Dollar amounts
};
```

### Example Customization

```javascript
// Change categories
categories: ["HISTORY", "SCIENCE", "LITERATURE", "SPORTS", "MOVIES", "GEOGRAPHY"]

// Change dollar values
values: [100, 200, 300, 400, 500]

// Add your own questions
questions: [
  [
    { question: "Who was the first President of the United States?", answer: "Who is George Washington?" },
    // ... more questions
  ],
  // ... more categories
]
```

## Project Structure

```
src/
├── components/
│   ├── Scoreboard.js          # Team score display and editing
│   ├── JeopardyBoard.js       # Main game board
│   ├── QuestionModal.js       # Question/answer modal
│   └── *.css                  # Component styles
├── data/
│   └── jeopardyData.js        # Game data (easily customizable)
├── App.js                     # Main application component
└── App.css                    # Global styles
```

## Features in Detail

### Scoreboard
- 4 team scores displayed horizontally
- Editable HTML inputs for real-time score updates
- Responsive design that works on all screen sizes

### Game Board
- 6 categories across the top
- 5 dollar values per category ($200-$1000)
- Clickable cells with hover effects
- Viewed questions are visually marked

### Question Modal
- Full-screen overlay with blur effect
- Displays category and dollar amount
- Two-step process: question first, then answer
- Close button to return to game board

## Styling

The game uses a modern, Jeopardy-inspired design with:
- Blue gradient backgrounds
- Gold accents (#ffd700)
- Smooth animations and transitions
- Responsive grid layouts
- Glass-morphism effects

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## Contributing

Feel free to customize the game data, add new features, or improve the styling. The modular component structure makes it easy to extend and modify.

## License

This project is open source and available under the MIT License.
