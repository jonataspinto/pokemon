import React from 'react';
import * as S from './HeaderStyled';
import usePersistedThemeState from '../../utils/usePersistedThemeState';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

export default function Header() {
  const [theme, setTheme] = usePersistedThemeState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    console.log(theme);
  };
  return (
    <S.HeaderWrapper>
      Header works!
      <button onClick={toggleTheme}>themeSwitcher</button>
    </S.HeaderWrapper>
  );
};
