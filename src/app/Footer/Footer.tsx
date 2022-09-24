import React from 'react';
import { Wrapper, Article } from './FooterElements';
import useFooter from 'hooks/useFooter';

const Footer = () => {
  const { toolsArticles, infoArticles, customerServiceArticles } = useFooter();

  return (
    <Wrapper>
      <Article title="Narzędzia" items={toolsArticles} />
      <Article title="Obsługa klienta" items={customerServiceArticles} />
      <Article title="Przydatne informacje" items={infoArticles} />
    </Wrapper>
  );
};

export default Footer;
