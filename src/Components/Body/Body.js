import React, { Fragment } from "react";
import "./Body.scss";
import Peliculas from '../Peliculas/Peliculas';

const Body = () => {
  return (
    <Fragment>
      <div className="body">
        <h1>Download YTS YIFI movies: HD smalles size</h1>
        <p>
          Welcome to the official YTS.MX (.LT) website. Here you can browse and
          download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D
          quality, all at the smallest file size. YTS Movies Torrents.{" "}
        </p>
        <b>
          IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
        </b>
        <p className="popular-downloads"><span>★</span> Popular Downloads</p>
        <hr></hr>
      </div>
      <div className="body__popular">
        <Peliculas />
      </div>
    </Fragment>
  );
};

export default Body;
