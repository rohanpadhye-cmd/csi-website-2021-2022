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

  .contact-form-card {
    border: 2px groove ${({ theme }) => theme.text};
  }
  
  .contact-form-card .card-header {
    border: 3px solid ${({ theme }) => theme.text};
    color:${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.text};
  }

  .contact-form-card .card-body {
    background-color:${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .contact-btn {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.text};
  }

`