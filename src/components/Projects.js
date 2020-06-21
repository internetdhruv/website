import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import ProjectDisplay from './ProjectDisplay';
import { breakpoints, sizes } from '../styles';
import { projects } from '../config';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px auto 0 auto;
  width: ${sizes.Containers.width.normal}%;

  ${breakpoints.md`
    width: ${sizes.Containers.width.wide}%;
  `}
  ${breakpoints.xxl`
    width: ${sizes.Containers.width.xwide}%;
  `}
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

const Projects = () => (
  <ProjectsContainer>
    {' '}
    <Text as="h2">Projects</Text>
    <ContentContainer>
      {projects.map((proj) => (
        <ProjectDisplay project={proj} />
      ))}
    </ContentContainer>
  </ProjectsContainer>
);

export default Projects;
