#!/bin/sh

MONGO_SERVER="$HOME/Mongo_db/mongodb/bin/mongod"
MONGO_SHELL="$HOME/Mongo_db/mongosh/bin/mongosh"
DB_PATH="$HOME/Mongo_db/mongodb-data"

mkdir -p "$DB_PATH"

echo "[+] Starting MongoDB server..."
"$MONGO_SERVER" --dbpath "$DB_PATH" --bind_ip 127.0.0.1 >> /dev/null &
SERVER_PID=$!

sleep 1.5

echo "[+] Launching Mongo shell..."
"$MONGO_SHELL"

echo "[+] Stopping MongoDB server..."
kill $SERVER_PID

