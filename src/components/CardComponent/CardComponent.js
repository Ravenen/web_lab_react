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

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: 360,
  },
});

const CardComponent = ({
  id,
  color,
  length_in_metres,
  is_natural,
  decor_type,
  price_in_uah,
}) => {
  const theme = useTheme();
  const classes = useStyles();

  const booleanToText = (boolValue) => {
    return boolValue ? "Yes" : "No";
  };

  const booleanToColor = (boolValue) => {
    return boolValue ? theme.palette.success.main : theme.palette.error.main;
  };

  return (
    <Card className={classes.root} key={id}>
      <CardMedia className={classes.media} image={garland} title="Garland" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Garland
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Color: {color} <br />
          Length: {length_in_metres}m <br />
          Natural:{" "}
          <Box
            component="span"
            color={booleanToColor(is_natural)}
            fontWeight="bold"
          >
            {booleanToText(is_natural)}
          </Box>
          <TagsComponent tags={decor_type} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary">Buy</Button>
        <Button color="secondary">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
