import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const StyledButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(5),
  },
}));
