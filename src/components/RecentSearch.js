import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export const RecentSearch = ({ recentCities }) => {
  return (
    <Stack>
      <Typography variant="h6" gutterBottom component="h2" align="center">
        Recent Cities
      </Typography>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        {recentCities.map((recentCity) => {
          return (
            <ListItemButton key={recentCity}>
              <ListItemText primary={recentCity} />
            </ListItemButton>
          );
        })}
      </List>
    </Stack>
  );
};
