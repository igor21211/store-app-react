import { Grid } from "@mui/material";
import Header from "../../Pages/Header/Header";
import Sidebar from "../../Pages/SideBar/Sidebar";
import Footer from "../../Pages/Footer/Footer";
import { GridContainer } from "./styled";
import { Outlet } from "react-router-dom";

const Main = (): JSX.Element => {
  return (
    <>
      <GridContainer container spacing={5}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={7}>
          <Outlet />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </GridContainer>
    </>
  );
};

export default Main;
