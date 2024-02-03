import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonInput, InputStyled } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchProducts, selectState } from "../../store/search.slice";
import { AppDispatch } from "../../store/store";

const AutoInput = () => {
  const products = useSelector(selectState);
  const [value, setValue] = useState<string | null>("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchSearchProducts());
    };
    fetchData();
  }, [dispatch]);

  const handleSearch = () => {
    if (value) {
      const product = products.find((e) => e.title === value);
      navigate(`/product/${product?.id}`);
      setValue("");
    }
  };
  const title = products.map((el) => el.title);

  return (
    <>
      <InputStyled
        value={value}
        // @ts-expect-error i dont now how fixed this
        onChange={(_event: React.SyntheticEvent, value: string | null) => {
          setValue(value);
        }}
        disablePortal
        id="combo-box-demo"
        options={title}
        sx={{ width: 200 }}
        renderInput={(params) => (
          <TextField {...params} placeholder="Search.." />
        )}
      />
      <ButtonInput onClick={handleSearch}>Submit</ButtonInput>
    </>
  );
};

export default AutoInput;
