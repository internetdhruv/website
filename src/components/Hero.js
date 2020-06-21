import React from 'react';
import styled, { withTheme } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { sizes, scrollIconUpDown, fadeInOut, breakpoints } from '../styles';
import Text from './Text';
import Icon from './Icon';

import { hero } from '../config';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 300px auto 0px auto;
  width: ${sizes.Containers.width.normal}%;
  text-align: center;

  ${breakpoints.md`
    width: ${sizes.Containers.width.wide}%;
  `}
`;

const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-around;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 250px;
`;

const ScrollIcon = styled(Icon)`
  animation: ${scrollIconUpDown} 3s infinite alternate;
`;

const ScrollPrompt = styled(Text)`
  animation: ${fadeInOut} 3s infinite alternate;
  margin-top: 20px;
`;

const Hero = (props) => (
  <HeroContainer>
    <Text weight="semibold" size="90">
      {hero.name}
    </Text>
    <SubTitleContainer>
      {hero.tags.map((tag, index) => (
        <Text key={index}>{tag}</Text>
      ))}
    </SubTitleContainer>
    <BottomContainer>
      <AnchorLink href="#about" offset={sizes.NavBar.height + 50}>
        <ScrollIcon
          src={props.theme.downwardChevron}
          alt="Scroll down for more"
          width={25}
          height={25}
        />
      </AnchorLink>
      <ScrollPrompt size={12}>Scroll Down For More</ScrollPrompt>
    </BottomContainer>
  </HeroContainer>
);

export default withTheme(Hero);
