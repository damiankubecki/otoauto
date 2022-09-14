import React from 'react';
import { Wrapper, Header, Text } from './DescriptionSectionElements';

interface Props {
  children: string;
}

const DescriptionSection = ({ children }: Props) => (
  <Wrapper>
    <Header>Opis</Header>
    <Text>{children}</Text>
  </Wrapper>
);

export default DescriptionSection;
