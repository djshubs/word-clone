import { React, useState } from 'react';

const GuessInput = () => {
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
    setGuessInput('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        pattern='[a-zA-Z]{5}'
        title='Enter a 5 letter word.'
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
