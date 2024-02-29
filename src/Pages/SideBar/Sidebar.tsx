import { useEffect, useState } from "react";
import {
  CategoriesList,
  CategoryImage,
  CategoryItem,
  CategoryLink,
  SideBarDiv,
} from "./styled";
import axios from "axios";

const Sidebar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories",
        );
        const data = response.data;
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <SideBarDiv data-testid="sidebar">
      <CategoriesList>
        {categories.map((category) => (
          <CategoryItem key={category}>
            <CategoryLink to={`products/${category}`}>
              {category}
              <CategoryImage src={`/icon/${category}.svg`} alt="icon" />
            </CategoryLink>
          </CategoryItem>
        ))}
      </CategoriesList>
    </SideBarDiv>
  );
};

export default Sidebar;
