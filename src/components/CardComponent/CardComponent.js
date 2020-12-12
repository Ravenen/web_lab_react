import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { links, productImages } from "../../utils/Utils";
import ColoredButton from "../ColoredButton/ColoredButton";
import { HoverableNavLink } from "../HoverableLink/HoverableLink.styled";
import CardDescription from "./CardDescription";

const useStyles = makeStyles({
  media: {
    height: 360,
  },
});

const CardComponent = (props) => {
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
        <Typography gutterBottom variant="h5" component="h2">
          {isLoading ? <Skeleton width="40%" /> : "Garland"}
        </Typography>
        {isLoading ? (
          <Box>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Box>
        ) : (
          <CardDescription {...props} />
        )}
      </CardContent>
      <CardActions>
        <ColoredButton variant="outlined" color="success">
          Buy
        </ColoredButton>
        <HoverableNavLink to={`/${links.catalog}/${props.id}`}>
          <Button color="default">Learn More</Button>
        </HoverableNavLink>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
