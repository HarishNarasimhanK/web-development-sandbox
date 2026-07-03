# Password Generator Web Application

A simple web application that generates secure random passwords at the click of a button. The application features a clean interface with a single "Generate" button that produces a random string of characters suitable for use as a password.

## Features

- One-click password generation
- Generates passwords with mixed characters:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters
- Clean, minimalist interface
- Easy to copy generated password
- Dark theme design

## Project Structure

```
password-generator/
│
├── pwdgenerator.html
├── pwdgenerator.css
└── pwdgenerator.js
```

## Technical Implementation

### HTML (pwdgenerator.html)
The HTML structure includes:
- Generate button
- Display area for the generated password
- Simple and clean layout
- Links to CSS and JavaScript files

### CSS (pwdgenerator.css)
The stylesheet contains:
- Dark theme styling
- Button design and hover effects
- Password display formatting
- Responsive layout design

### JavaScript (pwdgenerator.js)
The JavaScript functionality includes:
- Random password generation logic
- Character set management
- Display update handling
- Button click event listener

## Setup and Usage

1. Download all three files into the same directory
2. Open `pwdgenerator.html` in a web browser
3. To use:
   - Click the "GENERATE" button
   - The new password will appear below the button
   - Click or select the password to copy it

## Password Generation Details

- Generates fixed-length passwords
- Uses cryptographically secure random number generation when available
- Ensures inclusion of various character types for stronger passwords

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

## Security Notes

- Generates passwords client-side for security
- Does not store or transmit passwords
- Uses browser's secure random number generation
- No password logging or tracking

## Contributing

To contribute to this project:
1. Fork the repository
2. Create your feature branch
3. Make your improvements
4. Submit a pull request

## Future Enhancements

Potential features that could be added:
- Adjustable password length
- Character set selection
- Password strength indicator
- Copy to clipboard button
