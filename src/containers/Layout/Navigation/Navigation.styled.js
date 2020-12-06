import styled from "styled-components";

export const StyledNavMenu = styled.ul`
  list-style-type: none;

  li {
    padding: 0 25px;

    .selected {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;
