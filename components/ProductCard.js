import Link from 'next/link';

const ProductCard = ({ product }) => (
  <div className="border p-4">
    <h2 className="text-xl font-bold">{product.name}</h2>
    <p>{product.description}</p>
    <Link href={`/product/${product.id}`}>
      <div className="text-blue-500 cursor-pointer">View Details</div>
    </Link>
  </div>
);

export default ProductCard;
