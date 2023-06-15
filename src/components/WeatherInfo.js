import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

import { WeatherCard } from "./WeatherCard";

export const WeatherInfo = ({ data, error }) => {
  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h6" gutterBottom component="h2" align="center">
          Weather Information
        </Typography>
        <Divider />
      </Box>
      {error && (
        <Alert severity="error">Something went wrong. Please try again..</Alert>
      )}
      {!error && data && <WeatherCard data={data} />}
      {!error && !data && (
        <Alert severity="info">
          You're weather information will be displayed here.
        </Alert>
      )}
    </Stack>
  );
};
