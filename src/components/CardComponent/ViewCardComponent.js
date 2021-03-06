import {
  Box,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { productImages } from "../../utils/Utils";
import { StyledBadge } from "../StyledBadge/StyledBadge.styled";

const useStyles = makeStyles({
  media: {
    height: 360,
  },
});

const ViewCardComponent = (props) => {
  const classes = useStyles();
  const isLoading = props.isLoading || false;
  return (
    <Card>
      {isLoading ? (
        <Skeleton variant="rect" height={360} />
      ) : (
        <CardMedia
          className={classes.media}
          image={productImages[props.id] || productImages[0]}
          title="Garland"
        />
      )}
      <CardContent>
        <Box textAlign="center" mb={2}>
          <Typography gutterBottom variant="h5" component="h2">
            {isLoading ? (
              <Box component={Skeleton} mx={10} />
            ) : (
              <StyledBadge
                badgeContent={props.id % 3 === 0 ? "HOT" : 0}
                color="primary"
              >
                Garland
              </StyledBadge>
            )}
          </Typography>
        </Box>
        <Box textAlign="center">
          {isLoading ? (
            <Box>
              <Skeleton />
              <Box component={Skeleton} mx={2} />
            </Box>
          ) : (
            <Typography variant="body2" color="textSecondary">
              <Box lineHeight={2} component="span">
                Quis culpa deserunt do quis commodo nulla. Aute non aliquip est
                aliquip do incididunt irure duis anim ullamco.
              </Box>
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ViewCardComponent;
