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
  
  .carousel-indicators li {
    background-color: ${({ theme }) => theme.text};
    color:${({ theme }) => theme.body};
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

  .contact-links, .contact-links:hover {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .btn-primary {
    background-color: ${({ theme }) => theme.body};
    border-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
    &:hover {
      background-color: ${({ theme }) => theme.body};
      border-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.text};
      font-weight: 600;
    };
    font-weight: 600;
  }

  .btn-success {
    background-color: ${({ theme }) => theme.body};
    border-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
    &:hover {
      background-color: ${({ theme }) => theme.body};
      border-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.text};
      font-weight: 600;
    };
    font-weight: 600;
  }

  .contact-btn {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.text};
    &:hover {
      background-color: ${({ theme }) => theme.body};
      border-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.text};
    }
  }

  .list-group-item {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .testimonialsBody {
    background-color: ${({ theme }) => theme.styledCard} !important;
    color: ${({ theme }) => theme.text};
  }

  .myCarousel{
    background-color: ${({ theme }) => theme.carouselCardBody} !important;
  }

  .myCarousel p, .myCarousel h4, .myCarousel h3 {
    background-color: ${({ theme }) => theme.carouselCardBody} !important;
    color: ${({ theme }) => theme.carouselCardText} !important;
  }

  .darkFont{
    color: ${({ theme }) => theme.text} !important;
  }

  .about-content, .ourMission-content, .testimonials-content {
    background-color: ${({ theme }) => theme.styledCard} !important;
    color: ${({ theme }) => theme.text} !important;
  }

  .card .details {
    background-color: ${({ theme }) => theme.styledCouncilCard} !important;
    color: ${({ theme }) => theme.text} !important;
  }

  .counter-item{
    color: ${'black'} !important;
  }

  .thumbs > .thumb:hover {
    border-color: ${({ theme }) => theme.thumb};
  }

  .carousel .control-dots .dot {
    background-color: #d4f5f5 !important;
  }

  .carousel .thumb.selected {
    border-color: ${({ theme }) => theme.thumb};
    background-color: inherit;
  }
  .upcomingEvent-sec{
    background-color: ${({ theme }) => theme.styledCard} !important;

  }

  .ourMag-Sec{
    background-color: ${({ theme }) => theme.styledCard} !important;
  }

`
