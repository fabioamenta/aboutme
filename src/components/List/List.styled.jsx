import styled, { css } from "styled-components";

const timelineBulletSize = "30px";

export const ListStyle = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  position: relative;
  margin: 0;
  padding: 0;

  li {
    a {
      &:hover {
        color: var(--color-text);
      }

      &.active {
        color: var(--color-highlight);
      }
    }
  }

  ${(props) =>
    props.type === "skills" &&
    css`
       {
        flex-wrap: wrap;

        li {
          flex: 0 0 100%;
          max-width: 50%;
          margin-bottom: 2em;

          @media only screen and (min-width: 560px) {
            max-width: 33.333333%;
          }

          @media only screen and (min-width: 992px) {
            max-width: 25%;
          }
        }
      }
    `}

  ${(props) =>
    props.type === "nav" &&
    css`
       {
        align-items: center;
        justify-content: space-evenly;
        height: 100vh;
        padding: 10% 5%;

        li {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
        }
      }
    `}

  ${(props) =>
    props.type === "timeline" &&
    css`
       {
        margin: 0;
        padding: 0;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: calc(${timelineBulletSize} / 2);
          height: 100%;
          width: 4px;
          border-radius: 4px;
          background-color: var(--color-blue-light);

          @media only screen and (min-width: 992px) {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        > li {
          flex: 0 0 100%;
          position: relative;
          padding: 2em 0 2em calc(${timelineBulletSize} * 2);
          @media only screen and (min-width: 992px) {
            padding-left: 0;
          }

          &:after {
            content: "";
            display: block;
            position: absolute;
            width: ${timelineBulletSize};
            height: ${timelineBulletSize};
            border-radius: 50%;
            background-color: var(--color-bg-canvas);
            top: 2em;
            left: 2px;
            box-shadow: 0 0 0 4px var(--color-blue-light),
              inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
            @media only screen and (min-width: 992px) {
              left: 50%;
              transform: translateX(-50%);
            }
          }

          &:nth-child(even) .timeline-wrapper {
            margin-left: auto;

            &::before {
              left: -25px;
              border-color: transparent;
              border-right-color: var(--color-blue-light);
            }

            @media only screen and (min-width: 992px) {
              .date {
                margin-left: 0;
              }

              .timeline-content {
                border-top-left-radius: 0;
              }
            }
          }
        }
      }

      .timeline-wrapper {
        position: relative;
        padding: 0;

        @media only screen and (min-width: 992px) {
          width: calc(50% - ${timelineBulletSize} - 4em);
          margin: 0 2em;
          display: flex;
          flex-wrap: wrap;
        }

        .timeline-content {
          background-color: var(--color-bg-element);
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.08);
          border: 7px solid var(--color-blue-light);
          margin-top: -7px;
          padding: 1em;
          border-radius: 6px;
          flex-basis: 100%;
        }

        .date {
          display: inline-block;
          background-color: var(--color-blue-light);
          color: var(--color-bg-canvas);
          font-weight: 600;
          padding: 0.1em 1em;
          font-size: 1.2em;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;

          @media only screen and (min-width: 992px) {
            margin-left: auto;
          }
        }

        .content-skills {
          padding: 0;
          margin-bottom: 0;
          display: flex;
          flex-wrap: wrap;
        }

        .tag {
          font-size: 0.8em;
          background: var(--color-grey-skill);
          border-radius: 2px;
          display: inline-block;
          padding: 2px 10px;
          color: rgba(255, 255, 255, 0.7);
          margin: 3px 2px;
        }

        .title {
          margin: 0 0 1em;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
          color: var(--color-highlight);
          font-weight: 400;
        }

        .description {
          font-size: 1.2em;
        }

        &::before {
          content: "";
          position: absolute;
          top: 2px;
          left: -25px;
          height: 0;
          width: 0;
          border: 13px solid transparent;
          border-right: 13px solid var(--color-blue-light);
          @media only screen and (min-width: 992px) {
            left: calc(100% - 1px);
            border-color: transparent;
            border-left-color: var(--color-blue-light);
          }
        }
      }
    `}
`;
