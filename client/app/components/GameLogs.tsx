import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { fetchLogs } from "../lib/actions";

export default async function GameLogs({}: {}) {
  const logs = await fetchLogs();
  return (
    <Box mt={10}>
      {logs?.map((group) => (
        <List>
          {group.logs
            ?.sort(
              (a, b) =>
                new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime()
            )
            .map((log, index) => (
              <ListItem
                key={index}
                style={{ color: log.isEventValid ? "#000" : "#b21" }}
              >
                <Typography variant="body2">
                  {new Date(log.createdAt).toLocaleString()}: {log.message}
                </Typography>
              </ListItem>
            ))}
          <Divider />
        </List>
      ))}
    </Box>
  );
}
