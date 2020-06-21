import React from 'react';
import styled from 'styled-components';

import { sizes, breakpoints } from '../styles';
import Text from './Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { contact } from '../config';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px auto 0px auto;
  width: ${sizes.Containers.width.normal}%;

  ${breakpoints.md`
    width: ${sizes.Containers.width.wide}%;
  `}
  ${breakpoints.xxl`
    width: ${sizes.Containers.width.xwide}%;
  `}
`;

const TitleText = styled(Text)`
  margin-bottom: 50px;
`;

const FAIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.secondaryColor};
  margin-left: 7px;
  background: none;
`;

const PlatformsContainer = styled.div`
  background: ${(props) => props.theme.gray5};
  * {
    background: none;
  }
  display: flex;
  flex-direction: column;
  width: 160px;
  overflow: auto;
  justify-content: space-between;
  margin-top: 25px;
  padding: 5px;
  ${breakpoints.md`
    flex-direction: row;
    width: 360px;
  `}
`;

const Platform = styled.div`
  display: flex;

  margin-top: 5px;
  align-items: center;
  ${Text} {
    margin-left: 7px;
    margin-right: 15px;
    ${breakpoints.md`
      margin-right: 0;
    `}
  }
  justify-content: space-between;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <TitleText as="h2">Contact</TitleText>
      <Text as="p">
        I'm active on these platforms and you can get in touch with me through
        any of the platforms here; though I do prefer to be contacted via email.
      </Text>
      <PlatformsContainer>
        {contact.map((ct) => (
          <Platform>
            <a
              href={ct.link}
              rel="noopener noreferrer"
              target="_blank"
              name={ct.altText}
            >
              <FAIcon icon={ct.FAIconSrc} size="2x" />
            </a>
            <a
              href={ct.link}
              rel="noopener noreferrer"
              target="_blank"
              name={ct.altText}
            >
              <Text>{ct.name}</Text>
            </a>
          </Platform>
        ))}
      </PlatformsContainer>
    </ContactContainer>
  );
};

export default Contact;
