import express, { Request, Response }from "express";
import router from "./routes";


const app = express();
const port = 3000;

app.use(express.json()) // lidar com requisições json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Routes
app.use("", router)


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

export default app
