import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/slices/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cart.items.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-4">
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
