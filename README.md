# Typion - Typing Test Platform

**Typion** is a typing test platform built using **React** with **Vite**. The app allows users to test their typing speed and accuracy using random quotes or longer paragraphs. It also provides statistics such as words per minute (WPM), accuracy, error rate, and adjusted speed. The application supports theme switching and custom styling.

## Features

- **Typing Test**: Users can type out a randomly generated quote or a paragraph and get real-time feedback on their typing accuracy.
- **Multiple Text Options**: Switch between short quotes and longer paragraphs for different typing challenges.
- **Real-time Stats**: Display real-time stats such as WPM, accuracy, and error rate as the user types.
- **Theme Switcher**: Toggle between different visual themes, such as dark mode and light mode.
- **Quote Refresh**: Ability to refresh the quote/paragraph for a new typing test.
- **Results Page**: After completing the typing test, users are redirected to a results page displaying their final statistics (currently in progress).

## Tech Stack

- **React**: For building the user interface.
- **Vite**: For fast development and optimized builds.
- **CSS**: For styling the app and providing custom themes.
- **React Router**: For page navigation (used for redirecting to the results page).

## Project Structure

```
/src
  /components
    ├── TypingTest.jsx          # Main typing test component
    ├── Stats.jsx               # Component to display real-time typing statistics
    ├── ResultsPage.jsx         # Component to display test results (work in progress)
    ├── ThemeSwitcher.jsx       # Component for switching between visual themes
  ├── quotes.json               # JSON file containing quotes for the typing test
  ├── quoteslarge.json          # JSON file containing longer paragraphs
  └── App.js                    # Main app file containing layout and routing
```

## How to Run the Project

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/typion.git
   cd typion
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Future Enhancements

- **Custom Timers**: Let users set custom time limits for typing tests.
- **Difficulty Levels**: Include easy, medium, and hard levels for more challenge.
- **Detailed Analytics**: Provide deeper analysis of typing behavior (e.g., frequent mistakes).
- **Progress Bar**: Show a word countdown and progress bar while typing.
- **Real-time WPM Graph**: Display a real-time graph of WPM during the typing test.

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes and push to your fork.
4. Create a pull request to the main repository.

## License

This project is open-source and available under the [MIT License](LICENSE).
