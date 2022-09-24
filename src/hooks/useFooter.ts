import { IArticleItem } from 'components/FooterComponents/Article/Article';

const useFooter = () => {
  const toolsArticles: IArticleItem[] = [
    {
      content: 'Umowa kupna sprzedaży',
      href: 'https://www.autocentrum.pl/dokumenty-dla-kierowcy/umowa-kupna-i-sprzedazy/',
    },
  ];
  const infoArticles: IArticleItem[] = [
    {
      content: 'Testy samochodów',
      href: 'https://www.youtube.com/results?search_query=testy+samochod%C3%B3w',
    },
  ];
  const customerServiceArticles: IArticleItem[] = [
    { content: '+48 999 999 999' },
    { content: 'otoauto@gmail.com' },
  ];

  return { toolsArticles, infoArticles, customerServiceArticles };
};

export default useFooter;
