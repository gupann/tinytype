import React, { useState } from 'react';
import Grid from './Grid';
import './App.css';

const App = () => {
  const [keypadMode, setKeypadMode] = useState('letters');
  const [isCapsLock, setIsCapsLock] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [lastTap, setLastTap] = useState(null);
  const [tapTimeoutId, setTapTimeoutId] = useState(null);
  const [tapCount, setTapCount] = useState(0);

  const tapDelay = 300;

  const handleKeyTap = (key) => {
    const currentTime = new Date().getTime();
    const isQuickTap = lastTap && currentTime - lastTap < tapDelay;
    let newTapCount = isQuickTap ? tapCount + 1 : 1;

    if (
      key.action === 'delete' ||
      key.action === 'space' ||
      key.action === 'caps'
    ) {
      clearTimeout(tapTimeoutId);
      if (key.action === 'delete') {
        setInputValue((prev) => prev.slice(0, -1));
      } else if (key.action === 'space') {
        setInputValue((prev) => prev + ' ');
      } else if (key.action === 'caps') {
        setIsCapsLock((prev) => !prev);
      }
      setLastTap(currentTime);
      return;
    }

    const handleSingleTap = () => {
      if (key.type === 'function') {
        if (key.action === 'letters') {
          setIsCapsLock(false);
          setKeypadMode('letters');
        } else if (key.action === 'num_punctuation') {
          setIsCapsLock(false);
          setKeypadMode('numbers');
        }
      } else {
        const charToAdd = isCapsLock ? key.top.toUpperCase() : key.top;
        setInputValue((prev) => prev + charToAdd);
      }
    };

    const handleDoubleTap = () => {
      if (key.type === 'function') {
        if (key.action === 'letters') {
          setIsCapsLock(true);
          setKeypadMode('letters');
        } else if (key.action === 'num_punctuation') {
          setIsCapsLock(false);
          setKeypadMode('symbols');
        }
      } else if (key.bottom) {
        const charToAdd = isCapsLock
          ? key.bottom.split(' ')[0].toUpperCase()
          : key.bottom.split(' ')[0];
        setInputValue((prev) => prev + charToAdd);
      }
    };

    const handleTripleTap = () => {
      if (key.bottom && key.bottom.includes(' ')) {
        const charToAdd = isCapsLock
          ? key.bottom.split(' ')[1].toUpperCase()
          : key.bottom.split(' ')[1];
        setInputValue((prev) => prev + charToAdd);
      }
    };

    clearTimeout(tapTimeoutId);
    const timeoutId = setTimeout(() => {
      if (newTapCount === 1) handleSingleTap();
      else if (newTapCount === 2) handleDoubleTap();
      else if (newTapCount === 3) handleTripleTap();

      setTapCount(0);
    }, tapDelay);

    setTapTimeoutId(timeoutId);
    setTapCount(newTapCount);
    setLastTap(currentTime);
  };
  return (
    <div className='container'>
      <div>
        <h1 className='title'>TinyType</h1>
      </div>
      <div className='inputContainer'>
        <textarea
          className='textInput'
          placeholder='Type here...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className='gridContainer'>
        <Grid
          onKeyTap={handleKeyTap}
          isCapsLock={isCapsLock}
          keypadMode={keypadMode}
        />
      </div>
      <div>
        <h3 className='rulesHeading'>Rules ↓</h3>
        <h6 className='rules'>
          Top letter: Single Tap <br /> Bottom/Bottom Left: Double Tap <br />{' '}
          Bottom Right: Triple Tap
        </h6>
      </div>
    </div>
  );
};

export default App;
