import React, { useContext, useMemo } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import useFontAwesome from 'hooks/useFontAwesome';
import { ThemeContext } from 'contexts/contexts';
import { IThemeContext } from 'types/types';
import { Button as StyledButton, NavLink } from './ButtonElements';

interface Props {
  children: string;
  red?: boolean;
  linkTo?: string;
  icon?: IconProp;
  bigger?: boolean;
  onClick?: () => void;
}

const Button = ({ children, red, linkTo, icon, bigger, onClick = undefined }: Props) => {
  const { activeTheme } = useContext(ThemeContext) as IThemeContext;
  const { Icon } = useFontAwesome();
  const className = useMemo(() => {
    if (red && bigger) return 'red bigger';
    if (red) return 'red';
    if (bigger) return 'bigger';
    return '';
  }, []);

  return (
    <>
      {linkTo ? (
        <StyledButton as={NavLink} to={linkTo} onClick={onClick} className={className}>
          {icon && <Icon color={activeTheme.primary} size="1x" icon={icon} />} {children}
        </StyledButton>
      ) : (
        <StyledButton onClick={onClick} className={className}>
          {icon && <Icon color={activeTheme.primary} size="1x" icon={icon} />} {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
