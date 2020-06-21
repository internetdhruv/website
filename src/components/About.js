import React from 'react';
import styled, { withTheme } from 'styled-components';

import { sizes, breakpoints } from '../styles';
import Text from './Text';
import Icon from './Icon';

import { about } from '../config';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px auto 0px auto;
  width: ${sizes.Containers.width.normal}%;

  ${breakpoints.md`
    width: ${sizes.Containers.width.wide}%;
  `}
`;

const SubText = styled(Text)`
  margin-bottom: 20px;
`;

const TitleText = styled(Text)`
  margin-bottom: 50px;
`;

const SubtitleText = styled(Text)`
  margin-top: 20px;
  margin-botton: 30px;
`;

const EducationDisplayer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 600px;
  p,
  h5,
  ul,
  li {
    background: none;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.gray4};
  padding: 10px;
  text-align: center;
  img {
    background: none;
    margin-right: 30px;
  }
  a {
    background: none;
  }
`;

const EducationTitleText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: none;
`;

const Description = styled.div`
  background: ${(props) => props.theme.gray5};
  padding: 10px;
  ul {
    margin-top: 10px;
  }
`;

const AboutEducation = styled.div`
  margin-bottom: 10px;
  background: ${(props) => props.theme.gray5};
`;

const Classes = styled.div`
  background: ${(props) => props.theme.gray5};
`;

const Class = styled.div`
  color: ${(props) => props.theme.text};
  background: none;
  p {
    background: none;
  }
`;

const About = () => (
  <AboutContainer>
    <TitleText as="h2">About</TitleText>
    {about.mainText && <SubText as="p">{about.mainText}</SubText>}
    {about.subText && <SubText as="p">{about.subText}</SubText>}
    {about.education && (
      <SubtitleText as="h3" weight={500}>
        Education
      </SubtitleText>
    )}
    {about.education &&
      about.education.map((edu) => (
        <EducationDisplayer>
          <TitleSection>
            {edu.institution.logo && (
              <a
                href={edu.institution.website}
                target="_blank"
                rel="noopener noreferrer"
                name={`Link to ${edu.institution.name}`}
              >
                <Icon
                  src={edu.institution.logo}
                  height={50}
                  width={50}
                  alt={edu.institution.name}
                />
              </a>
            )}
            <EducationTitleText>
              <Text as="h5">{edu.institution.name}</Text>
              {edu.institution.location && (
                <Text>{`${
                  edu.institution.location.city
                    ? `${edu.institution.location.city}, `
                    : ''
                }
            ${
              edu.institution.location.state
                ? `${edu.institution.location.state}, `
                : ''
            }
            ${
              edu.institution.location.country
                ? `${edu.institution.location.country}`
                : ''
            }
            `}</Text>
              )}
              {(edu.start && edu.end && edu.major && (
                <Text>
                  {edu.major}, {edu.degree} | {edu.start}-{edu.end}
                </Text>
              )) ||
                (edu.major && (
                  <Text>
                    {edu.major},{edu.degree}
                  </Text>
                ))}
            </EducationTitleText>
          </TitleSection>
          <Description>
            {edu.about && (
              <AboutEducation>
                <Text>{edu.about}</Text>
              </AboutEducation>
            )}
            <Classes>
              {edu.classes && (
                <Text>
                  Here is a list of relevant coursework I have taken at{' '}
                  {edu.institution.shortName || edu.institution.name}:
                </Text>
              )}
              <ul>
                {edu.classes &&
                  edu.classes.map((cl) => (
                    <li>
                      <Class>
                        <Text>{cl}</Text>
                      </Class>
                    </li>
                  ))}
              </ul>
            </Classes>
          </Description>
        </EducationDisplayer>
      ))}
  </AboutContainer>
);

export default withTheme(About);
