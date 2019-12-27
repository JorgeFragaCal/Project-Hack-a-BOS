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

  // console.log("WATCH: ", watch());
  // console.log("STATE: ", formState);
  // console.log("ERRORS:", errors);

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
          <label for="name">Email</label>
          <input
            ref={register(LOGIN_VALIDATIONS.email)}
            name="email"
            label="Email"
            type="text"
            placeholder="Enter your email"
          />
          <span className="errorMessage">
            {errors.email && errors.email.message}
          </span>
        </fieldset>
        <fieldset>
          <label for="name">Password</label>
          <input
            ref={register(LOGIN_VALIDATIONS.password)}
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <span className="errorMessage">
            {errors.password && errors.password.message}
          </span>
        </fieldset>
        <button
          type="submit"
          className="button-orange"
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
