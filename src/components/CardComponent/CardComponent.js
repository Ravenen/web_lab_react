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

import defaultImg from "../../img/default.png";
import garland1 from "../../img/product/garland1.jpg";
import garland2 from "../../img/product/garland2.jpg";
import garland3 from "../../img/product/garland3.jpg";
import garland4 from "../../img/product/garland4.jpg";
import garland5 from "../../img/product/garland5.jpg";
import garland6 from "../../img/product/garland6.jpg";
import garland7 from "../../img/product/garland7.jpg";

const images = [
  defaultImg,
  garland1,
  garland2,
  garland3,
  garland4,
  garland5,
  garland6,
  garland7,
];

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
        image={images[props.id] || images[0]}
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
        <Button color="default">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
