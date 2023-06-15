import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { Banner } from "./components/Banner";
import { RecentSearch } from "./components/RecentSearch";
import { WeatherInfo } from "./components/WeatherInfo";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";

export const App = () => {
  const [recentCities, setRecentCities] = useState(
    getFromLocalStorage("recentCities")
  );

  const { data, isLoading, error, setUrl } = useFetch("");

  return (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: 4 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Banner setUrl={setUrl} setRecentCities={setRecentCities} />
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, py: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <RecentSearch
                recentCities={recentCities}
                setRecentCities={setRecentCities}
                setUrl={setUrl}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <WeatherInfo data={data} error={error} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
