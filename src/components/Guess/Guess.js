import React from 'react';
import { range } from '../../utils';
import { WORD_LENGTH } from '../../constants';
import { checkGuess } from '../../game-helpers';

export const Cell = ({ letter, status }) => {
  const className = status ? `cell ${status}` : `cell`;
  return <span className={className}>{letter}</span>;
};

const Guess = ({ word, answer }) => {
  const result = checkGuess(word, answer);

  return (
    <>
      <p className='guess'>
        {range(WORD_LENGTH).map((num) => {
          const { letter, status } = result ? result[num] : {};
          return <Cell key={num} letter={letter} status={status} />;
        })}
      </p>
    </>
  );
};

export default Guess;
