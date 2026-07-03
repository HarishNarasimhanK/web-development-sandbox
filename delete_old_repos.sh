#!/bin/bash
# Script to delete the 9 old repositories that were consolidated.

# Array of repository names to delete
repos=(
  "Image-Slider-Using-HTML-CSS-JavaSCript"
  "Digital-Clock-Using-HTML-CSS-JavaScript"
  "DiceRoller-Using-HTML-CSS-JavaScript"
  "SimplePasswordGenerator-Using-HTML-CSS-JavaScript"
  "TemperatureConverter-Using-HTML-CSS-JavaScript"
  "StopWatch-Using-HTML-CSS-JavaScript"
  "WeatherForecastApp-Using-HTML-CSS-JavaScript"
  "RockPaperScissors-Using-HTML-CSS-Javascript"
  "Counter-Using-HTML-CSS-Javascript"
)

# Loop and delete each repo using GitHub CLI
for repo in "${repos[@]}"; do
  echo "Deleting HarishNarasimhanK/$repo..."
  gh repo delete "HarishNarasimhanK/$repo" --yes
done

echo "Done! All 9 old repositories have been deleted."
