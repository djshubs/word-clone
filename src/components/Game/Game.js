import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import LossBanner from '../LossBanner/LossBanner';
import WonBanner from '../WonBanner/WonBanner';

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

const Game = () => {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guessList, setGuessList] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => {
    const answer = sample(WORDS);
    console.log({ answer });
    return answer;
  });

  const handleReset = () => {
    setGuessList([]);
    setGameStatus('running');
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    console.log({ newAnswer });
  };

  const handleAddGuess = (guessInput) => {
    const newGuess = {
      id: crypto.randomUUID(),
      word: guessInput,
    };
    const nextGuessList = [...guessList, newGuess];
    setGuessList(nextGuessList);

    if (guessInput === answer) {
      setGameStatus('won');
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput
        handleAddGuess={handleAddGuess}
        disabled={gameStatus !== 'running'}
      />

      <div>
        {gameStatus === 'won' && (
          <WonBanner
            guessCount={guessList.length}
            action={handleReset}
          />
        )}
        {gameStatus === 'lost' && (
          <LossBanner answer={answer} action={handleReset} />
        )}
      </div>
    </>
  );
};

export default Game;
