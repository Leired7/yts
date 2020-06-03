import React, { Fragment } from "react";
import "./Body.css";
import Peliculas from '../Peliculas/Peliculas';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

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
        <p className="random-downloads"><span>★</span> Random Downloads</p>
        <hr></hr>
      </div>

      <div className="body__popular">
        <Peliculas />
      </div>

      <section className="warning">
        <div className="warning__container">
          <h1>Warning! Download only with VPN...</h1>
          <hr />
          <p>Downloading torrents is risky for you: your IP and leaked private data being actively tracked by your ISP and Government Agencies. Protect yourself from expensive lawsuits and fines NOW! You must use a VPN like Express. It is the only way to download torrents fully anonymous by encrypting all traffic with zero logs. </p>
          <h3>″Do not risk it! Protect yourself right now by downloading Express VPN″ - William </h3>
          <button><FontAwesomeIcon icon={faDownload } />   Download Express VPN</button>
        </div>
      </section>

      <section className="latest">
        <div className="latest__title">
          <h2>Latest YIFI Movies Torrents</h2>
          <p>Browse All</p>
        </div>

      </section>


    </Fragment>
  );
};

export default Body;
