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
import garland from "../../img/garland.jpg";
import CardDescription from "./CardDescription";
import ColoredButton from "../ColoredButton/ColoredButton";

const useStyles = makeStyles({
  media: {
    height: 360,
  },
});

const CardComponent = (props) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia className={classes.media} image={garland} title="Garland" />
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
