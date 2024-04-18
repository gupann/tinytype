# 2024 Spring ECE 188: Applied & Interactive Machine Learning

## TinyType—the Design

[Check out my design process](https://docs.google.com/presentation/d/1SPL_SNFfWVUX5HuODdvf05jS8XQfyndW5x2WBPxmhqI/edit?usp=sharing)

My keyboard design optimizes the user interface of a compact (2 cm by 2 cm, totaling 4 cm²) keypad by prioritizing the accessibility of more frequently used letters in the English language. The design logic assigns the most common letters to be accessed with a single tap, which minimizes the effort required to type commonly used words. Less frequent letters are assigned to double or triple taps, ensuring they are still accessible but prioritized lower due to their reduced usage frequency. This has been similarly done for numbers, punctuation and symbols.

## TinyType—the Implementation

### How to run the app
1. Clone the repository 
2. `cd tinytype`
3. `npm start`
4. If you want to view it on a phone, connect your laptop and phone to the same network (hotspotting your computer from your phone works best). After running `npm start`, access the network specific url such as "On Your Network:  http://172.20.10.6:3000" from your phone's browser.

### Understanding the code
The main component, App.js, manages several state variables including the mode of the keypad (letters, numbers, or symbols), whether caps lock is active, and the current input value. Users can input text through taps that interpret single, double, or triple interactions differently depending on the key pressed, reflecting a nuanced input mechanism similar to old mobile phones.

The Grid component in Grid.js dynamically adjusts which set of keys are displayed based on the current keypad mode and handles rendering each key according to its type (letter, number, symbol) and state (caps lock on/off). Each key press is managed by handleKeyTap, a function in App.js that handles different actions like deleting characters, adding spaces, switching between caps lock modes, or changing the keypad mode. This function uses a timeout mechanism to differentiate between single, double, or triple taps, adjusting the input string as necessary.

The CSS in App.css and Grid.css specifies the styling, focusing on creating a centered, visually distinct interface with specific colors and layouts that adapt based on the device's screen size. This attention to detail in both the functional and aesthetic design results in a unique and user-friendly text input experience.

### Demo
<img src="https://github.com/gupann/tinytype/assets/91845982/51a7dec3-f1c6-4d6d-a842-4f453a0d21e1" width="250" >

https://github.com/gupann/tinytype/assets/91845982/082dbeae-cdbb-4448-b044-89cde862970c

<img width="800" alt="Screenshot 2024-04-18 at 12 33 11 PM" src="https://github.com/gupann/tinytype/assets/91845982/9b12b0c3-e72a-4310-91af-89916c7bc246">
