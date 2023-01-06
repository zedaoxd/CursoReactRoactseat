import React, { useState, useEffect } from "react";

import { ProductList } from "./styles";
import { api } from "../../services/api";
import { formatPrice } from "../../util/format";
import { useCart } from "../../hooks/useCart";
import CardProduct from "./CardProduct";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

export interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount;
  }, {} as CartItemsAmount);

  useEffect(() => {
    (async () => {
      api.get<Product[]>("/products").then((response) => {
        setProducts(
          response.data.map((product) => ({
            ...product,
            priceFormatted: formatPrice(product.price),
          }))
        );
      });
    })();
  }, []);

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <ProductList>
      {products.map((x) => (
        <CardProduct
          key={x.id}
          id={x.id}
          image={x.image}
          priceFormatted={x.priceFormatted}
          title={x.title}
          handleAddProduct={handleAddProduct}
          cartItemsAmount={cartItemsAmount}
        />
      ))}
    </ProductList>
  );
};

export default Home;
