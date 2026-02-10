import 'dotenv/config'
import express from "express"
import cors from "cors"

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(cors());

app.get("/health", (req, res) => {
    res.send("<body><h1>JigBooker</h1>by JigChore-Tech</body>");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});