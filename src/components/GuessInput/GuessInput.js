import { React, useState } from 'react';
import { WORD_LENGTH } from '../../constants';

const GuessInput = ({ handleAddGuess, disabled }) => {
  const [guessInput, setGuessInput] = useState('');

  const handleChange = (event) => {
    const guessInputUpperCase = event.target.value
      .trim()
      .toUpperCase();
    setGuessInput(guessInputUpperCase);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guessInput });
    if (guessInput.length !== WORD_LENGTH) {
      window.alert(`Please enter exactly ${WORD_LENGTH} characters.`);
      return;
    }
    handleAddGuess(guessInput);
    setGuessInput('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        pattern={`[a-zA-Z]{${WORD_LENGTH}}`}
        title={`Enter a ${WORD_LENGTH} letter word.`}
        maxLength={WORD_LENGTH}
        type='text'
        id='guess-input'
        name='guess-input'
        value={guessInput}
        disabled={disabled}
        onChange={(event) => handleChange(event)}
      />
    </form>
  );
};

export default GuessInput;
