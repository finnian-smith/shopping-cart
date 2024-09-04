import ProductCard from "../../components/ProductCard/ProductCard";
import useFetchProducts from "../../hooks/useFetchProducts";
import "./Shop.css";

const Shop = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-section">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
