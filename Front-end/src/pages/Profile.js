import React, { useState, useEffect } from "react";
import { getProfile } from "../http/get-account";
import { useParams } from "react-router-dom";
import SectionUserRanking from "../components/Section-User-Ranking";

export function Profile() {
  const [profile, setProfile] = useState([]);
  const params = useParams();

  useEffect(() => {
    getProfile(params.id).then(profile => {
      setProfile(profile);
    });
  }, [params.id]);

  if (!profile) return null;

  return (
    <main className="mainProfile">
      {profile.map(
        ({
          username,
          name,
          lastName,
          email,
          phone,
          image,
          address,
          city,
          country,
          puntuation
        }) => (
          <section className="profile">
            <div
              className="image"
              style={{
                backgroundImage: `url(${
                  image === "N/A" ? "https://via.placeholder.com/1000" : image
                }`
              }}
            />
            <section>
              <h2>1000000</h2>
              <h1>{username}</h1>
              <h3>
                {name} {lastName}
              </h3>
              <div>
                <p>{email}</p>
                <p>{phone}</p>
                <p>
                  {address}, {city}, {country}
                </p>
              </div>
              <button className="button-orange">Enviar Mensaje</button>
            </section>
          </section>
        )
      )}
      <section>
        <SectionUserRanking />
      </section>
    </main>
  );
}
