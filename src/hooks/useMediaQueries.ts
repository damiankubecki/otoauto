import { useMediaQuery } from 'react-responsive';
import { media } from 'theme/media';

const useMediaQueries = () => {
  const isLaptop = useMediaQuery({ query: `(max-width: ${media.laptop})` });
  const isTabletL = useMediaQuery({ query: `(max-width: ${media.tablet_L})` });
  const isTabletM = useMediaQuery({ query: `(max-width: ${media.tablet_M})` });
  const isTabletS = useMediaQuery({ query: `(max-width: ${media.tablet_S})` });
  const isPhoneL = useMediaQuery({ query: `(max-width: ${media.phone_L})` });
  const isPhoneM = useMediaQuery({ query: `(max-width: ${media.phone_M})` });
  const isPhoneS = useMediaQuery({ query: `(max-width: ${media.phone_S})` });

  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return {
    isLaptop,
    isTabletL,
    isTabletM,
    isTabletS,
    isPhoneL,
    isPhoneM,
    isPhoneS,
    isLandscape,
    isPortrait,
  };
};

export default useMediaQueries;
