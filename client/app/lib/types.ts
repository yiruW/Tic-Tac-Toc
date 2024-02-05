export type Player = "X" | "O";

export type Move = {
  gameId: string;
  player: Player;
  location: number;
};

type Log = {
  message: string;
  createdAt: Date;
  isEventValid: Boolean;
};

type LogGroup = {
  _id: String;
  logs: Log[];
};

export type GameLogs = LogGroup[];
