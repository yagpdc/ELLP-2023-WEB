const express = require("express");
const User = require("./models/user.models");

const app = express();
app.use(express.json());

const randomID = () => Math.random().toString(36).substr(2, 9);

const users = [
    new User(randomID(), "Yago", "ysantanaf@gmail.com", 27),
    new User(randomID(), "Carla", "carlota_tartaruga@gmail.com", 25),    
];

app.get("/", (req, res) => {
    res.send("Hello, world!");
    }
);

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado",
    });
  }
});

app.post("/users", (req, res) => {
  const { nome, email, idade } = req.body;
  const newUser = new User(Date.now().toString(), nome, email, idade);
  users.push(newUser);

  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  const { nome, email, idade } = req.body;
  users[userIndex] = { id: userId, nome, email, idade };

  res.json(users[userIndex]);
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  const deletedUser = users.splice(userIndex, 1)[0];
  res.json(deletedUser);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

