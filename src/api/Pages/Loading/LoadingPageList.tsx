import { Grid, Skeleton } from "@mui/material";

const LoadingPageList = (): JSX.Element => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid item xs={2} sm={4} md={4} key={item}>
          <Skeleton width={340} height={420} animation="wave" />
          <Skeleton width={340} height={60} animation="wave" />
        </Grid>
      ))}
    </Grid>
  );
};

export default LoadingPageList;
