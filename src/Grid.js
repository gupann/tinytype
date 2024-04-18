import React from 'react';
import './Grid.css';
const letterKeys = [
  { top: 'a', bottom: 'b' },
  { top: 'c', bottom: 'd' },
  { top: 'e', bottom: 'f' },
  { top: 'g', bottom: 'h' },
  { top: 'i', bottom: 'j' },
  { top: 'l', bottom: 'k' },
  { top: 'n', bottom: 'm' },
  { top: 'o', bottom: 'p' },
  { top: 'r', bottom: 'q' },
  { top: 's', bottom: 't' },
  { top: 'u', bottom: 'v w' },
  { top: 'x', bottom: 'y z' },
  { top: '⌫', type: 'function', action: 'delete' },
  { top: '⇧', type: 'function', action: 'caps' },
  { top: '␣', type: 'function', action: 'space' },
  { top: '123', bottom: '#+=', type: 'function', action: 'num_punctuation' },
];

const numberKeys = [
  { top: '1', bottom: '-' },
  { top: '2', bottom: '/' },
  { top: '3', bottom: ':' },
  { top: '4', bottom: ';' },
  { top: '5', bottom: '(' },
  { top: '6', bottom: ')' },
  { top: '7', bottom: '$' },
  { top: '8', bottom: '&' },
  { top: '9', bottom: '@' },
  { top: '0', bottom: '"' },
  { top: '.', bottom: ", '" },
  { top: '?', bottom: '!' },
  { top: '⌫', type: 'function', action: 'delete' },
  { top: 'abc', bottom: 'ABC', type: 'function', action: 'letters' },
  { top: '␣', type: 'function', action: 'space' },
  { top: '123', bottom: '#+=', type: 'function', action: 'num_punctuation' },
];

const symbolKeys = [
  { top: '[', bottom: '_' },
  { top: ']', bottom: '\\' },
  { top: '{', bottom: '|' },
  { top: '}', bottom: '~' },
  { top: '#', bottom: '<' },
  { top: '%', bottom: '>' },
  { top: '^', bottom: '$' },
  { top: '*', bottom: '€' },
  { top: '+', bottom: '`' },
  { top: '=', bottom: '•' },
  { top: '.', bottom: ", '" },
  { top: '?', bottom: '!' },
  { top: '⌫', type: 'function', action: 'delete' },
  { top: 'abc', bottom: 'ABC', type: 'function', action: 'letters' },
  { top: '␣', type: 'function', action: 'space' },
  { top: '123', bottom: '#+=', type: 'function', action: 'num_punctuation' },
];

const Grid = ({ onKeyTap, isCapsLock, keypadMode }) => {
  const keys =
    keypadMode === 'numbers'
      ? numberKeys
      : keypadMode === 'symbols'
      ? symbolKeys
      : letterKeys;

  const renderCells = () => {
    return keys.map((key, i) => {
      const isCapsKey = key.action === 'caps';
      const specialClass =
        key.action === 'delete' || isCapsKey ? 'del-key' : '';
      return (
        <div
          key={i}
          className={`cell ${key.type || ''} ${specialClass}`}
          onClick={() => onKeyTap(key)}
        >
          <div className='top'>
            {isCapsKey
              ? isCapsLock
                ? '↑'
                : '⇧'
              : isCapsLock
              ? key.top.toUpperCase()
              : key.top}
          </div>
          {key.bottom && (
            <div className='bottom'>
              {isCapsLock ? key.bottom.toUpperCase() : key.bottom}
            </div>
          )}
        </div>
      );
    });
  };
  return <div className='grid'>{renderCells()}</div>;
};
export default Grid;
