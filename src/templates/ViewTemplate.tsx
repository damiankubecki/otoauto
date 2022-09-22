import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 550px;
  margin: 30px auto 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ViewTemplate = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default ViewTemplate;
