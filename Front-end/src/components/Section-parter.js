import React from "react";
import "../css/partners.css";
import img1 from "../img/partners/hablogo.png";
import zara from "../img/partners/zara.png";
import softtek from "../img/partners/softtek.png";
import oesia from "../img/partners/oesia.png";
import improvingmetrics from "../img/partners/improvingmetrics.png";
import altia from "../img/partners/altia.png";

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
      <a href="https://www.zara.com/">
        <div
          className="image-partner"
          style={{
            backgroundImage: `url(${zara}`
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
    </section>
  );
}

export default Partners;
