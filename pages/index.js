import axios from 'axios';
import ProductList from '../components/ProductList';
import Layout from '../components/Layout';

export default function Home({ products }) {
  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get('https://dummyjson.com/products');
  const products = res.data.products;

  return {
    props: {
      products,
    },
  };
}
