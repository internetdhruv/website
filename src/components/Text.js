import styled from 'styled-components';
import { typography } from '../styles';

const DEFAULT_SIZE = 14;
const DEFAULT_WEIGHT = 'normal';

const getSize = (props) => {
  if (props.size) return props.size;
  return (
    (props.as &&
      typography.typeHierarchy[props.as] &&
      typography.typeHierarchy[props.as].size) ||
    DEFAULT_SIZE
  );
};

const getWeight = (props) => {
  if (props.bold) return 'bold';
  if (props.semibold) return 'semibold';
  if (props.regular) return 'regular';
  if (props.weight) return props.weight;
  return (
    (props.as &&
      typography.typeHierarchy[props.as] &&
      typography.typeHierarchy[props.as].weight) ||
    DEFAULT_WEIGHT
  );
};

const getColor = (props) => {
  if (props.color === 'css') return null;
  if (props.color) return props.color;
  return props.theme.text;
};

const Text = styled.p`
  font-size: ${getSize}px;
  font-weight: ${getWeight};
  font-family: ${typography.baseFont};
  ${(props) => {
    const c = getColor(props);
    return c ? `color: ${c}` : '';
  }};
  display: inline;
`;

export default Text;
