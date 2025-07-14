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
import { withSearch, Facet } from "@elastic/react-search-ui";
import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiSpacer,
    EuiLoadingSpinner
} from '@elastic/eui';
import Card from "./Card"
import { MultiCheckboxFacet } from "@elastic/react-search-ui-views";


function Results({ results, totalResults, isLoading }) {

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                <EuiLoadingSpinner size="xxl" />
            </div>
        );
    }

    return (
        totalResults ?
            <EuiFlexGroup gutterSize='l'>
                <EuiFlexItem grow={false}>
                    <EuiFlexGroup gutterSize="xs" direction="column" style={{ paddingLeft: "40px" }}>

                        <EuiFlexItem grow={false}><Facet field="genres"  label="Genres" showSearch={true} view={MultiCheckboxFacet} filterType="any" /></EuiFlexItem>
                        <EuiFlexItem grow={false}><Facet field="cast" show="20" label="Cast member" showSearch={true} view={MultiCheckboxFacet} /></EuiFlexItem>
                        <EuiFlexItem grow={false}><Facet field="production_companies" showSearch={true} label="Production company" view={MultiCheckboxFacet} /></EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem style={{ paddingLeft: "40px", paddingRight: "40px" }}>
                    <EuiSpacer />
                    <EuiFlexGroup direction="column">
                        {results.map(r => {
                            return (
                                <EuiFlexItem key={r.id.raw} grow={false}>
                                    <Card movie={r}></Card>
                                </EuiFlexItem>
                            )
                        })}
                    </EuiFlexGroup>
                </EuiFlexItem>
            </EuiFlexGroup> :
            <div className="no-results">
                
            </div>

    );
}


export default withSearch(({ results, totalResults, isLoading }) => ({
    results, totalResults, isLoading
}))(Results);
