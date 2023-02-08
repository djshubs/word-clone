import React from 'react';
import { range } from '../../utils';
import { WORD_LENGTH } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { answer } from '../Game/Game';

const Guess = ({ word }) => {
  const wordArray = checkGuess(word, answer);

  return (
    <>
      <p className='guess'>
        {range(WORD_LENGTH).map((num) => {
          const { letter, status } = wordArray ? wordArray[num] : {};
          return (
            <span key={num} className={`cell ${status}`}>
              {letter ? letter : undefined}
            </span>
          );
        })}
      </p>
    </>
  );
};

export default Guess;
