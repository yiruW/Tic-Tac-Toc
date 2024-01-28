import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import GameBoard from "./components/GameBoard";

export default function Home() {
  return (
    <main >
      <AppBar>
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            Tic Tac Toc
          </Typography>
            {/* {pages.map((page) => {
              return (
                <Button href={page.href} sx={{ background: "#fff", mx: 1}}>{page.name}</Button>
              );
            })} */}
        </Toolbar>
      </AppBar>
      <GameBoard />
    </main>
  );
}
