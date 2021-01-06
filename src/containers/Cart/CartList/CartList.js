import {
  Box,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CounterGroup from "../../../components/CounterGroup/CounterGroup";
import { selectCart } from "../../../utils/context/slice/cartSlice";
import { formatUah, links, productImages } from "../../../utils/Utils";
import { ProductImage } from "./CardList.styled";
import ColoredButton from "../../../components/ColoredButton/ColoredButton";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CartList = () => {
  const classes = useStyles();
  const cart = useSelector(selectCart);
  const history = useHistory();

  const handlePurchase = () => {
    history.push(`/${links.checkout}`);
  };

  return (
    <Box mx={30} mt={10} mb={5} display="flex" flexDirection="column">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="cart table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  <ProductImage
                    src={productImages[item.id] || productImages[0]}
                  />
                </TableCell>
                <TableCell>Garland ({item.color})</TableCell>
                <TableCell align="right" padding="none">
                  <CounterGroup id={item.id} quantity={item.quantity} />
                </TableCell>
                <TableCell align="right">
                  {formatUah(item.price_in_uah * item.quantity)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box my={5} alignSelf="flex-end">
        <Typography variant="h5">
          Total price:{" "}
          <Box fontWeight="bold" component="span">
            {formatUah(
              cart.reduce(
                (accumulator, item) =>
                  accumulator + item.price_in_uah * item.quantity,
                0
              )
            )}
          </Box>
        </Typography>
      </Box>
      <Box mb={5} alignSelf="flex-end">
        <ColoredButton
          color="success"
          variant="contained"
          disabled={cart.length === 0}
          onClick={handlePurchase}
        >
          Purchase now
        </ColoredButton>
      </Box>
    </Box>
  );
};

export default CartList;
