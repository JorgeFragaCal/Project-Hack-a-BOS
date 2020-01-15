import React from "react";
import { Link, useHistory } from "react-router-dom";
import useForm from "react-hook-form";
import { useAuth } from "../shared/context/auth-context";
import { REGISTER_VALIDATIONS } from "../shared/validations";

export function SignUp() {
  const { signUp } = useAuth();
  const { register, errors, handleSubmit, formState, setError } = useForm({
    mode: "onBlur"
  });
  const history = useHistory();

  const handleSignUp = formData => {
    return signUp(formData)
      .then(window.alert("Account created"))

      .then(history.push("/login"))
      .catch(error => {
        if (error.response.status === 409) {
          setError(
            "email",
            "conflict",
            "The email already exists. Please try again"
          );
        }
      });
  };

  return (
    <section id="register" className="auth">
      <form onSubmit={handleSubmit(handleSignUp)}>
        <h1>Sign up </h1>
        <div className="col-3">
          <fieldset>
            <label htmlFor="username">Username</label>

            <input
              ref={register(REGISTER_VALIDATIONS.name)}
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
            <select
              ref={register({
                required: "The role is required"
              })}
              id="userType"
              name="userType"
            >
              <option value="Organizating">0rganizating</option>
              <option value="Developer">Developer</option>
              <option value="Recruiting">Recruiting</option>
            </select>
            <span className="errorMessage">
              {errors.userType && errors.userType.message}
            </span>
          </fieldset>
          <fieldset>
            <i className="fa fa-upload fa-fw"></i>
            <input type="file" name="image" id="image" class="inputfile" />

            <label htmlFor="image">Choose a image</label>
          </fieldset>
        </div>

        <fieldset>
          <label htmlFor="email">Email</label>

          <input
            ref={register(REGISTER_VALIDATIONS.email)}
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

        <fieldset>
          <label htmlFor="password">Password</label>

          <input
            ref={register(REGISTER_VALIDATIONS.password)}
            id="password"
            name="password"
            label="password"
            type="password"
            placeholder="Enter your password"
          />
          <span className="errorMessage">
            {errors.password && errors.password.message}
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
          id="signup"
          className="button-blue"
          type="submit"
          disabled={formState.isSubmitting}
        >
          Create account
        </button>

        <p>
          Have an account?
          <Link to="/login"> Log in</Link>
        </p>
      </form>
    </section>
  );
}
