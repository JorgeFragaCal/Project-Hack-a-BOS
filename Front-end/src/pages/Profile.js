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
          avatar,
          address,
          city,
          country,
          puntuation
        }) => (
          <section className="profile">
            <div
              className="image-profile"
              style={{
                backgroundImage: `url(${
                  avatar === "N/A" ? "https://via.placeholder.com/1000" : avatar
                }`
              }}
            />
            <section id="user-data">
              <h2>250{puntuation}</h2>
              <h1>{username}</h1>
              <h3>
                {name} {lastName}
              </h3>
              <div>
                <p>
                  {address}, {city}, {country}
                </p>
                <p>{phone}</p>
                <p>{email}</p>
              </div>
              <button className="button-blue">Enviar Mensaje</button>
            </section>
          </section>
        )
      )}

      <SectionUserRanking />
    </main>
  );
}
