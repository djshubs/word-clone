import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [guessList, setGuessList] = React.useState([]);

  const handleAddGuess = (guessInput) => {
    const newGuess = {
      id: crypto.randomUUID(),
      word: guessInput,
    };

    const nextGuessList = [...guessList, newGuess];
    setGuessList(nextGuessList);
  };

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
};

export default Game;
