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
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../utils/context/slice/cartSlice";
import {
  links,
  productImages,
  showGarlandsAddedToCart,
} from "../../utils/Utils";
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
  const garland = props.garland;
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleBuy = () => {
    let singleGarland = { ...garland, quantity: 1 };
    dispatch(addToCart(singleGarland));
    showGarlandsAddedToCart(enqueueSnackbar, 1);
  };

  return (
    <Card>
      {isLoading ? (
        <Skeleton variant="rect" height={360} />
      ) : (
        <CardMedia
          className={classes.media}
          image={productImages[garland.id] || productImages[0]}
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
          <CardDescription {...garland} />
        )}
      </CardContent>
      <CardActions>
        <ColoredButton variant="outlined" color="success" onClick={handleBuy}>
          Buy
        </ColoredButton>
        <HoverableNavLink to={`/${links.catalog}/${garland && garland.id}`}>
          <Button color="default">Learn More</Button>
        </HoverableNavLink>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
