import React, { useState, useEffect, useRef } from "react";
import quotes from "./quotes.json"; // Import the quotes from the JSON file
import quoteslarge from "./quoteslarge.json"; // Import larger paragraphs
import Stats from "./Stats"; // Import the Stats component
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./TypingTest.css";
import { IoReloadCircle } from "react-icons/io5";

const TypingTest = () => {
  const [text, setText] = useState("Loading...");
  const [author, setAuthor] = useState("Anonymous");
  const [userInput, setUserInput] = useState("");
  const [errors, setErrors] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [progress, setProgress] = useState(0);
  const [errorRate, setErrorRate] = useState(0);
  const [keystrokeEfficiency, setKeystrokeEfficiency] = useState(100);
  const [adjustedSpeed, setAdjustedSpeed] = useState(0);
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [useLargeText, setUseLargeText] = useState(false); // New state for toggling between quotes and paragraphs

  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const navigate = useNavigate(); // For redirection

  const fetchRandomText = () => {
    const source = useLargeText ? quoteslarge : quotes; // Decide which source to use
    const randomText = source[Math.floor(Math.random() * source.length)];
    setText(randomText.pl || randomText.q); // Use the paragraph or quote
    setAuthor(randomText.source || randomText.a); // Use the source/author
    setUserInput("");
    setErrors(0);
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setProgress(0);
    setErrorRate(0);
    setKeystrokeEfficiency(100);
    setAdjustedSpeed(0);
    setIsTestComplete(false);
  };

  useEffect(() => {
    fetchRandomText();
  }, [useLargeText]); // Re-fetch text when switching between quotes and paragraphs

  useEffect(() => {
    if (userInput.length === 0) return;

    const textArray = text.split("");
    const userInputArray = userInput.split("");

    let errorCount = 0;

    // Calculate errors
    userInputArray.forEach((char, index) => {
      if (char !== textArray[index]) {
        errorCount += 1;
      }
    });

    setErrors(errorCount);

    // Set timing and stats
    if (startTime) {
      const wordsTyped = userInput.trim().split(" ").length;
      const elapsedTime = (Date.now() - startTime) / 60000; // in minutes
      const calculatedWpm = Math.round(wordsTyped / elapsedTime);
      setWpm(calculatedWpm);

      const errorRatePercentage = errorCount / userInput.length;
      setErrorRate((errorRatePercentage * 100).toFixed(2));

      const correctChars = userInput.length - errorCount;
      const keystrokeEff = (correctChars / userInput.length) * 100;
      setKeystrokeEfficiency(keystrokeEff.toFixed(2));

      const adjSpeed = calculatedWpm * (keystrokeEff / 100);
      setAdjustedSpeed(adjSpeed.toFixed(2));
    }

    const correctChars = userInput.length - errorCount;
    setAccuracy(userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 100);

    const progressPercentage = Math.round((userInput.length / text.length) * 100);
    setProgress(progressPercentage);

    // Check if typing is complete
    if (userInput === text) {
      setIsTestComplete(true);
      handleTestComplete();
    }
  }, [userInput, text, startTime]);

  const handleKeyPress = (e) => {
    if (!startTime) setStartTime(Date.now());

    let currentInput = userInput;

    if (e.key === "Backspace") {
      setUserInput(currentInput.slice(0, -1));
    } else if (e.key.length === 1) {
      setUserInput(currentInput + e.key);
    }
  };

  useEffect(() => {
    textRef.current.focus();
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      const textArray = text.split("");
      const userInputArray = userInput.split("");
      const cursorIndex = userInputArray.length;
      const textSpan = textRef.current.children[cursorIndex];
      if (textSpan) {
        cursorRef.current.style.left = `${textSpan.offsetLeft}px`;
        cursorRef.current.style.top = `${textSpan.offsetTop}px`;
      }
    }
  }, [userInput, text]);

  // Handle test completion and redirect to ResultsPage
  const handleTestComplete = () => {
    // Pass the result data via state
    navigate("/results", {
      state: {
        userInput,
        text,
        errors,
        wpm,
        accuracy,
        errorRate,
        keystrokeEfficiency,
        adjustedSpeed,
        author,
      },
    });
  };

  return (
    <div className="typing-test-container">
      <div className="text-to-type-container">
        <div className="text-to-type" onKeyDown={handleKeyPress} tabIndex={0} ref={textRef}>
          {text.split("").map((char, index) => (
            <span
              key={index}
              className={
                userInput[index]
                  ? userInput[index] === char
                    ? "correct"
                    : "incorrect"
                  : ""
              }
            >
              {char}
            </span>
          ))}
          <span ref={cursorRef} className="cursor">|</span>
        </div>
      </div>
      <div className="author-container">
        <p className="author">- {author}</p>
        <IoReloadCircle className="reload-button" onClick={fetchRandomText} />
        <button className="toggle-text-button" onClick={() => setUseLargeText(!useLargeText)}>
          {useLargeText ? "Quotes" : "Paragraphs"}
        </button>
      </div>

      <Stats 
        wpm={wpm}
        accuracy={accuracy}
        errors={errors}
        errorRate={errorRate}
        keystrokeEfficiency={keystrokeEfficiency}
        adjustedSpeed={adjustedSpeed}
      />
    </div>
  );
};

export default TypingTest;
