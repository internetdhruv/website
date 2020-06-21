import React, { useContext } from 'react';
import styled from 'styled-components';

import Text from './Text';

import { SelectionContext } from './Experience';

const OrgPickerContainer = styled.div`
  display: flex;
  width: 25%;
  height: 400px;
  justify-content: space-around;
  background: ${(props) => props.theme.gray5};
  // border-radius: 15px;
  overflow: hidden;
`;

const OrgList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  text-align: center;
  background: ${(props) => props.theme.gray5};
  overflow: auto;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${(props) =>
      props.theme.secondaryColor}; //rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
  ::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0);
    visibility: none;
  }
`;

const OrganizationName = styled(Text)`
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 40px;
  line-height: 40px;
  background: ${(props) =>
    props.selected ? props.theme.gray4 : props.theme.gray5};
  cursor: pointer;
  transition: color 0s;
  margin: auto;
  flex-grow: 0;
  flex-shrink: 0;
`;

const OrgPicker = (props) => {
  const [selection, setSelection] = useContext(SelectionContext);
  const handleClick = (value) => () => {
    setSelection(value);
  };
  return (
    <OrgPickerContainer>
      <OrgList>
        {props.experience &&
          props.experience.map((exp) => (
            <OrganizationName
              size={16}
              onClick={handleClick(exp)}
              selected={selection === exp}
              key={exp.id}
            >
              {exp.alternateHeading || exp.organization}
            </OrganizationName>
          ))}
      </OrgList>
    </OrgPickerContainer>
  );
};

export default OrgPicker;
