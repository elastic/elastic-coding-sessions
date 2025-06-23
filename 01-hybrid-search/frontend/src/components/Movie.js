import { SearchProvider, WithSearch } from "@elastic/react-search-ui";
import { useLocation } from "react-router-dom";
import connector from '../services/SearchConnector'; 
import ReactJson from 'react-json-view';

function Movie() {

    const location = useLocation();
    const movieId = new URLSearchParams(location.search).get("id");

    const config = {
        initialState: {},
        searchQuery: {
            filters: [
                {
                    type: "all",
                    field: "id",
                    values: [movieId]
                }
            ],
            result_fields: {
                title: {
                    snippet: {}
                },
                tagline: {
                    snippet: {}
                },
                genres: {
                    snippet: {}
                },
                backdrop_path: {
                    snippet: {}
                },
                overview: {
                    snippet: {}
                },
                release_date: {
                    snippet: {}
                },
                cast: {
                    snippet: {}
                },
                plot: {
                   raw: {}
                },
                keywords: {
                    raw: {}
                },
                id: {
                    snippet: {}
                }
            },
            result_size: 1
        },
        apiConnector: connector,
        alwaysSearchOnInitialLoad: true,
        trackUrlState: false
    };



    return (
        <SearchProvider config={config}>


            <WithSearch mapContextToProps={({ results }) => ({ results })}>

                {({ results }) => {

                    if (!results || results.length === 0) return <div>Movie not found.</div>;

                    // Get the first result only
                    const movie = results[0];


                    return (
                        <div class="movie">
                        <h1 className="title">{movie.title.raw}</h1>
                        <ReactJson
                            src={results[0]._meta.rawHit._source}
                            theme="twilight"
                            collapsed={false}
                            enableClipboard={false}
                            onEdit={false}
                            displayDataTypes={false}
                            displayObjectSize={false}
                            style={{ marginTop: '2em' }}
                            shouldCollapse={({ src, namespace, type }) => type === 'array'}
                            />
                        </div>

                    )
                }}

            </WithSearch>
        </SearchProvider>
    );
}

export default Movie;
