import mangoose from "mongoose";

const autorSchema = new mangoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
  },
  {
    versionKey: false,
  }
);

const autores = mangoose.model("autores", autorSchema);

export default autores;
