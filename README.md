# Quiz App

A simple browser-based quiz application built with HTML, CSS, and JavaScript.

## Features

- Randomized question order on each quiz session
- Multiple-choice answer buttons
- Progress counter with current question number
- Score tracking and final result display
- Restart quiz support

## Files

- `index.html` — page structure and quiz container
- `style.css` — visual styling for buttons, layout, and quiz cards
- `index.js` — quiz logic, question rendering, answer handling, and score tracking

## How to use

1. Open `index.html` in your browser.
2. Click the **Take Test** button.
3. Select an answer for each question.
4. Click **Next** to continue until the quiz finishes.
5. On the final screen, view your score and click **Restart Quiz** to try again.

## Notes

- The quiz randomizes both question order and answer order.
- Each question allows one selection before showing the next button.

## Development

If you want to modify the app:

1. Edit the `questions` array in `index.js` to add, remove, or change questions.
2. Update `style.css` to change the layout and styling.
3. Open `index.html` in a browser to test changes.
