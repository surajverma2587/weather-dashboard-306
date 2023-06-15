import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const RecentSearch = ({ recentCities, setUrl, setRecentCities }) => {
  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h6" gutterBottom component="h2" align="center">
          Recent Cities
        </Typography>
        <Divider />
      </Box>
      <IconButton
        aria-label="delete"
        onClick={() => {
          localStorage.removeItem("recentCities");
          setRecentCities([]);
        }}
      >
        <DeleteIcon />
      </IconButton>
      {recentCities.length !== 0 ? (
        <List component="nav" aria-label="secondary mailbox folder">
          {recentCities.map((recentCity) => {
            return (
              <ListItemButton
                key={recentCity}
                onClick={() => {
                  setUrl(
                    `https://api.openweathermap.org/data/2.5/weather?q=${recentCity
                      .toLowerCase()
                      .trim()}&appid=${process.env.REACT_APP_API_KEY}`
                  );
                }}
              >
                <ListItemText primary={recentCity} />
              </ListItemButton>
            );
          })}
        </List>
      ) : (
        <Alert severity="warning">You have no recent cities.</Alert>
      )}
    </Stack>
  );
};
