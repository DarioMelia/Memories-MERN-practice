import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";dotenv.config();

import postRoutes from "./routes/posts.js";


const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URL, {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server started on port: ${PORT}`)))
    .catch((err) => console.error(err.message));

mongoose.set("useFindAndModify", false);

