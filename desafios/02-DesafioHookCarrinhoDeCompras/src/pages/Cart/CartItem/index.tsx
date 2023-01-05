import React from "react";
import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline,
} from "react-icons/md";

type Props = {
  id: number;
  image: string;
  title: string;
  priceFormatted: string;
  subTotal: string;
  amount: number;
  handleProductDecrement: Function;
  handleProductIncrement: Function;
  handleRemoveProduct: Function;
};

const CartItem = ({
  id,
  image,
  title,
  priceFormatted,
  subTotal,
  amount,
  handleProductDecrement,
  handleProductIncrement,
  handleRemoveProduct,
}: Props) => {
  return (
    <tr data-testid="product">
      <td>
        <img src={image} alt={title} />
      </td>
      <td>
        <strong>{title}</strong>
        <span>{priceFormatted}</span>
      </td>
      <td>
        <div>
          <button
            type="button"
            data-testid="decrement-product"
            disabled={amount <= 1}
            onClick={() => handleProductDecrement({ id, amount })}
          >
            <MdRemoveCircleOutline size={20} />
          </button>
          <input
            type="text"
            data-testid="product-amount"
            readOnly
            value={amount}
          />
          <button
            type="button"
            data-testid="increment-product"
            onClick={() => handleProductIncrement({ id, amount })}
          >
            <MdAddCircleOutline size={20} />
          </button>
        </div>
      </td>
      <td>
        <strong>{subTotal}</strong>
      </td>
      <td>
        <button
          type="button"
          data-testid="remove-product"
          onClick={() => handleRemoveProduct(id)}
        >
          <MdDelete size={20} />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
