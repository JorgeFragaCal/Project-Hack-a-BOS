import React, { useState, useEffect } from "react";
import { getProfile, getPuntuation } from "../http/index";
import { useParams } from "react-router-dom";
import SectionUserRanking from "../components/Section-User-Ranking";

export function Profile() {
  const [profile, setProfile] = useState([]);
  const [puntuation, setPuntuation] = useState([]);
  const params = useParams();

  useEffect(() => {
    getProfile(params.id).then(profile => {
      setProfile(profile);
    });
  }, [params.id]);
  useEffect(() => {
    getPuntuation(params.id).then(puntuation => {
      setPuntuation(puntuation);
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
          country
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
              {puntuation.map(({ puntuation }) => (
                <h2>{puntuation}</h2>
              ))}
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
              <a href={`mailto:${email}`} className="button-blue">
                Enviar Mensaje
              </a>
            </section>
          </section>
        )
      )}

      <SectionUserRanking userId={params.id} />
    </main>
  );
}
