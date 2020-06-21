import React, { useState, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { sizes, breakpoints } from '../styles';
import Logo from './Logo';
import Text from './Text';
import Icon from './Icon';
import { sections } from '../config';

const USE_AUTO_HIDE_NAVBAR = false;

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, 0);
  height: ${sizes.NavBar.height}px;
  width: ${sizes.Containers.width.normal}%;
  margin: 0 auto;
  margin-left = 50%;

  ${breakpoints.md`
    width: ${sizes.Containers.width.wide}%;
  `}
  ${breakpoints.xxl`
    width: ${sizes.Containers.width.xwide}%;
  `}
  ${(props) =>
    props.theme.background && `background: ${props.theme.background}`};
`;

const NavBarLinks = styled.div`
  display: none;
  position: relative;
  margin-left: 20px;
  overflow-x: auto;
  align-items: center;

  & > * {
    margin-left: 25px;
  }

  a {
    text-decoration: none;
  }

  ${breakpoints.md`
    display: flex;
  `}
`;

const NavBarDiv = styled.div`
  position: relative;
  padding: 17px 0 17px 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.theme.background && `background: ${props.theme.background}`};
`;

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(-50%, -100%);
  }
`;

const MobileThemeSwitcher = styled.div`
  ${breakpoints.md`
    display: none;
  `}
`;

const NavBar = (props) => {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    if (!USE_AUTO_HIDE_NAVBAR) return;
    const handleScroll = () => {
      setShow(
        document.body.getBoundingClientRect().top > scrollPos ||
          window.scrollY === 0
      );
      setScrollPos(document.body.getBoundingClientRect().top);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [show, scrollPos]);
  return (
    <Transition>
      <NavBarContainer className={show ? 'active' : 'hidden'}>
        <NavBarDiv>
          <Logo
            height={45}
            width={45}
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
            }}
          />
          <NavBarLinks>
            {sections.map(
              (section) =>
                ({
                  internal: (
                    <AnchorLink
                      offset={sizes.NavBar.height + 50}
                      href={section.path}
                      key={section.name}
                    >
                      <Text
                        as="p"
                        weight="semibold"
                        color={props.theme.primaryColor}
                      >
                        {section.name}
                      </Text>
                    </AnchorLink>
                  ),
                  external: (
                    <a
                      href={section.path}
                      target={`${section.openInNewTab ? '_blank' : '_self'}`}
                      key={section.name}
                    >
                      <Text
                        as="p"
                        weight="semibold"
                        color={props.theme.secondaryColor}
                      >
                        {section.name}
                      </Text>
                    </a>
                  ),
                }[section.type])
            )}
            <Icon
              src={props.theme.themeSwitchIcon}
              alt="Switch Themes"
              height={20}
              width={20}
              onClick={props.themeChanger}
              pointerCursor
            />
          </NavBarLinks>
          <MobileThemeSwitcher>
            <Icon
              src={props.theme.themeSwitchIcon}
              alt="Switch Themes"
              height={20}
              width={20}
              onClick={props.themeChanger}
              pointerCursor
            />
          </MobileThemeSwitcher>
        </NavBarDiv>
      </NavBarContainer>
    </Transition>
  );
};

export default withTheme(NavBar);
