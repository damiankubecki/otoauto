import styled from 'styled-components';

const Title = styled.h2`
  margin-bottom: 25px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.boldFont};
`;

export { Title };
