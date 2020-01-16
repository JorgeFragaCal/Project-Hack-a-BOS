import React, { useState, useEffect } from "react";
import { getProfile, uploadAccount } from "../http/index";
import { SectionUserEvents } from "../components/Section-User-Events";
import useForm from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAuth } from "../shared/context/auth-context";
import SectionUserRanking from "../components/Section-User-Ranking";

export function MyProfile() {
  const [open, setOpen] = useState(true);
  const [profile, setProfile] = useState([]);
  const { user, userType } = useAuth();

  const { register, errors, handleSubmit, formState } = useForm({
    mode: "onBlur"
  });
  const history = useHistory();

  const handleSignUp = formData => {
    return uploadAccount(formData)
      .then(window.alert("Account upload"))
      .then(history.push("/myprofile"));
  };

  useEffect(() => {
    getProfile(user.userData.id).then(profile => {
      setProfile(profile);
    });
  }, []);

  if (!profile) return null;

  return (
    <main className="mainProfile">
      {profile.map(
        (
          {
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
          },
          i
        ) => (
          <section className="profile" key={i}>
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
                <button className="button-edit" onClick={e => setOpen(!open)}>
                  <i className="fas fa-edit "></i>
                  <p>Edit profile</p>
                </button>
              </div>
            </section>
          </section>
        )
      )}

      <section id="register" className="auth">
        <form
          className={` ${open ? "uploadinfo" : ""}`}
          onSubmit={handleSubmit(handleSignUp)}
        >
          <div className="col-3">
            <fieldset>
              <label htmlFor="username">Username</label>
              <input
                ref={register()}
                id="username"
                name="username"
                type="text"
                label="username"
                placeholder="Enter your nick name"
              />
              <span className="errorMessage">
                {errors.username && errors.username.message}
              </span>
            </fieldset>
            <fieldset>
              <label> Anonymous</label>
              <input type="checkbox"></input>
            </fieldset>
            <fieldset>
              <i className="fa fa-upload fa-fw"></i>
              <input
                ref={register()}
                type="file"
                name="image"
                id="image"
                className="inputfile"
              />

              <label htmlFor="image">Choose a image</label>
            </fieldset>
          </div>

          <fieldset>
            <label htmlFor="email">Email</label>

            <input
              ref={register()}
              id="email"
              name="email"
              type="text"
              label="email"
              placeholder="Enter your email"
            />
            <span className="errorMessage">
              {errors.email && errors.email.message}
            </span>
          </fieldset>
          <div className="col-3">
            <fieldset>
              <label htmlFor="name">Name</label>

              <input
                ref={register()}
                id="name"
                name="name"
                type="text"
                label="name"
                placeholder="Enter your name"
              />
              <span className="errorMessage">
                {errors.name && errors.name.message}
              </span>
            </fieldset>
            <fieldset>
              <label htmlFor="lastName">Last Name</label>

              <input
                ref={register()}
                id="lastName"
                name="lastName"
                type="text"
                label="lastName"
                placeholder="Enter your last name"
              />
              <span className="errorMessage">
                {errors.lastName && errors.lastName.message}
              </span>
            </fieldset>
            <fieldset className="register-user">
              <label htmlFor="phone">Telephone</label>
              <input
                ref={register({
                  pattern: {
                    value: /^\d+$/
                  }
                })}
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter your telephone"
              />
              <span className="errorMessage">
                {errors.phone && errors.phone.message}
              </span>
            </fieldset>
          </div>
          <div className="col-3">
            <fieldset>
              <label htmlFor="address">Address</label>

              <input
                ref={register()}
                id="address"
                name="address"
                type="text"
                label="address"
                placeholder="Enter your address"
              />
              <span className="errorMessage">
                {errors.address && errors.address.message}
              </span>
            </fieldset>
            <fieldset>
              <label htmlFor="city">City</label>

              <input
                ref={register()}
                id="city"
                name="city"
                type="text"
                label="city"
                placeholder="Enter your city"
              />
              <span className="errorMessage">
                {errors.city && errors.city.message}
              </span>
            </fieldset>
            <fieldset>
              <label htmlFor="country">Country</label>

              <input
                ref={register()}
                id="country"
                name="country"
                type="text"
                label="country"
                placeholder="Enter your country"
              />
              <span className="errorMessage">
                {errors.country && errors.country.message}
              </span>
            </fieldset>
          </div>
          <button
            id="update"
            className="button-blue"
            type="submit"
            disabled={formState.isSubmitting}
          >
            Edit Info
          </button>
          <br />
        </form>
      </section>
      {userType === "Organizating" ? (
        <SectionUserEvents />
      ) : (
        <SectionUserRanking userId={user.userData.id} />
      )}
    </main>
  );
}
