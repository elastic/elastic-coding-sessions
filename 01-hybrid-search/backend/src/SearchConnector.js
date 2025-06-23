import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";

const connector = new ElasticsearchAPIConnector({
  host: process.env.ES_HOST,
  index: process.env.ES_INDEX,
  apiKey: process.env.ES_API_KEY
});

export default connector;