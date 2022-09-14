/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Wrapper, Title, Data } from './InfoItemElements';

interface Props {
  title: string;
  children: any;
}

const InfoItem = ({ title, children }: Props) => (
  <Wrapper>
    <Title>{title}</Title>
    <Data>{children}</Data>
  </Wrapper>
);

export default InfoItem;
