import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { SearchForm } from "./SearchForm";

export const Banner = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <img
              src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              className="banner-image"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={2} direction="column" alignItems="center">
              <Typography variant="h4" gutterBottom component="h1">
                Weather Dashboard
              </Typography>

              <Typography variant="h6" gutterBottom component="h2">
                Let's start your search today
              </Typography>

              <SearchForm />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
