import React from 'react';
import styled from 'styled-components';
import { media } from 'theme/media';

const Wrapper = styled.div`
  min-width: 550px;
  margin: 30px auto 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${media.tablet_L}) {
    margin: 20px auto 30px;
  }
  @media (max-width: ${media.tablet_S}) {
    margin: 10px auto 30px;
    min-width: auto;
    min-height: calc(100vh - 40px);
    width: 100%;
  }
`;

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ViewTemplate = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default ViewTemplate;
