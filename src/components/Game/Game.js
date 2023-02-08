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
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guessList, setGuessList] = React.useState([]);
  const [correctAnswer, setCorrectAnswer] = React.useState(answer);

  const handleAddGuess = (guessInput) => {
    const newGuess = {
      id: crypto.randomUUID(),
      word: guessInput,
    };
    const nextGuessList = [...guessList, newGuess];
    setGuessList(nextGuessList);

    if (guessInput === correctAnswer) {
      setGameStatus('won');
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  return (
    <>
      <GuessResults guessList={guessList} answer={correctAnswer} />
      <GuessInput
        handleAddGuess={handleAddGuess}
        disabled={gameStatus !== 'running'}
      />

      <div>
        {gameStatus === 'won' && (
          <WonBanner guessCount={guessList.length} />
        )}
        {gameStatus === 'lost' && (
          <LossBanner answer={correctAnswer} />
        )}
      </div>
    </>
  );
};

export default Game;

export const WonBanner = ({ guessCount }) => {
  return (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {' '}
          {guessCount === 1 ? '1 guess' : `${guessCount} guesses`}
        </strong>
        .
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
