import React, { ReactElement, useEffect, useState } from 'react';

export const Counter = (): ReactElement => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter((oldCounter) => oldCounter + 1);
  const handleDecrement = () => setCounter((oldCounter) => oldCounter - 1);

  useEffect(() => {
    function scaryClown() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('🤡');
        }, 2000);
      });
    }

    async function msg() {
      const clown = await scaryClown();
      // eslint-disable-next-line no-console
      console.log('Message:', clown);
    }

    msg();
  }, []);

  return (
    <div>
      <div>{counter}</div>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};
