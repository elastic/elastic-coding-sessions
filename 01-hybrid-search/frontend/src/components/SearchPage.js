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
import Results from "./Results";
import { SearchProvider, SearchBox } from "@elastic/react-search-ui";
import { EuiIcon } from '@elastic/eui';

import connector from '../services/SearchConnectorHybridLinear'; 


function SearchPage() {
  
  const config = {
    apiConnector: connector,
    trackUrlState: true,
    alwaysSearchOnInitialLoad: false,
    searchQuery: {
      search_fields: {
        title: { weight: 2 },
        overview: {},
        plot: {}
      },
      resultsPerPage: 10,
      result_fields: {
        title: { raw: { size: 100 } },
        poster_path: { raw: {} },
        release_date: { raw: {} },
        overview: { raw: { size: 500 } },
        cast: { raw: {} },
        _score: { raw: {} }
      }
    }
  };


  const renderInput = ({ getInputProps }) => (
    <div className="search-box">
      <EuiIcon className="search-box__icon" type="search" />
      <input
        {...getInputProps({
          className: "search-box__input",
          placeholder: "Movie..."
        })}
      />
    </div>
  );

  return (
    <SearchProvider config={config}>

      <SearchBox inputView={renderInput} className="search-box-container" /> 
      <Results />
     
    </SearchProvider>
  );
}

export default SearchPage;
