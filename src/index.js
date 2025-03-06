import dotenv from "dotenv";
import express from "express";
import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";
import cors from "cors";


dotenv.config();

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(roteadorUsuario);
app.use(roteadorLogin);


app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: link_gitgub",
  });
});

app.listen(port, () => {
  
  console.log(`Serviço escutando na porta:  ${port}`);
});
