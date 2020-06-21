import styled from 'styled-components';

const Icon = styled.img`
  ${(props) => props.src && `src: ${props.src}`};
  ${(props) => props.alt && `alt: ${props.alt}`};
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.onClick && `onClick: ${props.onClick}`};
  ${(props) => props.pointerCursor && 'cursor: pointer'};
  ${(props) => props.addedCSS && `${props.addedCSS}`};
`;

export default Icon;
