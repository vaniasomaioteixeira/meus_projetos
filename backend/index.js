import "dotenv/config";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./config/swagger-output.json" with { type: "json" };
import ProjetoRoutes from "./Routes/ProjetoRoutes.js";
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL;
const app = new express();
app.use(express.json());
app.use(cors({
    credentials: true, 
    origin: FRONTEND_URL
}));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", ProjetoRoutes);

app.listen(PORT, ()=>{
    `Servidor rodando na porta ${PORT}`;
});