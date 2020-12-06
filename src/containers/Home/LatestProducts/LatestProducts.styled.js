import styled from "styled-components";
import { HoverableAnchorLink } from "../../../components/HoverableLink/HoverableLink.styled";

export const StyledToggleLink = styled(HoverableAnchorLink)`
  color: ${(props) =>
    props.selected ? props.theme.palette.primary.main : "inherit"};
`;
