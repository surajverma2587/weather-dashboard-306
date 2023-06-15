import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const WeatherCard = ({ data }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack spacing={2}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="h5" component="div">
            {data.weather[0].description.toUpperCase()}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              Temperature
            </Grid>
            <Grid item xs={6}>
              {data.main.temp}
            </Grid>
            <Grid item xs={6}>
              Humidity
            </Grid>
            <Grid item xs={6}>
              {data.main.humidity}
            </Grid>
            <Grid item xs={6}>
              Wind Speed
            </Grid>
            <Grid item xs={6}>
              {data.wind.speed}
            </Grid>
            <Grid item xs={6}>
              Pressure
            </Grid>
            <Grid item xs={6}>
              {data.main.pressure}
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
};
