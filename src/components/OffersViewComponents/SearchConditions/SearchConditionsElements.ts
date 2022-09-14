import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.p`
  margin: 3px 0;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.boldFont};
`;

const Span = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.lightFont};
`;

export { Wrapper, Text, Span };
