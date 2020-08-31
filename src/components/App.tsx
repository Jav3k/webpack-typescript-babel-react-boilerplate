import React, { ReactElement } from 'react';
import { Counter } from './Counter';
import { Hello } from './Hello';

export const App = (): ReactElement => (
  <>
    <Hello name="react-webpa2ck-typescript-babel" />
    <Counter />
  </>
);
