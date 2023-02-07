import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

const GuessResults = ({ guessList }) => {
  return (
    <>
      <div className='guess-results'>
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
          const { label } = guessList[num] ? guessList[num] : {};
          return <Guess key={num} word={label} />;
        })}
      </div>
    </>
  );
};

export default GuessResults;
