import express from "express";
import cors from "cors";
import SearchConnector from "./SearchConnector.js";
import SemanticConnector from "./SemanticConnector.js";
import HybridConnector from "./HybridConnectorLinear.js";
import HybridConnectorRRF from "./HybridConnectorRRF.js";

const app = express();
if (process.env.LOCAL) {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true
    })
  );
}
app.use(express.json());

app.post("/api/search", async (req, res) => {
  const { state, queryConfig } = req.body;
  const response = await SearchConnector.onSearch(state, queryConfig);
  res.json(response);
});

app.post("/api/semantic/search", async (req, res) => {
  const { state, queryConfig } = req.body;
  const response = await SemanticConnector.onSearch(state, queryConfig);
  res.json(response);
});

app.post("/api/hybrid-linear/search", async (req, res) => {
  const { state, queryConfig } = req.body;
  const response = await HybridConnector.onSearch(state, queryConfig);
  res.json(response);
});

app.post("/api/hybrid-rrf/search", async (req, res) => {
  const { state, queryConfig } = req.body;
  const response = await HybridConnectorRRF.onSearch(state, queryConfig);
  
  res.json(response);
});

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(17700);