import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../interfaces/product.interface";
import { useParams } from "react-router-dom";
import LoadingPageList from "../Loading/LoadingPageList";

const ProductList = (): JSX.Element => {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const param = useParams();
  const { category } = param;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsloading(true);
        const url =
          param && category
            ? `https://dummyjson.com/products/category/${param.category}?limit=12`
            : "https://dummyjson.com/products?limit=12";

        const response = await fetch(url);
        const data = await response.json();
        setItems(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsloading(false);
      }
    };

    fetchData();
  }, [param, category]);

  if (isLoading) {
    return <LoadingPageList />;
  }

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {items.map((item) => (
        <Grid item xs={2} sm={4} md={4} key={item.id}>
          <ProductCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
