import { React, useState } from 'react';

const GuessInput = ({ handleAddGuess }) => {
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
    if (guessInput.length !== 5) {
      window.alert('Please enter exactly 5 characters.');
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
        minLength={5}
        maxLength={5}
        type='text'
        id='guess-input'
        name='guess-input'
        value={guessInput}
        onChange={(event) => handleChange(event)}
      />
    </form>
  );
};

export default GuessInput;
