import React, { SFC } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export interface HelloProps {
  name: string;
}

export const Hello: SFC<HelloProps> = ({ name }) => <Title>{name}</Title>;
