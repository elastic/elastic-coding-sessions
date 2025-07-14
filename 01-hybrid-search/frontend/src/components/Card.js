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

import * as React from "react";
import ComingSoon from '../assets/coming-soon.png'

function Card(props) {
  const renderCast = !!props.movie.cast.raw.length && <div className="cast"><p>Starring {props.movie.cast.raw.slice(0, 4).map(c => c + ", ")} ... </p></div>

  return (
    <div className="card" onClick={() => {window.location.href = `/movie?id=${props.movie.id.raw}`}}>
      <div className="wrapper">
        <div className="image">
          <div className="poster">

            <img loading="lazy" className="poster" src={!props.movie.poster_path.raw ? ComingSoon : `https://image.tmdb.org/t/p/w220_and_h330_face/${props.movie.poster_path.raw}`} alt={props.movie.title.raw} />
          </div>
        </div>
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <div>
                <h2 dangerouslySetInnerHTML={{ __html: props.movie.title.raw }} />
              </div>
              <span className="release_date">
                <span className="score">{parseFloat(props.movie._meta.rawHit._score).toFixed(2)}</span><span> - </span>
                
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit"
                }).format(new Date(props.movie.release_date.raw))}</span>
            </div>
          </div>
          <div className="overview">
            <p dangerouslySetInnerHTML={{ __html: props.movie.overview.raw }} />
          </div>
          {renderCast}
        </div>
      </div>
    </div>
  )

}

export default Card
