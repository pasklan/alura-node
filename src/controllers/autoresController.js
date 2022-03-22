import autores from "../models/Autor.js";

class AutorController {
  //recupera os autores
  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  };
  // recupera um autor pelo ID solicitado na requisição
  static listarAutorID = (req, res) => {
    const id = req.params.id;
    autores.findById(id, (err, autores) => {
      if (err) {
        res
          .status(400)
          .send({ message: `ID ${err.message} do autor não encontrado` });
      } else {
        res.status(200).send(autores);
      }
    });
  };

  //Insere um novo autor
  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body);

    autor.save(err => {
      if (err) {
        res
          .status(500)
          .send({ message: `Erro ao cadastrar autor: ${err.message}` });
      } else {
        res.status(201).send(autor.toJSON());
      }
    });
  };
  // Atuliza o autor pelo Id informado na requisição
  static atualizarAutor = (req, res) => {
    const id = req.params.id;
    autores.findByIdAndUpdate(id, { $set: req.body }, err => {
      if (!err) {
        res.status(200).send({ message: "Autor atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirAutor = (req, res) => {
    const id = req.params.id;
    autores.findByIdAndDelete(id, err => {
      if (!err) {
        res.status(200).send({ message: "Autor removido com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default AutorController;
