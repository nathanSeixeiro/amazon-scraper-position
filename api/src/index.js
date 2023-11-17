import express from "express";
import cors from "cors";

import { router } from "./routes/router.js";

// basic express server
const app = express();
const port = 3000;

app.use(express.json());
//use cors for allowed the frontend make a requests
app.use(cors());
app.use(router);

app.listen(port, () => console.log(`💻 listening on port: ${port}`));
