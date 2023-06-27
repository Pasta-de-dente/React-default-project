const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
//===== IMPORT SCHEMA PARA NAO CHAMAR DUAS VEZES

const Users = require("./schemas/User_schema"); // Importe o modelo
app.use(
  cors({
    origin: "http://localhost:3000", //url do react
  })
);
app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    await mongoose.connect("conexao", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado ao servidor MongoDB");

    const { name, password } = req.body;

    let user = await Users.findOne({ name });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    var isPasswordValid = false;
    if (password.toString() == user.password.toString()) {
      isPasswordValid = true;
    }

    if (!isPasswordValid) {
      throw new Error("Senha incorreta");
    }

    mongoose.connection.close();

    res.status(200).json({ message: "Login realizado com sucesso" });
  } catch (error) {
    console.error("Erro ao conectar ao servidor MongoDB:", error);
    res.status(500).json({ error: "Erro ao conectar ao servidor MongoDB" });
  }
});

app.listen(2000, () => {
  console.log("Servidor na porta:  2000");
});
