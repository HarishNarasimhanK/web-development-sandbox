# Dice Roller Web Application

A web-based dice rolling application that simulates rolling physical dice. The application features a clean interface with the ability to select the number of dice and roll them with a simple click.

## Features

- Select number of dice to roll (user can choose upto maximum of 4)
- Visual dice representation with dots
- "Roll Dice" button for rolling
- Displays numerical result
- Real-time dice face updates

## Project Structure

```
dice-roller/
│
├── dice.html
├── dice.css
└── dice.js
```

## Technical Implementation

### HTML (dice.html)
The HTML structure includes:
- Heading with application title
- Number input for dice selection
- Roll button
- Result display area
- Visual dice representation
- Links to CSS and JavaScript files

### CSS (dice.css)
The stylesheet contains:
- Dark theme styling
- Dice face styling with dots
- Button design and hover effects
- Input field customization
- Responsive layout adjustments

### JavaScript (dice.js)
The JavaScript functionality includes:
- Random number generation
- Dice face rendering
- Input validation
- Button click handling
- Display updates

## Setup and Usage

1. Download all three files into the same directory
2. Open `dice.html` in a web browser
3. To use:
   - Select the number of dice you want to roll
   - Click the "ROLL DICE" button
   - View both numerical result and visual dice representation

## Dice Rolling Details

- Generates random numbers from 1 to 6
- Updates visual dice faces dynamically
- Supports rolling multiple dice simultaneously
- Shows sum of all dice rolled

## Visual Elements

- Dice faces shown with traditional dot patterns
- Blue roll button for clear interaction
- Red accent for number input
- White text on dark background
- Clear visual hierarchy

## Browser Compatibility

Works with all modern web browsers including:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Dependencies

This is a standalone application with no external dependencies. It uses:
- Vanilla JavaScript
- Standard HTML5
- Pure CSS3

## Contributing

To contribute to this project:
1. Fork the repository
2. Create your feature branch
3. Make your improvements
4. Submit a pull request

## Future Enhancement Ideas

Potential features that could be added:
- Animation for rolling dice
- Sound effects
- Different dice types (D4, D8, D20, etc.)
- History of rolls
- Statistics tracking
