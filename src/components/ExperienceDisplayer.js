import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from './Text';
import { breakpoints } from '../styles';

import { SelectionContext } from './Experience';

const ExperienceDisplayerContainer = styled.div`
  height: 300px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  ${breakpoints.lg`
    margin-top: 0;
    width: 50%;
    margin-left: 140px;
  `}
`;

const Title = styled.div`
  text-align: center;
`;

const TextLink = styled(Text)`
  color: ${(props) => props.theme.secondaryColor};
  cursor: pointer;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-top: 30px;
  justify-content; space-between;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${(props) =>
      props.theme.secondaryColor};//rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
  ::-webkit-scrollbar-corner {
    background: rgba(0,0,0,0);
  }
`;

const DescriptionCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  flex-grow: 0;
  flex-shrink: 0;
  margin-top: 10px;
`;

const FAIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.secondaryColor};
  margin-right: 10px;
  margin-top: 2px;
`;

const ExperienceDisplayer = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [selection, setSelection] = useContext(SelectionContext);
  return (
    <ExperienceDisplayerContainer>
      <Title>
        <Text as="h5">
          {`${selection.title} @ `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={selection.organizationWebsite}
          >
            <TextLink as="h5">{selection.organization}</TextLink>
          </a>
        </Text>
      </Title>
      <SubTitle>
        <Text>{`${selection.start.month}, ${selection.start.year} - ${
          selection.end
            ? `${selection.end.month}, ${selection.end.year}`
            : 'Present'
        }`}</Text>
        <Text>{`${selection.location.city ? `${selection.location.city}, ` : ''}
            ${selection.location.state ? `${selection.location.state}, ` : ''}
            ${selection.location.country ? `${selection.location.country}` : ''}
            `}</Text>
      </SubTitle>
      <DescriptionContainer>
        {selection.description.map((des) => (
          <DescriptionCell>
            <FAIcon icon="chevron-circle-right" />
            <Text>{des}</Text>
          </DescriptionCell>
        ))}
      </DescriptionContainer>
    </ExperienceDisplayerContainer>
  );
};

export default ExperienceDisplayer;
