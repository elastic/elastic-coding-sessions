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

import React from 'react';
import TmdbLogo from '../assets/tmdb-logo.svg';

const Layout = ({ children }) =>
  <div className='page-container'>
    <div className='content-wrap'>{children}</div>

    <div className="footer">
      Credits: This product uses the TMDB API but is not endorsed or certified by TMDB.
      <div className="footer-logo">
        <img
          className="nav__logo"
          src={TmdbLogo}
          alt=""
        />
      </div>
    </div>
  </div>;


export default Layout;
