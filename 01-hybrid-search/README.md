# Episode 01: Hybrid Search with Elastic

Welcome to the first episode of the **Elastic Coding Sessions** series! In this episode, we explore how to build a hybrid search solution using Elastic, combining the power of traditional keyword search with semantic search capabilities.

## What You'll Learn

- How to set up and configure Elastic for hybrid search.
- Combining keyword and semantic search for better results.
- Practical use cases and implementation tips.

## Resources

- [Elastic Documentation](https://www.elastic.co/guide/index.html)

## How to Start the Application

1. Ensure you have Docker and Docker Compose installed on your machine.
2. Clone this repository and navigate to the `01-hybrid-search` directory:
   ```bash
   git clone https://github.com/your-repo/elastic-coding-sessions.git
   cd elastic-coding-sessions/01-hybrid-search
   ```
3. Start the application using Docker Compose:
   ```bash
   docker-compose up
   ```
4. Access the application at `http://localhost:9200` (or the port specified in the `docker-compose.yml` file).

## Dataset Reference

This episode uses the dataset from the [Elastiflix](https://github.com/elastic/Elastiflix) project. Follow these steps to load the dataset:

1. Clone the Elastiflix repository:
   ```bash
   git clone https://github.com/elastic/Elastiflix.git
   ```
2. Follow the instructions in the Elastiflix repository to set up and ingest the dataset into your Elastic instance.
3. Once the dataset is loaded, you can use it to test the hybrid search functionality demonstrated in this episode.

Stay tuned for more episodes in the series!