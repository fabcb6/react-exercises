// https://www.testdome.com/questions/react-js/grocery-app/76506?generator=104
import { useState } from "react";
import Product from "./Product";

export interface IProduct {
  name: string;
  votes: number;
}

type Props = {
  products: IProduct[];
};

const GroceryApp = (props: Props) => {
  let [products, setProducts] = useState(props.products);
  const onVote = (dir: string, index: number) => {
    const updatedProducts = products.map((product: IProduct, i: number) => {
      if (i === index) {
        return dir === "up"
          ? { ...product, votes: product.votes + 1 }
          : { ...product, votes: product.votes - 1 };
      } else {
        return product;
      }
    });

    setProducts([...updatedProducts]);
  };

  return (
    <ul>
      {products.map((product: IProduct, i: number) => {
        return (
          <Product
            onVote={(dir: string, index: number) => onVote(dir, index)}
            product={product}
            index={i}
          />
        );
      })}
    </ul>
  );
};

export default GroceryApp;
