import { ApiProxyConnector } from "@elastic/search-ui-elasticsearch-connector/api-proxy";
const connector = new ApiProxyConnector({
  basePath: process.env.REACT_APP_ES_API+"/semantic"
});

export default connector;
