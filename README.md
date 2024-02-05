# Tic-Tac-Toe

## Steps to Run Game Locally
1. clone this repo locally
```
git clone git@github.com:yiruW/Tic-Tac-Toe.git
```
2. add environment variables to server/.env
3. run script
```
cd Tic-Tac-Toe
npm install
npm run game
```
Then the local address is printed in console (normally `http://localhost:3000`)

if the above script not work, please try
```
cd Tic-Tac-Toe
cd server
npm install
npm run start
cd ../client
npm install
npm run start
```