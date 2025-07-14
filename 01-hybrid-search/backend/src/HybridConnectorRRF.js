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

import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";

/**
 * rank_window_size: This value determines the size of the individual result sets per query. 
 *    A higher value will improve result relevance at the cost of performance. 
 *    The final ranked result set is pruned down to the search request’s size
 * rank_constant: A higher value indicates that lower ranked documents have more influence.
 */
const connector = new ElasticsearchAPIConnector({
  host: process.env.ES_HOST,
  index: process.env.ES_INDEX,
  apiKey: process.env.ES_API_KEY
}, (requestBody, requestState, queryConfig) => {

  if (!requestState.searchTerm) return requestBody;

  const body = {
    retriever: {
      rrf: {
        retrievers: [
          {
            standard: {
              query: requestBody.query
            }
          },
          {
            standard: {
              query: {
                semantic: {
                  field: "plot_elser",
                  query: requestState.searchTerm
                }
              }
            }
          }
        ],
        rank_window_size: 50,
        rank_constant: 1
      }
    }
  }

  //delete the original query and sort from requestBody
  delete requestBody.query;
  delete requestBody.sort;

  //adding the new "retriever" clause to the requestBody
  requestBody.retriever = body.retriever;

  console.debug(JSON.stringify(requestBody, null, 2))
  return requestBody;
});

export default connector;