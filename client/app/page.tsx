import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import GameBoard from "./components/GameBoard";

export default function Home() {
  return (
    <main>
      <AppBar>
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            Tic Tac Toe
          </Typography>
        </Toolbar>
      </AppBar>
      <GameBoard />
    </main>
  );
}
