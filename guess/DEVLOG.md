# Guessing Game - Dev Log

## Day 1 - Building the First JavaScript Project

Today I started learning JavaScript by building a simple number guessing game.

The goal is simple: the computer generates a random number between 1 and 100, and the user tries to guess it.

### What I learned

- How to generate random numbers with `Math.random()`
- How `Math.floor()` works
- How to get an HTML element using `document.getElementById()`
- How to get a user's input using `.value`
- How to convert input into a number using `Number()`
- How to use `if`, `else if`, and comparison operators
- How to update HTML using `.textContent`
- How to handle a button click with `onclick`
- How to keep track of attempts using a variable
- How JavaScript interacts with HTML and CSS

### What I built

The current version:

- Generates a random number from 1 to 100
- Accepts a user's guess
- Tells the user whether the guess is too high or too low
- Detects a correct guess
- Counts the number of attempts
- Clears the input after each guess

### Problems I encountered

At first I tried using a `while` loop with a `running` variable. I realized this wasn't necessary because the button click calls the function each time.

I also learned that `.value` gives me the value from the input, not the input element itself.

### Next challenge

Make the game stop accepting guesses after the correct number is found.

---

## What I learned

This project helped me understand that JavaScript isn't just about writing code in a `.js` file. It can interact with HTML and change what the user sees on the page.

This is my first small step toward learning JavaScript and eventually React Native.