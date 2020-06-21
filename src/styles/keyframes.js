import { keyframes } from 'styled-components';

export const scrollIconUpDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(20px);
    }
`;

export const fadeInOut = keyframes`
    0%,30%{
        opacity: 0;
    }
    100%{
       opacity: 1; 
    }
`;
