import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --shape: #FFFFFF;
    
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #E62E4D;
    
    --text-title: #363F5F;
    --text-body: #969CB3;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body { 
    background-color: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: Poppins, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    padding: 0;
    border: 0;
    background-color: transparent;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;

    transition-property: background-color, filter;
    transition-duration: 0.2s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      filter: brightness(0.80);
    }
  }
`;
