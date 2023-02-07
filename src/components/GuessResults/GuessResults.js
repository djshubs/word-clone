import React from 'react';

const GuessResults = ({ guessList }) => {
  return (
    <>
      <div className='guess-results'>
        {guessList.map(({ id, label }) => (
          <p id={id} className='guess'>
            {label}
          </p>
        ))}
      </div>
    </>
  );
};

export default GuessResults;
