import React from "react";
import { Link } from "react-router-dom";
import useForm from "react-hook-form";
import { useAuth } from "../shared/context/auth-context";
import { LOGIN_VALIDATIONS } from "../shared/validations";

export function Login() {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState,
    errors,
    setError,
    setValue
  } = useForm({
    mode: "onBlur"
  });

  const handleSignin = formData => {
    return signIn(formData)
      .then(d => console.log(d))
      .catch(error => {
        setError(
          "password",
          "invalidCredentials",
          "The email or the password are invalid"
        );
        setValue("password", "");
      });
  };

  return (
    <section id="access" className="auth">
      <form onSubmit={handleSubmit(handleSignin)}>
        <h1>Please Log in</h1>
        <fieldset>
          <label for="email">Email</label>
          <input
            ref={register(LOGIN_VALIDATIONS.email)}
            id="email"
            name="email"
            label="email"
            type="text"
            placeholder="Enter your email"
          />
          <span className="errorMessage">
            {errors.email && errors.email.message}
          </span>
        </fieldset>
        <fieldset>
          <label for="password">Password</label>
          <input
            ref={register(LOGIN_VALIDATIONS.password)}
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
        <button
          id="log"
          type="submit"
          className="button-blue"
          disabled={formState.isSubmitting}
        >
          Log in
        </button>

        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </section>
  );
}
