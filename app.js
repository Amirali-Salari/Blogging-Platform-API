import express from "express";
import "dotenv/config";
import { router } from './Routes/router.js'
import './db.js'

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api/v1/', router)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
