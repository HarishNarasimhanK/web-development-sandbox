# Image Slider Web Application

A responsive image slider/carousel that automatically transitions between images every 5 seconds. The application includes manual navigation controls and supports both automatic and manual image transitions.

## Features

- Automatic image transition every 5 seconds
- Manual navigation arrows (Previous/Next)
- Smooth transition effects
- Responsive design
- Supports 9 sequential images
- Mobile-friendly interface

## Project Structure

```
image-slider/
│
├── imageSlider.html
├── imageSlider.css
├── imageSlider.js
└── images/
    ├── 1.png
    ├── 2.png
    ├── 3.png
    ├── 4.png
    ├── 5.png
    ├── 6.png
    ├── 7.png
    ├── 8.png
    └── 9.png
```

## Technical Implementation

### HTML (imageSlider.html)
The HTML structure includes:
- Container for the slider
- Image container
- Navigation arrows (< and >)
- Image elements for all 9 images
- Links to CSS and JavaScript files

### CSS (imageSlider.css)
The stylesheet contains:
- Slider container styling
- Image positioning and sizing
- Navigation arrow styling
- Transition animations
- Responsive design rules
- Hover effects for navigation

### JavaScript (imageSlider.js)
The JavaScript functionality includes:
- 5-second automatic slideshow timer
- Manual navigation handling
- Transition effects
- Image sequence management (1.png through 9.png)
- Touch event handling for mobile
- Window resize handling

## Setup and Usage

1. Download all files into the same directory
2. Ensure all 9 PNG images are numbered sequentially (1.png through 9.png)
3. Place images in the root folder
4. Open `imageSlider.html` in a web browser

## Usage Instructions

- Images transition automatically every 5 seconds
- Click left/right arrows for manual navigation
- Slider is responsive and adjusts to container size
- Touch-swipe enabled for mobile devices

## Image Requirements

- Images should be named numerically (1.png through 9.png)
- PNG format required
- Consistent image dimensions recommended
- Optimized file sizes for web performance

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
- Support for different image formats
- Customizable transition timing
- Progress bar indicator
- Thumbnail navigation
- Caption support
- Custom navigation styling
- Dynamic image loading
- Support for variable number of images

## Performance Considerations

- Sequential image naming for easy management
- CSS transitions for smooth effects
- Optimized for mobile devices
- Minimal DOM manipulation
