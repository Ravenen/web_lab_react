import styled from "styled-components";

export const StyledHero = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 60px 0 0;
  background-color: ${(props) => props.theme.palette.background.main};

  img {
    width: 100%;
    height: 100%;
  }
`;
