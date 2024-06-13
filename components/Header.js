import Link from 'next/link';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart ({cart.items.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
