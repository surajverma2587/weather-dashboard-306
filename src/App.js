import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Banner } from "./components/Banner";
import { RecentSearch } from "./components/RecentSearch";
import { WeatherCard } from "./components/WeatherCard";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";

export const App = () => {
  const [recentCities, setRecentCities] = useState(
    getFromLocalStorage("recentCities")
  );

  const { data, isLoading, error, setUrl } = useFetch("");

  console.log(data);

  return (
    <>
      <Banner setUrl={setUrl} setRecentCities={setRecentCities} />
      <Box sx={{ flexGrow: 1, py: 3 }}>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <RecentSearch recentCities={recentCities} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <WeatherCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
