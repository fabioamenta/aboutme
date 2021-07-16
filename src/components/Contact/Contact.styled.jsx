import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin: 0 auto;
  max-width: 70%;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--color-bg-element);
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.08);
  border: 7px solid var(--color-blue-light);
  border-radius: 6px;
  font-size: 1.2em;

  .title {
    flex-basis: 100%;
    margin-bottom: 3em;
  }
`;

export const ContactForm = styled.form`
  &,
  .row {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: 1em;

    .form-control {
      border: none;
      border-bottom: 1px solid var(--color-blue-light);
      padding: 1em 0;
      border-radius: 0;
      background: none;
      margin-bottom: 2em;
      transition: all 300ms ease-in-out;
      color: var(--color-text-light);

      &:focus,
      &:hover {
        outline: none;
        border-bottom-color: var(--color-highlight);
      }
    }

    textarea {
      resize: none;
    }
  }

  .button-wrapper {
    margin: 2em;
    text-align: center;
  }

  .btn {
    border: none;
    border-radius: 3px;
    padding: 1em 2em;
    text-transform: uppercase;
    transition: all 300ms ease-in-out;
    background-color: var(--color-blue-light);
    color: var(--color-text-light);

    &:hover,
    &:focus {
      background-color: var(--color-highlight);
    }
  }

  .btn,
  .form-control {
    cursor: pointer;
  }
`;

export const ContactInfo = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding: 0.5em;

  li {
    margin-bottom: 0.5em;

    a {
      font-size: 1.2em;
      color: var(--color-bg-canvas);

      &:hover,
      &:focus {
        color: var(--color-highlight);
      }
    }
  }
`;
