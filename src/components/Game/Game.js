import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [guessList, setGuessList] = React.useState([]);
  const [correctAnswer, setCorrectAnswer] = React.useState(answer);

  const handleLoss = () => {
    return guessList.length === NUM_OF_GUESSES_ALLOWED;
  };

  const handleWin = () => {
    console.log(guessList);
    const result =
      guessList.findIndex((guess) => guess.word === correctAnswer) >
      -1;
    console.log(result);
    return result;
  };

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
      <GuessResults guessList={guessList} answer={correctAnswer} />
      <GuessInput handleAddGuess={handleAddGuess} />
      {handleLoss() && <LossBanner answer={correctAnswer} />}
      {handleWin() && <WonBanner guessCount={guessList.length} />}
    </>
  );
};

export default Game;

export const WonBanner = ({ guessCount }) => {
  return (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessCount} guesses</strong>.
      </p>
    </div>
  );
};

export const LossBanner = ({ answer }) => {
  return (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
};
