import React from 'react';
import { range } from '../../utils';
import { WORD_LENGTH } from '../../constants';

const Guess = ({ word }) => {
  console.log({ word });
  return (
    <>
      <p className='guess'>
        {range(WORD_LENGTH).map((num) => (
          <span key={num} className='cell'>
            {word ? word[num] : undefined}
          </span>
        ))}
      </p>
    </>
  );
};

export default Guess;
