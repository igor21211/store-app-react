import { Grid } from "@mui/material";
import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import LoadingPageList from "../Loading/LoadingPageList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchProducts } from "../../store/product.slice";
import { JSX } from "react/jsx-runtime";
import { Product } from "../../interfaces/product.interface";

const ProductList = (): JSX.Element => {
  const { items, isLoading } = useSelector(
    (state: RootState) => state.products,
  );
  const param = useParams();
  const { category } = param;
  const dispath = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispath(fetchProducts({ category: category, limit: 12 }));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [dispath, category]);

  if (isLoading) {
    return <LoadingPageList />;
  }

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {items.map((item: JSX.IntrinsicAttributes & Product) => (
        <Grid item xs={2} sm={4} md={4} key={item.id}>
          <ProductCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
