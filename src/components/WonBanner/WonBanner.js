import React from 'react';
import Banner from '../Banner/Banner';

const WonBanner = ({ guessCount, action }) => {
  return (
    <Banner status={'happy'} action={action} actionText={'Restart'}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {' '}
          {guessCount === 1 ? '1 guess' : `${guessCount} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
};
export default WonBanner;
