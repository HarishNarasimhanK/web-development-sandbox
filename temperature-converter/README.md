# Temperature Converter Web Application

A user-friendly web application that converts temperatures between Fahrenheit and Celsius. The application provides instant conversion in both directions with a clean, intuitive interface.

## Features

- Bidirectional conversion:
  - Fahrenheit to Celsius
  - Celsius to Fahrenheit
- Real-time conversion as you type
- Clean, responsive user interface
- Input validation for numbers
- Clear and readable display of results

## Project Structure

```
temp/
│
├── temp.html
├── temp.css
└── temp.js
```

## Technical Implementation

### HTML (temp.html)
The HTML file includes:
- Input fields for temperature values
- Radio buttons or dropdown for selecting conversion type
- Result display area
- Clear and intuitive form layout
- Links to CSS and JavaScript files

### CSS (temp.css)
The stylesheet contains:
- Responsive design elements
- Input field styling
- Button and radio button customization
- Color scheme and typography

### JavaScript (temp.js)
The JavaScript file handles:
- Conversion calculations
- Input validation
- Real-time updates
- Event listeners for user interactions
- Format handling for decimal places

## Setup and Usage

1. Download all three files (temp.html, temp.css, temp.js) into the same directory
2. Open `temp.html` in any modern web browser
3. To use the converter:
   - Select desired conversion type (°F to °C or °C to °F)
   - Enter the temperature value
   - See the converted result instantly

## Conversion Formulas

The application uses standard temperature conversion formulas:
- Celsius to Fahrenheit: (°C × 9/5) + 32
- Fahrenheit to Celsius: (°F - 32) × 5/9

## Browser Compatibility

Compatible with all modern web browsers including:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

## Dependencies

This is a standalone application with no external dependencies. It uses:
- Vanilla JavaScript
- Standard HTML5
- Pure CSS3

## Features Details

1. Input Validation
   - Accepts numerical input only
   - Handles negative temperatures
   - Supports decimal points
   - Prevents invalid input

2. User Interface
   - Clear input fields
   - Easy-to-read output
   - Intuitive conversion selection
   - Mobile-responsive design

## Performance Optimization

- Lightweight and fast loading
- Efficient event handling
- Minimal DOM manipulation
- Optimized for mobile devices

## Contributing

To contribute to this project:
1. Fork the repository
2. Create your feature branch
3. Make your improvements
4. Submit a pull request

## Known Issues

- Rounds to 1 decimal places by default
- Scientific notation not supported for very large numbers
