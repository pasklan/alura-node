import mongoose from "mongoose";

mongoose.connect("stringdeconexaodobancoaqui");

let db = mongoose.connection;

export default db;
