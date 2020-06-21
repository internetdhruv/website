import lightLogo from '../assets/logos/logo-light.svg';
import darklogo from '../assets/logos/logo-dark.svg';
import themeSwitchDark from '../assets/icons/theme-switch-dark.svg';
import themeSwitchLight from '../assets/icons/theme-switch-light.svg';
import downwardChevronLight from '../assets/icons/downward-chevron-light.svg';
import downwardChevronDark from '../assets/icons/downward-chevron-dark.svg';
import navbarOpenDark from '../assets/icons/ham-dark.svg';
import navbarOpenLight from '../assets/icons/ham-light.svg';

export const lightTheme = {
  logoSrc: lightLogo,
  text: '#000',
  primaryColor: '#000',
  secondaryColor: '#7600FF',
  background: '#fff',
  themeSwitchIcon: themeSwitchLight,
  downwardChevron: downwardChevronLight,
  mobileNavbarIcon: navbarOpenLight,
  gray1: '#8e8e93',
  gray2: '#aeaeb2',
  gray3: '#c7c7cc',
  gray4: '#d1d1d6',
  gray5: '#f2f2f7',
};

export const darkTheme = {
  logoSrc: darklogo,
  text: '#fff',
  primaryColor: '#fff',
  secondaryColor: '#00FF9D',
  background: '#000',
  themeSwitchIcon: themeSwitchDark,
  downwardChevron: downwardChevronDark,
  mobileNavbarIcon: navbarOpenDark,
  gray1: '#838393',
  gray2: '#636366',
  gray3: '#48484a',
  gray4: '#3a3a3c',
  gray5: '#1c1c1e',
};
