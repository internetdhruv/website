import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { breakpoints } from '../styles';
import Text from './Text';
import Icon from './Icon';

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 500px;
  height: 500px;
  background: ${(props) => props.theme.gray5};
  padding: 10px;
  text-align: center;
  ${breakpoints.md`
    margin-right: 40px;
  `}
`;

const ImageContainer = styled.div`
  background: ${(props) => props.theme.gray5};
  width: 100%;
  height: 50%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const BottomContainer = styled.div`
  background: ${(props) => props.theme.gray5};
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Description = styled(Text)`
  background: ${(props) => props.theme.gray5};
  margin-top: 15px;
  margin-bottom: 10px;
`;

const TitleContainer = styled.div`
  background: none;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Links = styled.div`
  position: absolute;
  top: 6px;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  flex-direction: row;
  background: none;
  a {
    background: none;
  }
`;

const Title = styled(Text)`
  background: none;
  margin-bottom: 10px;
`;

const FAIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.secondaryColor};
  margin-left: 7px;
  background: none;
`;

const ProjectDisplay = (props) => {
  const { project } = props;
  return (
    <ProjectContainer>
      <TitleContainer>
        <Title as="h3">{project.name}</Title>
        {project.links && (
          <Links>
            {project.links.project && (
              <a
                href={project.links.project}
                rel="noopener noreferrer"
                target="_blank"
                name={`Link to ${project.name}`}
              >
                <FAIcon icon="external-link-alt" height={20} width={30} />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                rel="noopener noreferrer"
                target="_blank"
                name={`Link to ${project.name} source on Github`}
              >
                <FAIcon icon={['fab', 'github']} height={20} width={30} />
              </a>
            )}
          </Links>
        )}
      </TitleContainer>
      <ImageContainer>
        <Icon src={project.image} alt={project.name} />
      </ImageContainer>
      <BottomContainer>
        <Description>{project.description}</Description>

        {/* <TechUsed></TechUsed> */}
      </BottomContainer>
    </ProjectContainer>
  );
};

export default ProjectDisplay;
