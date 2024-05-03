import express from "express";
import bodyParser from "body-parser";

// import indexRouter from "./src/routes/index";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.set("view engine", "ejs");
app.set('views', "./src/views");

app.get("/", (req, res) => {
  return res.render("index");
});

app.use(express.static("public"));

app.listen(21020, () => {
  console.log("Servidor Portfolio Profissional Online!");
});
