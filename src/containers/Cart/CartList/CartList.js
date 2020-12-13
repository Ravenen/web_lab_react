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
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CounterGroup from "../../../components/CounterGroup/CounterGroup";
import { selectCart } from "../../../utils/context/slice/cartSlice";
import { formatUah, productImages } from "../../../utils/Utils";
import { ProductImage } from "./CardList.styled";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CartList = () => {
  const classes = useStyles();
  const cart = useSelector(selectCart);
  return (
    <Box mx={30} mt={10} mb={5} display="flex" flexDirection="column">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="cart table">
          {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  <ProductImage src={productImages[item.id]} />
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
    </Box>
  );
};

export default CartList;
