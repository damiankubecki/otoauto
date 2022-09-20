import styled from 'styled-components';

const Wrapper = styled.article`
  min-width: 200px;
  margin: 0 20px;
  padding: 0 0 40px;
`;

const Title = styled.h4`
  padding: 5px 0;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.boldFont};
  text-transform: uppercase;
  text-align: center;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Link = styled.a`
  padding: 4px 0;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.fontColorAdditional200};
  }
`;

const Text = styled(Link)`
  cursor: default;

  &:hover {
    color: ${({ theme }) => theme.fontColor};
  }
`;

export { Wrapper, Title, ItemsContainer, Link, Text };
