import {
  Box,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { StyledBadge } from "../StyledBadge/StyledBadge.styled";
import { productImages } from "../../utils/Utils";

const useStyles = makeStyles({
  media: {
    height: 360,
  },
});

const ViewCardComponent = (props) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={productImages[props.id] || productImages[0]}
        title="Garland"
      />
      <CardContent>
        <Box textAlign="center" mb={2}>
          <Typography gutterBottom variant="h5" component="h2">
            <StyledBadge
              badgeContent={props.id % 3 === 0 ? "HOT" : 0}
              color="primary"
            >
              Garland
            </StyledBadge>
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="body2" color="textSecondary">
            <Box lineHeight={2} component="span">
              Quis culpa deserunt do quis commodo nulla. Aute non aliquip est
              aliquip do incididunt irure duis anim ullamco.
            </Box>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ViewCardComponent;
