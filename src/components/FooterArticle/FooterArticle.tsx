import React from 'react';
import { Wrapper, Title, ItemsContainer, Link, Text } from './FooterArticleElements';

export interface IArticleItem {
  content: string;
  href?: string;
}

interface Props {
  title: string;
  items: IArticleItem[];
}

const FooterArticle = ({ title, items }: Props) => (
  <Wrapper>
    <Title>{title}</Title>
    <ItemsContainer>
      {items.map(item =>
        item?.href ? (
          <Link key={item.content} href={item.href} target="_blank">
            {item.content}
          </Link>
        ) : (
          <Text key={item.content}>{item.content}</Text>
        )
      )}
    </ItemsContainer>
  </Wrapper>
);

export default FooterArticle;
