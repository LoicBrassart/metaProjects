import styled from "styled-components";

export default styled.article`
  border: 2px dotted red;
  width: 25vw;
  aspect-ratio: 3/4;
  margin: 1em;

  picture,
  img {
    width: 100%;
  }

  figure,
  div {
    height: 50%;
    overflow: hidden;
  }
`;
