import { IProduct } from "./GroceryApp";

type Props = {
  onVote: (dir: string, index: number) => void;
  product: IProduct;
  index: number;
};

const Product = (props: Props) => {
  const { onVote, product, index } = props;

  const plus = () => {
    onVote("up", index);
  };
  const minus = () => {
    onVote("down", index);
  };
  return (
    <li>
      <span>{product.name}</span> - <span>votes: {product.votes}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

export default Product;
