# Tic-Tac-Toc

## Steps to Run Game Locally
1. clone this repo locally
```
git clone git@github.com:yiruW/Tic-Tac-Toc.git
```
2. put `.env` file under `server` folder
3. run script
```
cd Tic-Tac-Toc
npm install
npm run game
```
Then the local address is printed in console (normally `http://localhost:3000`)

if the above script not work, please try
```
cd Tic-Tac-Toc
cd server
npm install
npm run start
cd ../client
npm install
npm run start
```