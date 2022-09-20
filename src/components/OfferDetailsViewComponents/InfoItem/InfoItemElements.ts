import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.p`
  margin: 2px 0;
  width: 130px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-align: right;
`;

const Data = styled(Title)`
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSize.s};
  width: auto;
  text-align: right;
`;

export { Wrapper, Title, Data };
