import React, { useContext } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import useFontAwesome from 'hooks/useFontAwesome';
import { ThemeContext } from 'contexts/contexts';
import { IThemeContext } from 'types/types';
import { Button as StyledButton, NavLink } from './ButtonElements';

interface Props {
  children: string;
  linkTo?: string;
  icon?: IconProp;
  bigger?: boolean;
  onClick?: () => void;
}

const Button = ({ children, linkTo, icon, bigger, onClick = undefined }: Props) => {
  const { activeTheme } = useContext(ThemeContext) as IThemeContext;
  const { Icon } = useFontAwesome();

  const buttonProps = { onClick, className: bigger ? 'bigger' : '' };

  return (
    <>
      {linkTo ? (
        <StyledButton as={NavLink} to={linkTo} {...buttonProps}>
          {icon && <Icon color={activeTheme.primary} size="1x" icon={icon} />} {children}
        </StyledButton>
      ) : (
        <StyledButton {...buttonProps}>
          {icon && <Icon color={activeTheme.primary} size="1x" icon={icon} />} {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
