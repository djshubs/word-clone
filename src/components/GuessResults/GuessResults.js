import React from 'react';

const GuessResults = () => {
  const guessList = [
    { id: 1, label: 'FIRST' },
    { id: 2, label: 'SECOND' },
  ];

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
