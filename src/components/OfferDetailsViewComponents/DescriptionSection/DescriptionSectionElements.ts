import styled from 'styled-components';

const Wrapper = styled.section`
  flex-basis: 60%;
`;

const Header = styled.h4`
  padding: 10px 0;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.boldFont};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export { Wrapper, Header, Text };
