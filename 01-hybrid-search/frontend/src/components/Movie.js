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
