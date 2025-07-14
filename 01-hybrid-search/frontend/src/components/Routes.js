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
import { Route, Switch } from "react-router-dom";
import SearchPage from './SearchPage';
import Layout from './Layout.js';
import Movie from './Movie';


const Routes = () => (
    <>
        <Switch>
          <RouteWrapper exact path="/" component={SearchPage} layout={Layout}/>
          <RouteWrapper exact path="/movie" component={Movie} layout={Layout}/>
        </Switch>
    </>
)

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

export default Routes;