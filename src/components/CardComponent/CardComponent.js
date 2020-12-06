import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import CardDescription from "./CardDescription";
import ColoredButton from "../ColoredButton/ColoredButton";
import { links, productImages } from "../../utils/Utils";
import { HoverableNavLink } from "../HoverableLink/HoverableLink.styled";

const useStyles = makeStyles({
  media: {
    height: 360,
  },
});

const CardComponent = (props) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={productImages[props.id] || productImages[0]}
        title="Garland"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Garland
        </Typography>
        <CardDescription {...props} />
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
