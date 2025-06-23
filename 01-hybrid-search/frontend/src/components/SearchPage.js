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
