import dotenv from "dotenv";
import { resolve } from "path";
import "./src/database";
import express from "express";
import userRoutes from "./src/routes/userRoutes";
import alunoRoutes from "./src/routes/alunoRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import fileRoutes from "./src/routes/fileRoutes";

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  routes() {
    this.app.use("/alunos", alunoRoutes);
    this.app.use("/users", userRoutes);
    this.app.use("/tokens", tokenRoutes);
    this.app.use("/sendFile", fileRoutes);
  }
}
export default new App().app;
