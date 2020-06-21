import styled from 'styled-components';

const Logo = styled.img.attrs((props) => ({
  src: props.theme.logoSrc,
  alt: 'Dhruv Sharma - Logo',
}))`
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) => props.width && `width: ${props.width}px`};
  cursor: pointer;
`;

export default Logo;
