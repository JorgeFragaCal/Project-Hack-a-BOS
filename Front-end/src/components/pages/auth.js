import React from "react";
export function Auth() {
  return (
    <section id="access" class="auth">
      <form action="">
        <h1>Inisiar Sesion</h1>
        <fieldset className="ok">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
        </fieldset>
        <fieldset className="error">
          <label for="pass1">Contraseña</label>
          <input type="password" name="pass1" id="pass1" />
        </fieldset>
        <button id="button-orange">Log in</button>
        <p>
          <a href="/">Forgot password?</a>
        </p>
        <p>
          Don't have an account? <a href="/">Sign up</a>
        </p>
      </form>
    </section>
  );
}
