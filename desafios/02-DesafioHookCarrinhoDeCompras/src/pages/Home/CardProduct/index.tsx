import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { CartItemsAmount } from "..";

type Props = {
  id: number;
  title: string;
  image: string;
  priceFormatted: string;
  handleAddProduct: (id: number) => void;
  cartItemsAmount: CartItemsAmount;
};

const CardProduct = (product: Props) => {
  return (
    <li>
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <span>{product.priceFormatted}</span>
      <button
        type="button"
        data-testid="add-product-button"
        onClick={() => product.handleAddProduct(product.id)}
      >
        <div data-testid="cart-product-quantity">
          <MdAddShoppingCart size={16} color="#FFF" />
          {product.cartItemsAmount[product.id] || 0}
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
  );
};

export default CardProduct;
