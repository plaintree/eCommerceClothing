import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.imageUrl})`};
`;

export const DirectoryItemBody = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  background-color: black;
  opacity: 0.7;
  position: absolute;
  color: white;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }

  @media screen and (max-width: 545px) {
    border: unset;
    background-color: unset;
    opacity: unset;
  }
`;
export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1;
  display: flex;

  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: 1rem;
  overflow: hidden;

  @media screen and (max-width: 545px) {
    min-width: 80%;
    flex-direction: column;
    flex-wrap: no-wrap;

    &:first-child {
      margin-right: unset;
    }

    &:last-child {
      margin-left: unset;
    }
  }

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${DirectoryItemBody} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
