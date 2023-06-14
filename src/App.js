import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { Banner } from "./components/Banner";
import { RecentSearch } from "./components/RecentSearch";
import { WeatherCard } from "./components/WeatherCard";

export const App = () => {
  return (
    <Container maxWidth="lg">
      <Banner />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <RecentSearch />
          </Grid>
          <Grid item xs={12} sm={9}>
            <WeatherCard />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
