import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.p`
  margin: 2px 0;
  width: 130px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Data = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.s};
  width: auto;
`;

export { Wrapper, Title, Data };
