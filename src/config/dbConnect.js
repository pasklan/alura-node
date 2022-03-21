import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://usuario:paltronasco@banco.bnqvz.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
