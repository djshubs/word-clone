import React from 'react';

const GuessResults = ({ guessList }) => {
  return (
    <>
      <div class='guess-results'>
        {guessList.map(({ id, label }) => (
          <p id={id} class='guess'>
            {label}
          </p>
        ))}
      </div>
    </>
  );
};

export default GuessResults;
