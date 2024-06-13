import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white p-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
