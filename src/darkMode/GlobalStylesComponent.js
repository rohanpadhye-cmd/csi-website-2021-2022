import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s linear;
  }
  
  hr {
    background: ${({ theme }) => theme.text};
    transition: all 0.50s fade;
  }
  
  .modal-header {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.text};
  }
  
  .modal-content {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  
  .carousel-control-next-icon, .carousel-control-prev-icon {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.text};
  }
`