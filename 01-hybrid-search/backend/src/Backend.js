/*
Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
or more contributor license agreements. See the NOTICE file distributed with
this work for additional information regarding copyright
ownership. Elasticsearch B.V. licenses this file to you under
the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License.
You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
distributed under the License. (See <attachments> above for file contents. You may not need to search or read the file again.)
*/
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