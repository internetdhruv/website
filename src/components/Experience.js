import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { uuid } from 'uuidv4';

import { sizes, breakpoints } from '../styles';
import Text from './Text';
import OrgPicker from './OrgPicker';
import ExperienceDisplayer from './ExperienceDisplayer';
import { experience } from '../config';

const sortedExperience = experience
  .sort((first, second) => {
    const firstDate = Date.parse(`01 ${first.start.month} ${first.start.year}`);
    const secondDate = Date.parse(
      `01 ${second.start.month} ${second.start.year}`
    );
    return secondDate - firstDate;
  })
  .map((exp) => ({ ...exp, id: uuid() }));

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px auto 0 auto;
  width: ${sizes.Containers.width.normal}%;

  ${breakpoints.md`
    width: ${sizes.Containers.width.wide}%;
  `}
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  align-items: center;
`;

export const SelectionContext = React.createContext();

const Experience = () => {
  const [selection, setSelection] = useState(sortedExperience[0]);
  return (
    <ExperienceContainer>
      <Text as="h2">Experience</Text>
      <ContentBlock>
        <SelectionContext.Provider value={[selection, setSelection]}>
          <OrgPicker experience={sortedExperience} />
          <ExperienceDisplayer experience={sortedExperience} />
        </SelectionContext.Provider>
      </ContentBlock>
    </ExperienceContainer>
  );
};

export default withTheme(Experience);
