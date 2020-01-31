import React, { useState, useEffect } from "react";
import { getProfile, uploadAccount, getPuntuation } from "../http/index";
import { SectionUserEvents } from "../components/Section-User-Events";
import SectionUserRanking from "../components/Section-User-Ranking";
import useForm from "react-hook-form";
import { useAuth } from "../shared/context/auth-context";
import { PROFILE_VALIDATIONS } from "../shared/validations";
export function MyProfile() {
  const [open, setOpen] = useState(true);
  const [hide, setHide] = useState(true);
  const [profile, setProfile] = useState([]);
  const [puntuation, setPuntuation] = useState([]);
  const { user, userType } = useAuth();
  const { register, errors, handleSubmit, formState, setError } = useForm({
    mode: "onBlur"
  });

  const updateAccount = formData => {
    return uploadAccount(formData)
      .then(setOpen(!open))
      .then(setHide(!hide))
      .then(setTimeout(a => window.location.reload(), 2000))
      .catch(error => {
        if (error) {
          setError();
        }
      });
  };

  useEffect(() => {
    getProfile(user.userData.id).then(profile => {
      setProfile(profile);
    });
  }, [user.userData.id]);

  useEffect(() => {
    getPuntuation(user.userData.id).then(puntuation => {
      setPuntuation(puntuation);
    });
  }, [user.userData.id]);

  if (!profile) return null;

  return (
    <React.Fragment>
      <div className={` ${hide ? "uploadinfo" : "alert"}`}>
        updated information
        <button id="close" onClick={e => setHide(!hide)}>
          {" "}
          X{" "}
        </button>
      </div>
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
            id
          }) => (
            <section className="profile" key={id}>
              <div
                className="image-profile"
                style={{
                  backgroundImage: `url(${
                    avatar === " " ? "https://via.placeholder.com/300" : avatar
                  }`
                }}
              />
              <section id="user-data">
                {puntuation.map(({ puntuation }, i) => (
                  <h2 key={i}>{puntuation}</h2>
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
            onSubmit={handleSubmit(updateAccount)}
          >
            <h2>Cover all fields</h2>
            <div className="col-3">
              <fieldset>
                <label htmlFor="username">Username</label>
                <input
                  ref={register(PROFILE_VALIDATIONS.username)}
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
              {userType === "Developer" && (
                <fieldset>
                  <label> Anonymous</label>
                  <section className="radio" id="anonymouss">
                    <input
                      ref={register}
                      id="1"
                      name="anonymous"
                      type="radio"
                      value="true"
                    />
                    <label htmlFor="1">
                      <i className="fas fa-check-circle"></i>
                    </label>

                    <input
                      ref={register}
                      id="2"
                      name="anonymous"
                      type="radio"
                      value="false"
                    />
                    <label htmlFor="2">
                      <i className="fas fa-times-circle"></i>
                    </label>
                  </section>
                </fieldset>
              )}
              <fieldset>
                <i className="fa fa-upload fa-fw"></i>
                <input
                  ref={register}
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
                ref={register(PROFILE_VALIDATIONS.email)}
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
                  ref={register({})}
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
                  ref={register({
                    lastName: {
                      required: "The lastName is required"
                    }
                  })}
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
                    number: {
                      required: "The number is required"
                    },
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
                  ref={register({
                    address: {
                      required: "The address is required"
                    }
                  })}
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
                  ref={register({
                    city: {
                      required: "The city is required"
                    }
                  })}
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
                  ref={register({
                    country: {
                      required: "The country is required"
                    }
                  })}
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
              //onClick={e => setHide(!hide)}
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
    </React.Fragment>
  );
}
