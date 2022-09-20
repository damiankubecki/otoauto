import React from 'react';
import { IArticleItem } from 'components/FooterComponents/Article/Article';
import { Wrapper, Article } from './FooterElements';

const Footer = () => {
  const toolsItems: IArticleItem[] = [
    {
      content: 'Umowa kupna sprzedaży',
      href: 'https://www.autocentrum.pl/dokumenty-dla-kierowcy/umowa-kupna-i-sprzedazy/',
    },
  ];
  const infoItems: IArticleItem[] = [
    {
      content: 'Testy samochodów',
      href: 'https://www.youtube.com/results?search_query=testy+samochod%C3%B3w',
    },
  ];
  const customerServiceItems: IArticleItem[] = [
    { content: '+48 999 999 999' },
    { content: 'motogablota@gmail.com' },
  ];

  return (
    <Wrapper>
      <Article title="Narzędzia" items={toolsItems} />
      <Article title="Obsługa klienta" items={customerServiceItems} />
      <Article title="Przydatne informacje" items={infoItems} />
    </Wrapper>
  );
};

export default Footer;
