import axios from 'axios';
import Layout from '../../components/Layout';
import ProductDetail from '../../components/ProductDetail';

const ProductPage = ({ product }) => (
  <Layout>
    <ProductDetail product={product} />
  </Layout>
);

export async function getStaticPaths() {
  const res = await axios.get('https://dummyjson.com/products');
  const products = res.data.products;
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
  const product = res.data;

  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
