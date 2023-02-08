import React from 'react';
import Banner from '../Banner/Banner';

const LossBanner = ({ answer, action }) => {
  return (
    <Banner status={'sad'} action={action} actionText={'Restart'}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
};
export default LossBanner;
