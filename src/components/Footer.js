import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from './Text';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  background: ${(props) => props.theme.gray5};
  height: 100px;
  width: 100%;
  text-align: center;
  * {
    background: none;
  }
`;

const FAIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.secondaryColor};
  margin-left: 7px;
  background: none;
`;

const GithubContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 80px;
  background: none;
  * {
    background: none;
  }
`;

const IconAndText = styled.div`
  display: flex;
  flex-direction: row;
  ${Text} {
    margin-left: 4px;
    color: ${(props) => props.theme.secondaryColor};
  }
`;

const Footer = () => {
  const [githubInfo, setGithubInfo] = useState({ stars: null, forks: null });
  useEffect(() => {
    fetch('https://api.github.com/repos/dhruvsharma78/website')
      .then((res) => res.json())
      .then((res) => {
        const { stargazers_count, forks_count } = res;
        setGithubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      });
  }, []);
  return (
    <FooterContainer>
      <Text>Designed and built by Dhruv Sharma, &copy; 2020</Text>
      <a
        href="https://github.com/dhruvsharma78/website"
        rel="noopener noreferrer"
        target="_blank"
        name="GitHub Link to this websites source."
      >
        <GithubContainer>
          <IconAndText>
            <FAIcon icon="star"></FAIcon>
            <Text as="p">{githubInfo.stars}</Text>
          </IconAndText>
          <IconAndText>
            <FAIcon icon="code-branch"></FAIcon>
            <Text as="p">{githubInfo.forks}</Text>
          </IconAndText>
        </GithubContainer>
      </a>
    </FooterContainer>
  );
};

export default Footer;
