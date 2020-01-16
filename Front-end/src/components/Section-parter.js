import React from "react";
import "../css/styles.css";
import img1 from "../img/partners/hablogo.png";
import softtek from "../img/partners/softtek.png";
import oesia from "../img/partners/oesia.png";
import improvingmetrics from "../img/partners/improvingmetrics.png";
import altia from "../img/partners/altia.png";
import luckia from "../img/partners/luckia.png";
import opositatest from "../img/partners/opositatest.png";
import redegal from "../img/partners/redegal.png";
import tecdesoft from "../img/partners/tecdesoft.png";
import everis from "../img/partners/everis.png";
import plexus from "../img/partners/plexus.png";
import netex from "../img/partners/netex.svg";

function Partners() {
  return (
    <section id="companies">
      <h2>Partners</h2>

      <a href="https://hack-a-bos.com/">
        <div
          className="image-partner"
          style={{
            backgroundImage: `url(${img1}`
          }}
        />
      </a>

      <a href="https://www.softtek.com/es/">
        <div
          className="image-partner"
          style={{
            backgroundImage: `url(${softtek}`
          }}
        />
      </a>

      <a href="http://grupooesia.com/en/">
        <div
          className="image-partner"
          style={{
            backgroundImage: `url(${oesia}`
          }}
        />
      </a>
      <a href="https://www.improvingmetrics.com/">
        <div
          className="image-partner"
          style={{
            backgroundImage: `url(${improvingmetrics}`
          }}
        />
      </a>
      <a href="https://www.altia.es/es/altia">
        <div
          className="image-partner"
          style={{
            backgroundImage: `url(${altia}`
          }}
        />
      </a>
      <a href="https://www.luckia.es/">
        <div
          className="image-partner"
          style={{
            backgroundImage: `url(${luckia}`
          }}
        />
      </a>
      <a href="https://www.opositatest.com/">
        <div
          className="image-partner"
          style={{
            backgroundImage: `url(${opositatest}`
          }}
        />
      </a>
      <a href="https://www.redegal.com/es/">
        <div
          className="image-partner"
          style={{
            backgroundImage: `url(${redegal}`
          }}
        />
      </a>
      <a href="http://www.tecdesoft.es/">
        <div
          className="image-partner"
          style={{
            backgroundImage: `url(${tecdesoft}`
          }}
        />
      </a>
      <a href="https://www.everis.com/spain/es">
        <div
          className="image-partner"
          style={{
            backgroundImage: `url(${everis}`
          }}
        />
      </a>
      <a href="https://www.tecnologiasplexus.com/">
        <div
          className="image-partner"
          style={{
            backgroundImage: `url(${plexus}`
          }}
        />
      </a>
      <a href="https://www.netexlearning.com/">
        <div
          className="image-partner"
          style={{
            backgroundImage: `url(${netex}`
          }}
        />
      </a>
    </section>
  );
}

export default Partners;
