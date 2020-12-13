import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../utils/context/slice/cartSlice";

const CounterGroup = ({ id, quantity }) => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrementQuantity({ id: id }));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity({ id: id }));
  };

  return (
    <ButtonGroup color="secondary" aria-label="outlined secondary button group">
      <Button onClick={handleDecrement}>-</Button>
      <Button disabled>{quantity}</Button>
      <Button onClick={handleIncrement}>+</Button>
    </ButtonGroup>
  );
};

export default CounterGroup;
