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
import React from "react";
import garland from "../../img/garland.jpg";
import { useTheme } from "styled-components";
import TagsComponent from "../TagsComponent/TagsComponent";
import CardDescription from "./CardDescription";
import ColoredButton, { button } from "../ColoredButton/ColoredButton";

const useStyles = makeStyles({
  media: {
    height: 360,
  },
});

const CardComponent = (props) => {
  const theme = useTheme();
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
        <ColoredButton color="success">Test</ColoredButton>
        <Button color="primary">Buy</Button>
        <Button color="default">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
