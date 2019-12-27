import React from "react";
import { Link } from "react-router-dom";
import useForm from "react-hook-form";
import { useAuth } from "../shared/context/auth-context";
import { REGISTER_VALIDATIONS } from "../shared/validations";

export function SignUp() {
  const { signUp } = useAuth();
  const { register, errors, handleSubmit, setError } = useForm({
    mode: "onBlur" // Lanza validaciones cada vez que hago blur
  });
  // Utilizar la funcion creada en el auth-context

  const handleSignUp = formData => {
    return signUp(formData).catch(error => {
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
    <React.Fragment>
      <section id="register" class="auth">
        <form action={handleSubmit(handleSignUp)}>
          <h1>Sign up </h1>

          <fieldset>
            <label for="name">Name</label>
            <input
              ref={register(REGISTER_VALIDATIONS.name)}
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
            <span className="errorMessage">
              {errors.name && errors.name.message}
            </span>
          </fieldset>

          <fieldset>
            <label for="email">Email</label>
            <input
              ref={register(REGISTER_VALIDATIONS.email)}
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email"
            />
            <span className="errorMessage">
              {errors.email && errors.email.message}
            </span>
          </fieldset>

          <fieldset>
            <label for="pass1">Password</label>
            <input
              ref={register(REGISTER_VALIDATIONS.password)}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <span className="errorMessage">
              {errors.password && errors.password.message}
            </span>
          </fieldset>

          <fieldset>
            <label for="pass2">Repeat password</label>
            <input
              id="pass2"
              name="pass2"
              type="password"
              placeholder="Enter your password again"
            />
            <span className="errorMessage">
              {errors.password && errors.password.message}
            </span>
          </fieldset>

          <button className="button-orange">Next</button>

          <p>
            Have an account?
            <Link to="/login"> Log in</Link>
          </p>
        </form>
      </section>
    </React.Fragment>
  );
}
